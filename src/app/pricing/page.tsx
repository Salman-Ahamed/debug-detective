import Link from "next/link";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#0a0a14] via-[#0f0520] to-[#050a14] text-slate-100 pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00f3ff] to-[#bc13fe]">
              Simple Pricing
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include our core AI
            debugging features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <div className="p-8 rounded-2xl bg-[#1a1b26]/90 border border-white/10 backdrop-blur-xl hover:scale-105 transition-transform">
            <div className="text-sm font-bold text-[#00f3ff] mb-2">FREE</div>
            <div className="text-4xl font-black mb-2">$0</div>
            <div className="text-slate-400 mb-8">Per month</div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#00f3ff] text-xl">✓</span>
                <span className="text-slate-300">
                  10 debugging sessions/month
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00f3ff] text-xl">✓</span>
                <span className="text-slate-300">Basic error analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00f3ff] text-xl">✓</span>
                <span className="text-slate-300">StackOverflow search</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-600 text-xl">✗</span>
                <span className="text-slate-500">Documentation search</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-600 text-xl">✗</span>
                <span className="text-slate-500">Priority support</span>
              </li>
            </ul>

            <Link
              href="/detective"
              className="block w-full text-center px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="p-8 rounded-2xl bg-linear-to-b from-[#00f3ff]/20 to-[#bc13fe]/20 border-2 border-[#00f3ff] backdrop-blur-xl hover:scale-105 transition-transform relative">
            <div className="absolute top-0 right-0 bg-[#00f3ff] text-black text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              POPULAR
            </div>
            <div className="text-sm font-bold text-[#00f3ff] mb-2">PRO</div>
            <div className="text-4xl font-black mb-2">$29</div>
            <div className="text-slate-400 mb-8">Per month</div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#00f3ff] text-xl">✓</span>
                <span className="text-white">Unlimited sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00f3ff] text-xl">✓</span>
                <span className="text-white">Advanced AI analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00f3ff] text-xl">✓</span>
                <span className="text-white">Full documentation search</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00f3ff] text-xl">✓</span>
                <span className="text-white">Code fix generation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00f3ff] text-xl">✓</span>
                <span className="text-white">Email support</span>
              </li>
            </ul>

            <Link
              href="/detective"
              className="block w-full text-center px-6 py-3 rounded-lg bg-linear-to-r from-[#00f3ff] to-[#0066ff] text-black font-bold hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] hover:scale-105 transition-all"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="p-8 rounded-2xl bg-[#1a1b26]/90 border border-white/10 backdrop-blur-xl hover:scale-105 transition-transform">
            <div className="text-sm font-bold text-[#bc13fe] mb-2">
              ENTERPRISE
            </div>
            <div className="text-4xl font-black mb-2">Custom</div>
            <div className="text-slate-400 mb-8">Contact us</div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#00f3ff] text-xl">✓</span>
                <span className="text-slate-300">Everything in Pro</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00f3ff] text-xl">✓</span>
                <span className="text-slate-300">Dedicated support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00f3ff] text-xl">✓</span>
                <span className="text-slate-300">Custom integrations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00f3ff] text-xl">✓</span>
                <span className="text-slate-300">Team collaboration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00f3ff] text-xl">✓</span>
                <span className="text-slate-300">SLA guarantee</span>
              </li>
            </ul>

            <Link
              href="#"
              className="block w-full text-center px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-[#1a1b26]/90 border border-white/10">
              <h3 className="text-xl font-bold mb-2">Can I cancel anytime?</h3>
              <p className="text-slate-400">
                Yes! You can cancel your subscription at any time. No questions
                asked.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#1a1b26]/90 border border-white/10">
              <h3 className="text-xl font-bold mb-2">Is there a free trial?</h3>
              <p className="text-slate-400">
                Yes, Pro plan comes with a 14-day free trial. No credit card
                required.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#1a1b26]/90 border border-white/10">
              <h3 className="text-xl font-bold mb-2">
                What languages are supported?
              </h3>
              <p className="text-slate-400">
                We support all major programming languages including JavaScript,
                Python, Java, C#, Go, Rust, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
