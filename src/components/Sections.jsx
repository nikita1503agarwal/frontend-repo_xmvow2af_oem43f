import { CheckCircle, UserCheck, Clock, Shield, TrendingUp, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ServicesOverview() {
  const services = [
    {
      title: 'Recruitment Support',
      desc: 'Candidate sourcing, screening, compliance and onboarding — done with care and speed.',
    },
    {
      title: 'Admin Support',
      desc: 'Email handling, scheduling, documentation and data entry — efficient and reliable.',
    },
    {
      title: 'Rostering & VA Support',
      desc: 'Shift management, notifications, and timesheets to keep your team running smoothly.',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-zinc-200/70 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-full bg-zinc-900 text-white grid place-items-center shadow">
                <CheckCircle className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-zinc-900 font-semibold">{s.title}</h3>
              <p className="mt-2 text-zinc-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyChooseUs() {
  const items = [
    { title: 'Quality-first delivery', desc: 'Tight process, clear QA, and experienced coordinators.', Icon: Shield },
    { title: 'Fast and reliable', desc: 'Same-day responses and predictable weekly output.', Icon: Clock },
    { title: 'Human and helpful', desc: 'Friendly team that communicates clearly and cares.', Icon: UserCheck },
    { title: 'Built to scale', desc: 'Start small, scale up without friction as your needs grow.', Icon: TrendingUp },
  ]

  return (
    <section className="py-16 sm:py-24 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6">
          {items.map(({ title, desc, Icon }) => (
            <div key={title} className="rounded-2xl border border-zinc-200/70 p-6 bg-white shadow-sm">
              <div className="h-10 w-10 rounded-full bg-amber-500/10 text-amber-600 grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-zinc-900 font-semibold">{title}</h3>
              <p className="mt-2 text-zinc-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HowItWorks() {
  const steps = [
    { step: '01', title: 'Discovery', desc: 'We understand your workflows, tools and goals.' },
    { step: '02', title: 'Pilot', desc: 'Start with a focused scope and clear success criteria.' },
    { step: '03', title: 'Scale', desc: 'We ramp up capacity with reporting and QA baked in.' },
  ]

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ step, title, desc }) => (
            <div key={step} className="rounded-2xl border border-zinc-200/70 p-6 bg-white shadow-sm">
              <div className="text-xs font-semibold text-zinc-500">{step}</div>
              <h3 className="mt-2 text-zinc-900 font-semibold">{title}</h3>
              <p className="mt-2 text-zinc-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const quotes = [
    { name: 'Operations Lead, Aged Care', text: 'LUMA lifted our rostering accuracy and gave us back hours each week.' },
    { name: 'Founder, Recruitment Firm', text: 'Candidate pipelines are cleaner and faster. Communication is excellent.' },
    { name: 'Practice Manager, Healthcare', text: 'Professional, clear, and dependable. Exactly what we needed.' },
  ]

  return (
    <section className="py-16 sm:py-24 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
        {quotes.map((q) => (
          <div key={q.name} className="rounded-2xl border border-zinc-200/70 p-6 bg-white shadow-sm">
            <p className="text-zinc-800">“{q.text}”</p>
            <div className="mt-3 text-sm text-zinc-500">{q.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-zinc-200/70 p-8 sm:p-12 bg-gradient-to-br from-white to-zinc-50 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-zinc-900 text-2xl font-semibold">Ready to streamline your operations?</h3>
              <p className="mt-2 text-zinc-600">Get a free, no-obligation proposal tailored to your workflows, tools and goals.</p>
            </div>
            <div className="flex md:justify-end gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-white font-semibold shadow-sm hover:bg-amber-600 transition-colors">
                Get a Free Proposal <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-3 text-zinc-800 font-semibold hover:bg-zinc-100 transition-colors">Book a Call</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
