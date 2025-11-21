import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-zinc-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-700 text-white grid place-items-center font-semibold shadow-lg">L</div>
          <div className="leading-tight">
            <div className="text-zinc-900 font-semibold tracking-tight">LUMA Agency</div>
            <div className="text-xs text-zinc-500">Recruitment • Admin • VA</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-amber-600 transition-colors"
          >
            <Phone className="h-4 w-4" /> Book a Call
          </Link>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg border border-zinc-200 text-zinc-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-zinc-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-2 py-2 rounded-md text-sm font-medium ${isActive ? 'text-zinc-900' : 'text-zinc-600 hover:text-zinc-900'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-amber-600 transition-colors"
            >
              <Phone className="h-4 w-4" /> Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
