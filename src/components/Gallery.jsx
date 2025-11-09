import { useMemo, useState } from 'react'
import { Star } from 'lucide-react'

const ART = [
  {
    id: 1,
    title: 'Sunlit Alley',
    artist: 'Maya R.',
    price: 120,
    image:
      'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop',
    tag: 'Painting',
  },
  {
    id: 2,
    title: 'Ceramic Flow',
    artist: 'Leo K.',
    price: 85,
    image:
      'https://images.unsplash.com/photo-1582582494700-188cebade26b?q=80&w=1600&auto=format&fit=crop',
    tag: 'Ceramic',
  },
  {
    id: 3,
    title: 'Untitled 35mm',
    artist: 'Sara N.',
    price: 60,
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1600&auto=format&fit=crop',
    tag: 'Photography',
  },
  {
    id: 4,
    title: 'Wire Study',
    artist: 'Jun P.',
    price: 95,
    image:
      'https://images.unsplash.com/photo-1559192823-e174c124c5d1?q=80&w=1600&auto=format&fit=crop',
    tag: 'Sculpture',
  },
  {
    id: 5,
    title: 'Pastel City',
    artist: 'Ivy C.',
    price: 140,
    image:
      'https://images.unsplash.com/photo-1474073705359-5da2a8270c64?q=80&w=1600&auto=format&fit=crop',
    tag: 'Painting',
  },
  {
    id: 6,
    title: 'Soft Geometry',
    artist: 'Arjun S.',
    price: 75,
    image:
      'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop',
    tag: 'Mixed Media',
  },
]

const TAGS = ['All', 'Painting', 'Ceramic', 'Photography', 'Sculpture', 'Mixed Media']

export default function Gallery() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(() => {
    if (active === 'All') return ART
    return ART.filter((a) => a.tag === active)
  }, [active])

  return (
    <section id="gallery" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Student Works</h2>
            <p className="mt-1 text-gray-600">Filter by medium to find your next piece.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActive(tag)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  active === tag
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-gray-300 bg-white text-gray-800 hover:bg-gray-50'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <article key={item.id} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">by {item.artist}</p>
                  </div>
                  <div className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-yellow-700 text-xs font-semibold">
                    <Star size={14} />
                    Popular
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-lg font-bold text-gray-900">${item.price}</p>
                  <button className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-800">Add to cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
