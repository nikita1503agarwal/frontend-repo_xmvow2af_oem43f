import Footer from '../components/Footer'

export default function FAQ() {
  const faqs = [
    { q: 'What services do you offer?', a: 'Recruitment support, admin support, and rostering/VA support. Each service can be scoped to your tools and workflows.' },
    { q: 'How does onboarding work?', a: 'We start with a discovery call, set up a focused pilot, agree on success criteria, and then scale with weekly reporting.' },
    { q: 'What are your payment terms?', a: 'Simple monthly plans with no lock-in. Invoices are issued upfront for the month.' },
    { q: 'How do we communicate?', a: 'We use your preferred tools (email, Slack, Teams). You’ll have a dedicated point of contact and clear response times.' },
    { q: 'What skill levels are your VAs?', a: 'Experienced coordinators with strong communication and documented processes. We match skills to your requirements.' },
    { q: 'How do you handle privacy and data?', a: 'We use secure tools, follow least-access principles and provide documentation on request. NDAs available.' },
    { q: 'Do you cover Australian time zones?', a: 'Yes — AU-friendly coverage with planned overlap for handovers and urgent tasks.' },
    { q: 'What are turnaround times?', a: 'Most tasks are same-day or next-day depending on scope. We’ll agree SLAs during onboarding.' },
    { q: 'Can we scale up or down?', a: 'Yes. Start small and scale as needed. We adjust capacity with clear notice periods.' },
    { q: 'What industries do you support?', a: 'Recruitment, healthcare, aged care, professional services and growing SMEs.' },
  ]

  return (
    <main className="bg-white">
      <section className="pt-28 sm:pt-32 pb-12 bg-gradient-to-b from-white via-white to-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900">FAQs</h1>
          <p className="mt-4 text-zinc-600 max-w-2xl">Short, clear answers to common questions about how we work and what to expect.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-zinc-200/70 p-6 bg-white shadow-sm">
              <div className="text-zinc-900 font-semibold">{f.q}</div>
              <p className="mt-2 text-zinc-600 text-sm max-w-3xl">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
