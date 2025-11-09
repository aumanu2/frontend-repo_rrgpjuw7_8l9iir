import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Discover Original Art by Students
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700">
              Support emerging talent and bring fresh, affordable art to your space. Browse curated pieces across styles and mediums.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#gallery" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-gray-800">
                Explore Gallery
                <ArrowRight size={18} />
              </a>
              <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                Learn More
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
                alt="Student artwork collage"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
