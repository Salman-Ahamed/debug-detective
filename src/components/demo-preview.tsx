import { Badge, Button, Card, CardContent } from "@/components/ui";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bug,
  CheckCircle2,
  Code,
  Copy,
  Lightbulb,
  Search,
  Terminal,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const DemoPreview = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("const items = data?.items ?? [];");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-16"
    >
      <Card className="bg-card/50 border-border overflow-hidden shadow-2xl shadow-primary/5 py-0 gap-0">
        {/* Terminal Header */}
        <div className="px-4 py-3 bg-linear-to-r from-muted/80 to-muted/50 border-b border-border flex items-center justify-between">
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
          <Badge variant="secondary" className="text-xs gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Live Demo
          </Badge>
        </div>

        {/* Chat Content */}
        <div className="p-6 space-y-6 bg-linear-to-b from-background/50 to-background">
          {/* User Message - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-start gap-3 justify-end"
          >
            <div className="flex flex-col items-end max-w-[80%]">
              <span className="text-xs text-muted-foreground mb-1.5 mr-1">
                You
              </span>
              <div className="bg-linear-to-br from-primary to-blue-600 rounded-2xl rounded-tr-sm p-4 shadow-lg shadow-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Bug className="h-4 w-4 text-primary-foreground/80" />
                  <span className="text-xs font-medium text-primary-foreground/80">
                    Error Report
                  </span>
                </div>
                <code className="text-sm text-primary-foreground font-mono">
                  TypeError: Cannot read property &apos;map&apos; of undefined
                </code>
                <div className="mt-3 p-2 bg-black/20 rounded-lg">
                  <code className="text-xs text-primary-foreground/90 font-mono">
                    {`const list = data.items.map(item => item.name);`}
                  </code>
                </div>
              </div>
              <span className="text-[10px] text-muted-foreground mt-1 mr-1">
                Just now
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-lg">
              <User className="h-5 w-5 text-white" />
            </div>
          </motion.div>

          {/* Analyzing Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-2 py-2"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Search className="h-4 w-4 text-primary" />
              </motion.div>
              <span className="text-xs text-muted-foreground">
                Analyzed in 2.3 seconds
              </span>
              <CheckCircle2 className="h-4 w-4 text-green-500" />
            </div>
          </motion.div>

          {/* Bot Message - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="flex items-start gap-3"
          >
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
            <div className="flex flex-col items-start max-w-[85%]">
              <span className="text-xs text-primary font-medium mb-1.5 ml-1">
                Debug Detective
              </span>
              <Card className="bg-card border-border rounded-2xl rounded-tl-sm shadow-lg py-0">
                <CardContent className="p-4 space-y-4">
                  {/* Root Cause */}
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Bug className="h-3.5 w-3.5 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Root Cause Identified
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        The variable{" "}
                        <code className="px-1.5 py-0.5 bg-muted rounded text-xs text-primary font-mono">
                          data
                        </code>{" "}
                        is{" "}
                        <code className="px-1.5 py-0.5 bg-muted rounded text-xs text-red-400 font-mono">
                          undefined
                        </code>{" "}
                        when the component renders. This typically happens with
                        async data fetching.
                      </p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">
                        Solution
                      </p>
                      <p className="text-sm text-muted-foreground mt-1 mb-2">
                        Use optional chaining with nullish coalescing:
                      </p>
                      {/* Code Block */}
                      <div className="relative group">
                        <div className="flex items-center justify-between px-3 py-2 bg-muted/50 border border-border rounded-t-lg">
                          <div className="flex items-center gap-2">
                            <Code className="h-3.5 w-3.5 text-muted-foreground" />
                            <span className="text-xs font-mono text-muted-foreground">
                              javascript
                            </span>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleCopy}
                            className="h-6 px-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            {copied ? (
                              <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                            ) : (
                              <Copy className="h-3.5 w-3.5" />
                            )}
                          </Button>
                        </div>
                        <div className="bg-[#1a1b26] border border-t-0 border-border rounded-b-lg p-3 overflow-x-auto">
                          <code className="text-sm font-mono">
                            <span className="text-purple-400">const</span>{" "}
                            <span className="text-cyan-300">items</span>{" "}
                            <span className="text-white">=</span>{" "}
                            <span className="text-cyan-300">data</span>
                            <span className="text-orange-400">?.</span>
                            <span className="text-cyan-300">items</span>{" "}
                            <span className="text-orange-400">??</span>{" "}
                            <span className="text-yellow-300">[]</span>
                            <span className="text-white">;</span>
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Prevention Tip */}
                  <div className="flex items-start gap-2 pt-2 border-t border-border">
                    <div className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Lightbulb className="h-3.5 w-3.5 text-yellow-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Pro Tip
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Consider using TypeScript with strict null checks to
                        catch these issues at compile time.
                      </p>
                    </div>
                  </div>

                  {/* Sources */}
                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-xs text-muted-foreground">
                      Sources:
                    </span>
                    <Badge variant="outline" className="text-[10px] h-5">
                      MDN Docs
                    </Badge>
                    <Badge variant="outline" className="text-[10px] h-5">
                      StackOverflow
                    </Badge>
                    <Badge variant="outline" className="text-[10px] h-5">
                      React Docs
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <span className="text-[10px] text-muted-foreground mt-1 ml-1">
                2.3s response time
              </span>
            </div>
          </motion.div>
        </div>

        {/* Demo Footer */}
        <div className="px-6 py-4 bg-muted/30 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white font-bold border-2 border-background">
                  ✓
                </div>
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white font-bold border-2 border-background">
                  ✓
                </div>
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white font-bold border-2 border-background">
                  ✓
                </div>
              </div>
              <span className="text-xs text-muted-foreground">
                5 sources analyzed
              </span>
            </div>
          </div>
          <Link href="/detective">
            <Button
              size="sm"
              className="gap-2 bg-linear-to-r from-primary to-purple-600 text-primary-foreground"
            >
              Try it yourself
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
};
