const DocsPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#0a0a14] via-[#0f0520] to-[#050a14] text-slate-100 pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black mb-6">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00f3ff] to-[#bc13fe]">
            Documentation
          </span>
        </h1>
        <p className="text-xl text-slate-400 mb-12">
          Learn how Debug Detective works and how to get the most out of it.
        </p>

        <div className="space-y-12">
          {/* How it Works */}
          <section className="p-8 rounded-2xl bg-[#1a1b26]/90 border border-[#00f3ff]/20 backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-4xl">🔍</span>
              How It Works
            </h2>
            <div className="space-y-6 text-slate-300">
              <div>
                <h3 className="text-xl font-bold text-[#00f3ff] mb-2">
                  Step 1: Parse Error
                </h3>
                <p>
                  Paste your error message and code snippet. Our AI
                  automatically extracts the error message, code context, stack
                  trace, and identifies the programming language.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00f3ff] mb-2">
                  Step 2: Analyze Root Cause
                </h3>
                <p>
                  The AI analyzes the error to determine the technical root
                  cause and formulates hypotheses about what went wrong.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00f3ff] mb-2">
                  Step 3-4: Research Solutions
                </h3>
                <p>
                  Searches StackOverflow, GitHub, and official documentation to
                  find similar errors and proven solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00f3ff] mb-2">
                  Step 5: Synthesize Solution
                </h3>
                <p>
                  Combines root cause analysis and research findings to create a
                  comprehensive solution with fixed code and explanations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00f3ff] mb-2">
                  Step 6: Prevention Tips
                </h3>
                <p>
                  Provides mentoring advice on how to prevent similar issues in
                  the future.
                </p>
              </div>
            </div>
          </section>

          {/* Usage Examples */}
          <section className="p-8 rounded-2xl bg-[#1a1b26]/90 border border-[#00f3ff]/20 backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-4xl">💡</span>
              Usage Examples
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Example 1: JavaScript Error
                </h3>
                <div className="bg-black/50 p-4 rounded-lg font-mono text-sm">
                  <div className="text-red-400">
                    TypeError: Cannot read property &apos;map&apos; of undefined
                  </div>
                  <div className="text-slate-400 mt-2">
                    {`function UserList() {
  const [users, setUsers] = useState();
  return <ul>{users.map(user => <li>{user.name}</li>)}</ul>;
}`}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">
                  Example 2: Python Error
                </h3>
                <div className="bg-black/50 p-4 rounded-lg font-mono text-sm">
                  <div className="text-red-400">
                    IndexError: list index out of range
                  </div>
                  <div className="text-slate-400 mt-2">
                    {`my_list = [1, 2, 3]
print(my_list[5])`}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="p-8 rounded-2xl bg-[#1a1b26]/90 border border-[#00f3ff]/20 backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-4xl">🎯</span>
              Best Practices
            </h2>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-[#00f3ff] text-xl">✓</span>
                <div>
                  <strong>Include the full error message:</strong> Don&apos;t
                  truncate error messages. The more context, the better.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00f3ff] text-xl">✓</span>
                <div>
                  <strong>Add relevant code:</strong> Include the code where the
                  error occurs, not just the stack trace.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00f3ff] text-xl">✓</span>
                <div>
                  <strong>Provide context:</strong> Mention what you were trying
                  to do when the error occurred.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00f3ff] text-xl">✓</span>
                <div>
                  <strong>Be specific:</strong> Include version numbers of
                  libraries and frameworks when relevant.
                </div>
              </li>
            </ul>
          </section>

          {/* Supported Languages */}
          <section className="p-8 rounded-2xl bg-[#1a1b26]/90 border border-[#00f3ff]/20 backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-4xl">🌐</span>
              Supported Languages
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "JavaScript",
                "TypeScript",
                "Python",
                "Java",
                "C#",
                "Go",
                "Rust",
                "PHP",
                "Ruby",
                "Swift",
                "Kotlin",
                "C++",
              ].map((lang) => (
                <div
                  key={lang}
                  className="p-3 rounded-lg bg-[#00f3ff]/10 border border-[#00f3ff]/30 text-center"
                >
                  {lang}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
