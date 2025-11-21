export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-200/60 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-4">
        <div className="col-span-2">
          <div className="text-zinc-900 font-semibold text-lg">LUMA Agency</div>
          <p className="text-zinc-600 mt-3 max-w-md">Scalable recruitment, admin, and rostering support for Australian businesses. Clean processes, reliable delivery, and a friendly team that cares.</p>
        </div>
        <div>
          <div className="text-zinc-900 font-semibold">Services</div>
          <ul className="mt-3 space-y-2 text-zinc-600 text-sm">
            <li>Recruitment Support</li>
            <li>Admin Support</li>
            <li>Rostering & VA Support</li>
          </ul>
        </div>
        <div>
          <div className="text-zinc-900 font-semibold">Contact</div>
          <ul className="mt-3 space-y-2 text-zinc-600 text-sm">
            <li>Business email: [INSERT EMAIL]</li>
            <li>Timezone: AEST</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} LUMA Agency. All rights reserved.</p>
          <p>Designed for a clean, modern experience.</p>
        </div>
      </div>
    </footer>
  )
}
