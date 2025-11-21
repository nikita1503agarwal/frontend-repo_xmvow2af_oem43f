import Footer from '../components/Footer'

export default function About() {
  return (
    <main className="bg-white">
      <section className="pt-28 sm:pt-32 pb-12 bg-gradient-to-b from-white via-white to-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900">About LUMA Agency</h1>
          <p className="mt-4 text-zinc-600 max-w-2xl">We provide recruitment, admin, and rostering support designed for Australian businesses that need dependable execution without the overhead. We keep things simple, clear, and human.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-zinc-900 text-2xl font-semibold">Who we are</h2>
            <p className="mt-3 text-zinc-600">LUMA Agency is a team of coordinators, recruiters and admin specialists who care about quality and communication. We bring structure and calm to busy teams, freeing your people to focus on work that matters.</p>
          </div>
          <div>
            <h2 className="text-zinc-900 text-2xl font-semibold">What we do</h2>
            <p className="mt-3 text-zinc-600">We build and run the workflows behind your operations — sourcing candidates, maintaining compliance, organising calendars, managing inboxes, and keeping rosters accurate and on time.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-zinc-900 text-2xl font-semibold">Our mission</h3>
            <p className="mt-3 text-zinc-600">Deliver dependable support that feels like an extension of your team. We measure success by clarity, speed and outcomes — not busywork.</p>
          </div>
          <div>
            <h3 className="text-zinc-900 text-2xl font-semibold">Who we support</h3>
            <p className="mt-3 text-zinc-600">Recruitment firms, healthcare practices, aged care providers, and growing SMEs that value process and communication.</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-6">
          {["Integrity","Clarity","Reliability","Care"].map((v) => (
            <div key={v} className="rounded-2xl border border-zinc-200/70 p-6 bg-white shadow-sm">
              <div className="text-zinc-900 font-semibold">{v}</div>
              <p className="mt-2 text-zinc-600 text-sm">We do what we say, communicate clearly, and aim to be the most reliable part of your week.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h3 className="text-zinc-900 text-2xl font-semibold">How we work</h3>
            <ul className="mt-3 text-zinc-600 space-y-2">
              <li>• Simple onboarding with a focused pilot</li>
              <li>• Clear playbooks and weekly reporting</li>
              <li>• AU-friendly hours and responsive communication</li>
              <li>• Scale up or down with no drama</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200/70 p-6 bg-white shadow-sm">
            <div className="text-zinc-900 font-semibold">Ready to chat?</div>
            <p className="mt-2 text-zinc-600 text-sm">Tell us what you need help with and we’ll send a clear proposal.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
