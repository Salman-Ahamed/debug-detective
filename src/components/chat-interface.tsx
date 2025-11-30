"use client";

import { Badge, Button, Card, CardContent, Textarea } from "@/components/ui";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bug,
  CheckCircle2,
  Code,
  Loader2,
  Maximize2,
  Minimize2,
  Search,
  Send,
  Shield,
  Sparkles,
  Terminal,
  User,
  Zap,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import MarkdownRenderer from "./markdown-renderer";

type Message = {
  id: string;
  role: "user" | "bot";
  content: string;
  timestamp: Date;
  status?: "sending" | "sent" | "error";
  responseTime?: number;
};

type DebugStep = {
  id: string;
  label: string;
  icon: React.ElementType;
  status: "pending" | "active" | "complete" | "error";
};

const initialSteps: DebugStep[] = [
  { id: "parse", label: "Parsing", icon: Code, status: "pending" },
  { id: "analyze", label: "Analyzing", icon: Bug, status: "pending" },
  { id: "search", label: "Searching", icon: Search, status: "pending" },
  { id: "synthesize", label: "Synthesizing", icon: Zap, status: "pending" },
  { id: "prevent", label: "Prevention", icon: Shield, status: "pending" },
];

// Typing Indicator
const TypingIndicator = () => (
  <div className="flex items-center gap-1.5">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-2.5 h-2.5 bg-primary rounded-full"
        animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          delay: i * 0.15,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

// Bot Avatar
const BotAvatar = () => (
  <div className="w-10 h-10 rounded-full bg-linear-to-br from-cyan-400 to-purple-600 p-0.5 shrink-0 shadow-lg shadow-primary/20">
    <div className="w-full h-full rounded-full overflow-hidden bg-background flex items-center justify-center">
      <Image
        src="/logo.png"
        alt="Debug Detective"
        width={36}
        height={36}
        className="rounded-full"
      />
    </div>
  </div>
);

// User Avatar
const UserAvatar = () => (
  <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-lg">
    <User className="h-5 w-5 text-white" />
  </div>
);

// Progress Step
const ProgressStep = ({
  step,
  index,
  isLast,
}: {
  step: DebugStep;
  index: number;
  isLast: boolean;
}) => {
  const Icon = step.icon;
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 }}
        className="flex items-center gap-2 shrink-0"
      >
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
            step.status === "complete" &&
              "bg-green-500 text-white shadow-lg shadow-green-500/30",
            step.status === "active" &&
              "bg-primary text-primary-foreground shadow-lg shadow-primary/30",
            step.status === "pending" && "bg-muted text-muted-foreground",
            step.status === "error" &&
              "bg-destructive text-destructive-foreground"
          )}
        >
          {step.status === "complete" ? (
            <CheckCircle2 className="h-4 w-4" />
          ) : step.status === "active" ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Icon className="h-4 w-4" />
            </motion.div>
          ) : step.status === "error" ? (
            <span className="text-xs font-bold">!</span>
          ) : (
            <Icon className="h-4 w-4" />
          )}
        </div>
        <span
          className={cn(
            "text-xs font-medium whitespace-nowrap hidden sm:block transition-colors",
            step.status === "active" && "text-primary",
            step.status === "complete" && "text-green-500",
            step.status === "pending" && "text-muted-foreground",
            step.status === "error" && "text-destructive"
          )}
        >
          {step.label}
        </span>
      </motion.div>
      {!isLast && (
        <div
          className={cn(
            "w-6 sm:w-10 h-0.5 shrink-0 transition-all duration-500",
            step.status === "complete"
              ? "bg-linear-to-r from-green-500 to-green-400"
              : "bg-muted"
          )}
        />
      )}
    </>
  );
};

