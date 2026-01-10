import { useRef } from 'react'
import { Link } from 'react-router-dom'
import r1 from '../assets/Our Project/Rectangle 161125071 (1).png'
import r2 from '../assets/Our Project/Rectangle 161125071 (2).png'
import r3 from '../assets/Our Project/Rectangle 161125071 (3).png'
import r4 from '../assets/Our Project/Rectangle 161125071 (4).png'
import r5 from '../assets/Our Project/Rectangle 161125071 (5).png'
import hero from '../assets/Our Project/unsplash_sScmok4Iq1o.png'
import Navbar from '../components/Navbar.jsx'

const projects = [
  { slug: 'careerminer', title: 'Careerminer', image: r1 },
  { slug: 'zinn-ai', title: 'ZINN AI', image: r2 },
  { slug: 'agilis', title: 'Agilis', image: r3 },
  { slug: 'bhajan-mandhir', title: 'Bhajan Mandhir', image: r4 },
  { slug: 'estateverse', title: 'EstateVerse', image: r5 },
  { slug: 'showcase', title: 'Showcase', image: hero },
]

export default function Projects() {
  const scrollerRef = useRef(null)
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-24">
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Our Ongoing <span className="text-indigo-800">Projects</span></h2>
          <p className="mt-2 text-gray-700">Scroll to see more projects.</p>
          <div className="mt-6">
            <div ref={scrollerRef} className="flex gap-6 overflow-x-auto pb-2">
              {projects.map((p) => (
                <Link key={p.slug} to={`/projects/${p.slug}`} className="shrink-0 w-64">
                  <div className="rounded-2xl bg-white border border-indigo-100 shadow p-2">
                    <img src={p.image} alt={p.title} className="h-40 w-full object-cover rounded-xl" />
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-semibold text-indigo-900">{p.title}</span>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-900 text-white">➜</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              <button onClick={() => scrollerRef.current?.scrollBy({ left: -600, behavior: 'smooth' })} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-indigo-200 shadow">←</button>
              <button onClick={() => scrollerRef.current?.scrollBy({ left: 600, behavior: 'smooth' })} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-900 text-white shadow">→</button>
            </div>
          </div>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Our Projects</h2>
          <p className="mt-2 text-gray-700">Click any project to view details. Images are stacked vertically.</p>
        </section>

        <section className="mt-8 space-y-8">
          {projects.map((p) => (
            <Link key={p.slug} to={`/projects/${p.slug}`} className="block">
              <div className="rounded-3xl bg-white border border-indigo-100 shadow-md overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-64 md:h-96 object-cover" />
                <div className="px-6 py-4 flex items-center justify-between">
                  <span className="font-bold text-indigo-900 text-lg">{p.title}</span>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-900 text-white">➜</span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  )
}
