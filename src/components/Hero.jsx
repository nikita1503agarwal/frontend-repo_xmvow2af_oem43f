import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-b from-white via-white to-zinc-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_-10%,rgba(212,163,115,0.15),transparent),radial-gradient(600px_200px_at_80%_-10%,rgba(24,24,27,0.1),transparent)] pointer-events-none"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-zinc-100 text-zinc-700 px-3 py-1 text-xs font-medium shadow-sm">AU-based hours • Human service • Clear outcomes</p>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900 max-w-xl">Scalable Recruitment + Admin Support for Your Business</h1>
          <p className="mt-5 text-zinc-600 text-base sm:text-lg max-w-xl">LUMA Agency delivers tailored virtual assistance, streamlined admin, and reliable rostering support — built for Australian teams that value precision, speed, and a friendly touch.</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-3 text-white font-semibold shadow-sm hover:bg-amber-600 transition-colors">Get a Free Proposal</Link>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-3 text-zinc-800 font-semibold hover:bg-zinc-100 transition-colors">Book a Call</Link>
          </div>

          <div className="mt-6 text-xs text-zinc-500">No lock-in contracts • Flexible month-to-month • Clear reporting</div>
        </div>

        <div className="relative h-[380px] sm:h-[460px] lg:h-[560px] rounded-3xl overflow-hidden border border-zinc-200/70 shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white/60 backdrop-blur">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
