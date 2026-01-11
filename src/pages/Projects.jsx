import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

// Images
import agilis from '../assets/Our Project/Agilis.png'
import bhajan from '../assets/Our Project/Bhajan mandhir.png'
import careerminer from '../assets/Our Project/Careerminer.png'
import estateverse from '../assets/Our Project/EstateVerse.png'
import growvia from '../assets/Our Project/Growvia.png'
import zinnai from '../assets/Our Project/ZINN AI.png'
import hero from '../assets/Our Project/unsplash_sScmok4Iq1o.png'

const projects = [
  {
    slug: 'careerminer',
    title: 'Careerminer',
    image: careerminer,
    info: 'Smart job tracking and career growth platform.',
  },
  {
    slug: 'zinn-ai',
    title: 'ZINN AI',
    image: zinnai,
    info: 'AI-powered productivity and career assistant.',
  },
  {
    slug: 'agilis',
    title: 'Agilis',
    image: agilis,
    info: 'Global investment and business expansion platform.',
  },
  {
    slug: 'bhajan-mandhir',
    title: 'Bhajan Mandhir',
    image: bhajan,
    info: 'Spiritual platform for bhajans and devotion.',
  },
  {
    slug: 'estateverse',
    title: 'EstateVerse',
    image: estateverse,
    info: 'Modern real estate discovery & listing solution.',
  },
  {
    slug: 'showcase',
    title: 'Showcase',
    image: hero,
    info: 'Collection of our creative & technical work.',
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10">
          <span className="text-indigo-800">Our Projects</span>
        </h2>

        <div className="space-y-8">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="block group"
            >
              <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden border border-indigo-100 shadow-md bg-white hover:shadow-xl transition">
                
                {/* LEFT – IMAGE */}
                <div className="md:w-1/2 h-56 md:h-auto">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* RIGHT – CONTENT */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-extrabold text-indigo-900">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-gray-700 leading-relaxed">
                    {p.info}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-3 text-indigo-900 font-semibold">
                    View Project
                    <span className="w-8 h-8 rounded-full bg-indigo-900 text-white flex items-center justify-center">
                      ➜
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
