import { NextResponse } from "next/server";

const BASE_URL = "https://cmil944nr70e8fzilkr0w632v.agent.pstage.smyth.ai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { input } = body;

    if (!input) {
      return NextResponse.json({ error: "Input is required" }, { status: 400 });
    }

    // Step 1: Parse
    console.log("🔍 Step 1: Parsing...");
    const parseRes = await fetch(`${BASE_URL}/api/parse_error`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ raw_input: input }),
    });
    const parseResponse = await parseRes.json();
    const parsed = parseResponse?.result?.Output?.parsed_data || parseResponse;

    // Step 2: Analyze
    console.log("🧠 Step 2: Analyzing...");
    const analyzeRes = await fetch(`${BASE_URL}/api/analyze_root_cause`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: parsed.language || "javascript",
        error_message: parsed.error_message || input,
        code_snippet: parsed.code_snippet || "",
        context_summary: parsed.context_summary || "",
      }),
    });
    const rootCauseResponse = await analyzeRes.json();
    const rootCause = rootCauseResponse?.result?.Output || rootCauseResponse;

    // Step 3 & 4: Search
    console.log("🌐 Step 3-4: Searching...");
    const [soRes, docsRes] = await Promise.all([
      fetch(`${BASE_URL}/api/search_stackoverflow`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          search_queries: parsed.search_queries || [
            parsed.error_message || input,
          ],
          error_message: parsed.error_message || input,
        }),
      }),
      fetch(`${BASE_URL}/api/search_documentation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: parsed.language || "javascript",
          search_queries: parsed.search_queries || [
            parsed.error_message || input,
          ],
        }),
      }),
    ]);

    const soResponse = await soRes.json();
    const docsResponse = await docsRes.json();
    const soResearch = soResponse?.result?.Output || soResponse;
    const docsResearch = docsResponse?.result?.Output || docsResponse;

    // Step 5: Synthesize
    console.log("💡 Step 5: Synthesizing...");
    const synthesizeRes = await fetch(`${BASE_URL}/api/synthesize_solution`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: parsed.language || "javascript",
        error_message: parsed.error_message || input,
        code_snippet: parsed.code_snippet || "",
        root_cause:
          typeof rootCause === "string" ? rootCause : JSON.stringify(rootCause),
        stackoverflow_research:
          typeof soResearch === "string"
            ? soResearch
            : JSON.stringify(soResearch),
        docs_research:
          typeof docsResearch === "string"
            ? docsResearch
            : JSON.stringify(docsResearch),
      }),
    });
    const solutionResponse = await synthesizeRes.json();
    const solution = solutionResponse?.result?.Output || solutionResponse;

    // Step 6: Prevention
    console.log("🛡️ Step 6: Prevention...");
    const preventionRes = await fetch(
      `${BASE_URL}/api/provide_prevention_tips`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: parsed.language || "javascript",
          error_type: parsed.error_message || input,
          solution:
            typeof solution === "string" ? solution : JSON.stringify(solution),
        }),
      }
    );
    const preventionResponse = await preventionRes.json();
    const prevention = preventionResponse?.result?.Output || preventionResponse;

    console.log("🎉 Complete!");

    return NextResponse.json({
      output: `${
        typeof solution === "string"
          ? solution
          : JSON.stringify(solution, null, 2)
      }\n\n${
        typeof prevention === "string"
          ? prevention
          : JSON.stringify(prevention, null, 2)
      }`,
      details: { parsed, rootCause, solution, prevention },
    });
  } catch (error: unknown) {
    const err = error as Error;
    console.error("❌ Error:", err);
    return NextResponse.json(
      {
        error: err.message,
        output: `**Error:** ${err.message}\n\nPlease try again.`,
      },
      { status: 500 }
    );
  }
}