export default function ChatInterface() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "bot",
      content: `# Welcome to Debug Detective! 🕵️‍♂️

I'm your AI-powered debugging assistant. I'll help you:

- **Parse** your error messages and code
- **Analyze** the root cause of issues
- **Search** StackOverflow & documentation
- **Provide** working solutions with explanations
- **Suggest** prevention strategies

## How to use:

Paste your error message along with the relevant code snippet, and I'll investigate the issue for you.

📚 **[View Documentation](/docs)** for examples and best practices.

**Ready when you are! 🚀**`,
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [debugSteps, setDebugSteps] = useState<DebugStep[]>([]);
  const [startTime, setStartTime] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const updateStep = (stepId: string, status: DebugStep["status"]) => {
    setDebugSteps((prev) =>
      prev.map((step) => (step.id === stepId ? { ...step, status } : step))
    );
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
      status: "sent",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    setStartTime(Date.now());
    setDebugSteps(initialSteps.map((s) => ({ ...s, status: "pending" })));

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    try {
      const stepIds = ["parse", "analyze", "search", "synthesize", "prevent"];
      updateStep("parse", "active");

      const res = await fetch("/api/detective", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: userMsg.content }),
      });

      for (let i = 0; i < stepIds.length; i++) {
        await new Promise((r) => setTimeout(r, 400));
        updateStep(stepIds[i], "complete");
        if (i < stepIds.length - 1) {
          updateStep(stepIds[i + 1], "active");
        }
      }

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || res.statusText);
      }

      const data = await res.json();
      const responseTime = ((Date.now() - startTime) / 1000).toFixed(1);

      let botText = "";

      if (data.details?.solution && data.details?.prevention) {
        // Check for API errors (e.g. credit exhaustion)
        if (
          data.details.solution.result?._error ||
          data.details.prevention.result?._error
        ) {
          throw new Error(
            "Service temporarily unavailable. Please upgrade your plan to continue using Debug Detective."
          );
        }

        const solution =
          typeof data.details.solution === "object" &&
          data.details.solution.solution
            ? data.details.solution.solution
            : typeof data.details.solution === "string"
            ? data.details.solution
            : JSON.stringify(data.details.solution, null, 2);

        const prevention =
          typeof data.details.prevention === "object" &&
          data.details.prevention.tips
            ? data.details.prevention.tips
            : typeof data.details.prevention === "string"
            ? data.details.prevention
            : JSON.stringify(data.details.prevention, null, 2);

        botText = `${solution}\n\n---\n\n## 🛡️ Prevention Tips\n\n${prevention}`;
      } else if (data.output) {
        botText = data.output;
      } else {
        botText = "```json\n" + JSON.stringify(data, null, 2) + "\n```";
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content: botText,
        timestamp: new Date(),
        status: "sent",
        responseTime: parseFloat(responseTime),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error: unknown) {
      setDebugSteps((prev) => prev.map((s) => ({ ...s, status: "error" })));
      const err = error as Error;
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content: `## ❌ Error Occurred\n\nCould not connect to the Debug Detective service.\n\n**Details:** \`${err.message}\`\n\nPlease try again or check your connection.`,
        timestamp: new Date(),
        status: "error",
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
      setTimeout(() => setDebugSteps([]), 2000);
    }
  };

  const activeStep = debugSteps.find((s) => s.status === "active");

  return (
    <div
      className={cn(
        "flex flex-col mx-auto px-4 transition-all duration-500 ease-in-out",
        isExpanded ? "h-full max-w-7xl" : "h-[600px] max-w-4xl mt-8"
      )}
    >
      <Card className="flex flex-col h-full bg-card/50 border-border overflow-hidden shadow-2xl shadow-primary/5 py-0 gap-0">
        {/* ===== HEADER - Fixed at top ===== */}
        <div className="flex-none px-4 py-3 bg-linear-to-r from-muted/80 to-muted/50 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer" />
            </div>
            <div className="flex items-center gap-2 ml-2">
              <Terminal className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                Debug Detective
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant="secondary"
              className="text-xs gap-1.5 hidden sm:flex"
            >
              <Sparkles className="h-3 w-3" />
              AI Powered
            </Badge>
            <Badge variant="outline" className="text-xs gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Online
            </Badge>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* ===== PROGRESS STEPS - Fixed below header ===== */}
        <AnimatePresence>
          {debugSteps.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex-none px-4 py-3 bg-muted/30 border-b border-border"
            >
              <div className="flex items-center justify-center gap-1 sm:gap-2 overflow-x-auto">
                {debugSteps.map((step, index) => (
                  <ProgressStep
                    key={step.id}
                    step={step}
                    index={index}
                    isLast={index === debugSteps.length - 1}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ===== MESSAGES - Scrollable middle section ===== */}
        <div
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto custom-scrollbar"
        >
          <div className="p-4 md:p-6 space-y-6">
            <AnimatePresence mode="popLayout">
              {messages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "flex gap-3",
                    msg.role === "user" ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  {msg.role === "bot" ? <BotAvatar /> : <UserAvatar />}

                  <div
                    className={cn(
                      "flex flex-col max-w-[85%] md:max-w-[80%]",
                      msg.role === "user" ? "items-end" : "items-start"
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center gap-2 mb-1.5 px-1",
                        msg.role === "user" && "flex-row-reverse"
                      )}
                    >
                      <span
                        className={cn(
                          "text-xs font-semibold",
                          msg.role === "bot"
                            ? "text-primary"
                            : "text-muted-foreground"
                        )}
                      >
                        {msg.role === "bot" ? "Debug Detective" : "You"}
                      </span>
                      {msg.role === "bot" && index > 0 && (
                        <Badge
                          variant="secondary"
                          className="text-[10px] h-4 px-1.5"
                        >
                          <Zap className="h-2.5 w-2.5 mr-0.5" />
                          AI
                        </Badge>
                      )}
                    </div>

                    {msg.role === "user" ? (
                      <div className="bg-linear-to-br from-primary to-blue-600 rounded-2xl rounded-tr-sm p-4 shadow-lg shadow-primary/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Bug className="h-4 w-4 text-primary-foreground/80" />
                          <span className="text-xs font-medium text-primary-foreground/80">
                            Debug Request
                          </span>
                        </div>
                        <div className="whitespace-pre-wrap text-sm text-primary-foreground font-mono">
                          {msg.content}
                        </div>
                      </div>
                    ) : (
                      <Card
                        className={cn(
                          "bg-card border-border rounded-2xl rounded-tl-sm shadow-lg overflow-hidden py-0",
                          msg.status === "error" && "border-destructive/50"
                        )}
                      >
                        <CardContent className="p-4">
                          <MarkdownRenderer content={msg.content} />
                          {msg.responseTime && (
                            <div className="flex flex-wrap items-center gap-3 mt-4 pt-3 border-t border-border">
                              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                                <span>Analyzed</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Badge
                                  variant="outline"
                                  className="text-[10px] h-5"
                                >
                                  StackOverflow
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className="text-[10px] h-5"
                                >
                                  Docs
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className="text-[10px] h-5"
                                >
                                  AI
                                </Badge>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    )}

                    <span className="text-[10px] text-muted-foreground mt-1.5 px-1">
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing Indicator */}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex gap-3"
                >
                  <BotAvatar />
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-2 mb-1.5 px-1">
                      <span className="text-xs font-semibold text-primary">
                        Debug Detective
                      </span>
                      <Badge
                        variant="secondary"
                        className="text-[10px] h-4 px-1.5 animate-pulse"
                      >
                        Thinking...
                      </Badge>
                    </div>
                    <Card className="bg-card border-border rounded-2xl rounded-tl-sm shadow-lg py-0">
                      <CardContent className="p-4 space-y-4">
                        <div className="flex items-center gap-3">
                          <TypingIndicator />
                          <span className="text-sm text-muted-foreground">
                            Investigating your error...
                          </span>
                        </div>

                        {activeStep && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg"
                          >
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              >
                                <activeStep.icon className="h-4 w-4 text-primary" />
                              </motion.div>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-foreground">
                                {activeStep.label}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {activeStep.id === "parse" &&
                                  "Extracting error details..."}
                                {activeStep.id === "analyze" &&
                                  "Identifying root cause..."}
                                {activeStep.id === "search" &&
                                  "Searching StackOverflow & docs..."}
                                {activeStep.id === "synthesize" &&
                                  "Creating solution..."}
                                {activeStep.id === "prevent" &&
                                  "Generating prevention tips..."}
                              </p>
                            </div>
                          </motion.div>
                        )}

                        <div className="space-y-1.5">
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Progress</span>
                            <span>
                              {
                                debugSteps.filter(
                                  (s) => s.status === "complete"
                                ).length
                              }
                              /{debugSteps.length} steps
                            </span>
                          </div>
                          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-linear-to-r from-primary via-purple-500 to-primary rounded-full"
                              initial={{ width: "0%" }}
                              animate={{
                                width: `${
                                  (debugSteps.filter(
                                    (s) => s.status === "complete"
                                  ).length /
                                    debugSteps.length) *
                                  100
                                }%`,
                              }}
                              transition={{ duration: 0.5 }}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Scroll anchor */}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* ===== INPUT AREA - Fixed at bottom ===== */}
        <div className="flex-none p-4 bg-muted/30 border-t border-border">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-linear-to-r from-primary/50 to-purple-500/50 rounded-xl opacity-0 group-focus-within:opacity-40 transition-opacity duration-300 blur-md" />

            <div className="relative flex items-center gap-3 bg-background/80 backdrop-blur-sm border border-border rounded-xl p-3">
              <div className="flex items-center gap-2 shrink-0">
                <Bug className="h-4 w-4 text-muted-foreground" />
              </div>
              <Textarea
                ref={textareaRef}
                value={input}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                placeholder="Paste your error message and code here..."
                className="min-h-10 max-h-[150px] bg-transparent border-none resize-none text-foreground custom-scrollbar placeholder:text-muted-foreground focus-visible:ring-0 text-sm"
                rows={2}
                disabled={isLoading}
              />
              <div className="flex flex-col mt-auto justify-end gap-2">
                <Button
                  onClick={sendMessage}
                  disabled={isLoading || !input.trim()}
                  size="lg"
                  className={cn(
                    "bg-linear-to-r from-primary to-purple-600 text-primary-foreground font-bold transition-all duration-300 rounded-lg",
                    "hover:shadow-[0_0_25px_rgba(0,243,255,0.4)] hover:scale-105",
                    "disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none"
                  )}
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-2 px-1">
            <p className="text-[10px] text-muted-foreground">
              <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono">
                Enter
              </kbd>{" "}
              send •{" "}
              <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono">
                Shift+Enter
              </kbd>{" "}
              new line
            </p>
            <div className="flex items-center gap-3">
              {input.length > 0 && (
                <span className="text-[10px] text-muted-foreground">
                  {input.length} chars
                </span>
              )}
              <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Ready
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
