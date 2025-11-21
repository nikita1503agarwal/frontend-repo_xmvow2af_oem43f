import { useState } from 'react'
import Footer from '../components/Footer'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sent')
  }

  return (
    <main className="bg-white">
      <section className="pt-28 sm:pt-32 pb-12 bg-gradient-to-b from-white via-white to-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900">Contact</h1>
          <p className="mt-4 text-zinc-600 max-w-2xl">Tell us what you need and we’ll send a clear, tailored proposal. Prefer to talk? Book a quick call.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
          <form onSubmit={handleSubmit} className="rounded-3xl border border-zinc-200/70 p-8 bg-white shadow-sm">
            <div className="grid gap-5">
              <div>
                <label className="text-sm text-zinc-700">Full name</label>
                <input required className="mt-1 w-full rounded-xl border border-zinc-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500" />
              </div>
              <div>
                <label className="text-sm text-zinc-700">Business email</label>
                <input required type="email" className="mt-1 w-full rounded-xl border border-zinc-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500" />
              </div>
              <div>
                <label className="text-sm text-zinc-700">How can we help?</label>
                <textarea required rows={5} className="mt-1 w-full rounded-xl border border-zinc-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500" />
              </div>
              <button className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-white font-semibold shadow-sm hover:bg-amber-600 transition-colors">Send enquiry</button>
              {status === 'sent' && <p className="text-sm text-emerald-600">Thanks — we’ll be in touch shortly.</p>}
            </div>
          </form>

          <div className="rounded-3xl border border-zinc-200/70 p-8 bg-white shadow-sm">
            <div className="text-zinc-900 font-semibold">Business email</div>
            <p className="mt-2 text-zinc-600 text-sm">[INSERT EMAIL]</p>
            <div className="mt-6 text-zinc-900 font-semibold">Prefer to chat?</div>
            <p className="mt-2 text-zinc-600 text-sm">Click below to book a quick call in AU-friendly hours.</p>
            <a href="#" className="mt-4 inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-3 text-zinc-800 font-semibold hover:bg-zinc-100 transition-colors">Book a Call</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
