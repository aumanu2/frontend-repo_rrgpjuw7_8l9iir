export default function About() {
  return (
    <section id="about" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Made by Students, Powered by Community</h2>
            <p className="mt-4 text-gray-700">
              We help student artists showcase and sell their work. Every purchase supports education and creative careers. Pieces are one-of-a-kind or limited editions, verified and shipped with care.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <li className="rounded-xl border border-gray-200 bg-white p-4 text-center">
                <p className="text-2xl font-extrabold text-gray-900">200+</p>
                <p className="text-sm text-gray-600">Artists</p>
              </li>
              <li className="rounded-xl border border-gray-200 bg-white p-4 text-center">
                <p className="text-2xl font-extrabold text-gray-900">1k+</p>
                <p className="text-sm text-gray-600">Artworks</p>
              </li>
              <li className="rounded-xl border border-gray-200 bg-white p-4 text-center">
                <p className="text-2xl font-extrabold text-gray-900">4.9/5</p>
                <p className="text-sm text-gray-600">Buyer rating</p>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop"
                alt="Students creating art"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
