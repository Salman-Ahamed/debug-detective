const AboutPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#0a0a14] via-[#0f0520] to-[#050a14] text-slate-100 pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black mb-6">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00f3ff] to-[#bc13fe]">
            About Us
          </span>
        </h1>
        <p className="text-xl text-slate-400 mb-12">
          Building the future of AI-powered debugging
        </p>

        <div className="space-y-8">
          {/* Mission */}
          <section className="p-8 rounded-2xl bg-[#1a1b26]/90 border border-[#00f3ff]/20 backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="text-4xl">🎯</span>
              Our Mission
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              We believe every developer deserves instant access to expert
              debugging knowledge. Debug Detective uses advanced AI to analyze
              millions of code patterns and provide solutions in seconds, not
              hours. Our goal is to make debugging effortless so you can focus
              on building amazing products.
            </p>
          </section>

          {/* Technology */}
          <section className="p-8 rounded-2xl bg-[#1a1b26]/90 border border-[#00f3ff]/20 backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="text-4xl">⚡</span>
              Technology Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-xl font-bold text-[#00f3ff] mb-2">
                  AI Engine
                </h3>
                <p className="text-slate-300">
                  Powered by Smythos Agent framework with multi-agent
                  architecture for parsing, analysis, research, and synthesis.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00f3ff] mb-2">
                  Frontend
                </h3>
                <p className="text-slate-300">
                  Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
                  for a modern, fast user experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00f3ff] mb-2">
                  Data Sources
                </h3>
                <p className="text-slate-300">
                  Integrates with StackOverflow, GitHub, and official
                  documentation to provide comprehensive solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00f3ff] mb-2">
                  Security
                </h3>
                <p className="text-slate-300">
                  Secure API proxy architecture ensures your code stays private
                  and protected.
                </p>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="p-8 rounded-2xl bg-[#1a1b26]/90 border border-[#00f3ff]/20 backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-4xl">📊</span>
              By the Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-[#00f3ff] to-[#bc13fe] mb-2">
                  50K+
                </div>
                <div className="text-slate-400">Developers Helped</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-[#00f3ff] to-[#bc13fe] mb-2">
                  99.8%
                </div>
                <div className="text-slate-400">Solution Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-[#00f3ff] to-[#bc13fe] mb-2">
                  &lt;10s
                </div>
                <div className="text-slate-400">Avg Response Time</div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="p-8 rounded-2xl bg-linear-to-r from-[#00f3ff]/10 to-[#bc13fe]/10 border border-[#00f3ff]/20 backdrop-blur-xl text-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-slate-300 mb-6">
              Have questions or feedback? We&apos;d love to hear from you!
            </p>
            <a
              href="mailto:hello@debugdetective.ai"
              className="inline-block px-8 py-3 rounded-lg bg-linear-to-r from-[#00f3ff] to-[#0066ff] text-black font-bold hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] transition-all"
            >
              Contact Us
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
