import { useState } from 'react'
import { Palette, ShoppingCart, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-pink-500 to-purple-600 text-white">
            <Palette size={20} />
          </span>
          <span className="font-semibold tracking-tight text-gray-800">Student Art Shop</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              {item.label}
            </a>
          ))}
          <button className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-gray-800">
            <ShoppingCart size={18} />
            Cart
          </button>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-gray-200 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                {item.label}
              </a>
            ))}
            <button className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-gray-800">
              <ShoppingCart size={18} />
              Cart
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
