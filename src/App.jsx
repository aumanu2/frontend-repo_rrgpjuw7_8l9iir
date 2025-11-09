import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Student Art Shop. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
