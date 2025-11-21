import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Services() {
  const blocks = [
    {
      title: 'Recruitment Support',
      desc: 'From sourcing to onboarding, we clean up your pipeline and keep it moving.',
      included: ['Candidate sourcing and screening', 'Reference checks and compliance', 'Offer coordination and onboarding'],
      outcomes: ['Faster time-to-fill', 'Cleaner candidate data', 'A calmer hiring week'],
    },
    {
      title: 'Admin Support',
      desc: 'Inbox, calendar, documents and data — organised and handled with care.',
      included: ['Email triage and responses', 'Scheduling and meeting notes', 'Data entry, templates and documentation'],
      outcomes: ['Less context switching', 'Clearer priorities', 'More time on high-value work'],
    },
    {
      title: 'Rostering & VA Support',
      desc: 'On-time rosters, worker notifications and tidy timesheets.',
      included: ['Shift planning and updates', 'Roster changes and notifications', 'Timesheet collection and checks'],
      outcomes: ['Fewer errors', 'Happier teams', 'Predictable coverage'],
    },
  ]

  return (
    <main className="bg-white">
      <section className="pt-28 sm:pt-32 pb-10 bg-gradient-to-b from-white via-white to-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900">Services</h1>
          <p className="mt-4 text-zinc-600 max-w-2xl">Pick what you need now and scale later. Every service comes with clear workflows, simple communication and weekly reporting.</p>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8">
          {blocks.map((b) => (
            <div key={b.title} className="rounded-3xl border border-zinc-200/70 p-8 bg-white shadow-sm">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <h2 className="text-zinc-900 text-2xl font-semibold">{b.title}</h2>
                  <p className="mt-2 text-zinc-600">{b.desc}</p>
                </div>
                <div>
                  <div className="text-zinc-900 font-semibold">What’s included</div>
                  <ul className="mt-2 text-zinc-600 text-sm space-y-1">
                    {b.included.map((i) => (
                      <li key={i} className="flex items-start gap-2"><Check className="h-4 w-4 text-amber-600 mt-0.5" /> {i}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-zinc-900 font-semibold">Key outcomes</div>
                  <ul className="mt-2 text-zinc-600 text-sm space-y-1">
                    {b.outcomes.map((i) => (
                      <li key={i} className="flex items-start gap-2"><Check className="h-4 w-4 text-amber-600 mt-0.5" /> {i}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-white font-semibold shadow-sm hover:bg-amber-600 transition-colors">
              Get a tailored proposal <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
