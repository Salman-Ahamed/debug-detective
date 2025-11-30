"use client";

import { DemoPreview } from "@/components/demo-preview";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bug,
  Code,
  Play,
  Search,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Bug,
    title: "Error Parsing",
    description:
      "Automatically extract and structure error messages, stack traces, and code context.",
  },
  {
    icon: Search,
    title: "Multi-Source Search",
    description:
      "Search StackOverflow, GitHub, and official docs simultaneously for solutions.",
  },
  {
    icon: Zap,
    title: "Root Cause Analysis",
    description:
      "AI-powered analysis to identify the exact cause of your errors.",
  },
  {
    icon: Code,
    title: "Code Solutions",
    description:
      "Get working code fixes with detailed explanations and best practices.",
  },
  {
    icon: Shield,
    title: "Prevention Tips",
    description: "Learn how to prevent similar errors in the future.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description:
      "Leverages advanced AI to understand context and provide accurate solutions.",
  },
];

const stats = [
  { value: "10K+", label: "Errors Solved" },
  { value: "50+", label: "Languages Supported" },
  { value: "99%", label: "Accuracy Rate" },
  { value: "<5s", label: "Average Response" },
];

const Home = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyber-cyan rounded-full opacity-10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyber-purple rounded-full opacity-10 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge variant="secondary" className="mb-6 gap-2 text-sm px-4 py-2">
              <Sparkles className="h-4 w-4" />
              AI-Powered Debugging Assistant
            </Badge>

            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="linear-text">Debug Smarter,</span>
              <br />
              <span className="text-foreground">Not Harder</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Paste your error, get instant solutions. Our AI detective analyzes
              root causes, searches multiple sources, and provides working fixes
              in seconds.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/detective">
                <Button
                  size="lg"
                  className="gap-2 bg-linear-to-r from-cyber-cyan to-cyber-blue text-black font-bold text-lg px-8 hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transition-all"
                >
                  Start Debugging
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 text-lg px-8"
              >
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </motion.div>

          {/* Demo Preview */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16"
          >
            <Card className="bg-card/50 border-border overflow-hidden py-0">
              <div className="p-4 bg-muted/50 border-b border-border flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-muted-foreground ml-2">
                  Debug Detective
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-1 bg-linear-to-br from-cyber-cyan/20 to-cyber-blue/20 rounded-lg p-4 border border-cyber-cyan/20">
                    <code className="text-sm text-foreground">
                      TypeError: Cannot read property &apos;map&apos; of
                      undefined
                    </code>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                    👤
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-cyber-cyan to-cyber-purple flex items-center justify-center shrink-0">
                    <Image
                      src="/logo.png"
                      alt="Debug Detective"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="flex-1 bg-card rounded-lg p-4 border border-border">
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong className="text-foreground">Root Cause:</strong>{" "}
                      The variable you&apos;re trying to map over is
                      undefined...
                    </p>
                    <div className="bg-muted rounded p-3">
                      <code className="text-xs text-primary">
                        const items = data?.items ?? [];
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div> */}
          <DemoPreview />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black linear-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">
              Features
            </Badge>
            <h2 className="text-4xl font-black mb-4">
              <span className="linear-text">Everything You Need</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive debugging assistance powered by AI and real-world
              solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card/50 border-border hover:border-primary/50 transition-all group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-cyber-cyan/10 to-cyber-purple/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to <span className="linear-text">Debug Smarter?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join thousands of developers who save hours debugging every week.
            </p>
            <Link href="/detective">
              <Button
                size="lg"
                className="gap-2 bg-linear-to-r from-cyber-cyan to-cyber-blue text-black font-bold text-lg px-10 hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transition-all"
              >
                Start Free
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
