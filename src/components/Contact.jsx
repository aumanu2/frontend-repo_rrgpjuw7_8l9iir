import { Mail, Instagram, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 2500)
    setEmail('')
  }

  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50 to-purple-50 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-10 shadow">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Stay in the loop</h3>
              <p className="mt-2 text-gray-600">Get new drops, student spotlights, and exclusive promos.</p>
              <form onSubmit={handleSubmit} className="mt-5 flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-900 px-5 py-3 text-white font-semibold hover:bg-gray-800"
                >
                  {sent ? 'Subscribed!' : (
                    <>
                      <Send size={18} />
                      Subscribe
                    </>
                  )}
                </button>
              </form>
              <p className="mt-3 text-xs text-gray-500">We respect your inbox. Unsubscribe anytime.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <Mail size={20} />
                <a href="mailto:hello@studentart.shop" className="hover:text-gray-900">hello@studentart.shop</a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Instagram size={20} />
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-900">@studentart.shop</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
