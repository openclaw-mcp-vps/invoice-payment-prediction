export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Billing Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Which Invoices<br />Will Be Paid Late
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          InvoiceAI analyzes your client payment history to flag at-risk invoices before they go overdue — and tells you exactly how to follow up.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $15/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card surprises.</p>
      </section>

      {/* Social proof strip */}
      <section className="border-y border-[#21262d] py-6">
        <p className="text-center text-sm text-[#8b949e]">
          Trusted by <span className="text-[#58a6ff] font-semibold">400+ freelancers</span> and agencies to recover late payments faster
        </p>
      </section>

      {/* Features */}
      <section className="max-w-3xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-6">
        {[
          { icon: "📊", title: "Risk Scoring", desc: "Every invoice gets a late-payment probability score based on client history." },
          { icon: "🤖", title: "AI Strategies", desc: "Get tailored collection message templates for each at-risk client." },
          { icon: "📁", title: "Easy Upload", desc: "Import invoices via CSV or connect your billing tool in seconds." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · billed monthly</p>
          <ul className="text-left text-sm text-[#c9d1d9] space-y-2 mb-8">
            {[
              "Unlimited invoice predictions",
              "AI collection strategy generator",
              "Client risk dashboard",
              "CSV & manual invoice upload",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does the AI predict late payments?",
              a: "It analyzes patterns in your client payment history — average days to pay, invoice size, seasonality — and computes a risk score for each open invoice."
            },
            {
              q: "Do I need to connect my accounting software?",
              a: "No. You can upload a simple CSV of your invoices and client history. Integrations are on the roadmap."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel from your billing portal at any time. You keep access until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="border-b border-[#21262d] pb-6">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} InvoiceAI. All rights reserved.
      </footer>
    </main>
  );
}
