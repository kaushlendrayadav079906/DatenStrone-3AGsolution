import { Link, useParams } from 'react-router-dom'
import r1 from '../assets/Our Project/Rectangle 161125071 (1).png'
import r2 from '../assets/Our Project/Rectangle 161125071 (2).png'
import r3 from '../assets/Our Project/Rectangle 161125071 (3).png'
import p1 from '../assets/Our Project/unsplash_sScmok4Iq1o.png'
import Navbar from '../components/Navbar.jsx'

const all = {
  'careerminer': { title: 'Careerminer', image: r1 },
  'zinn-ai': { title: 'ZINN AI', image: r2 },
  'agilis': { title: 'Agilis', image: r3 },
  'showcase': { title: 'Showcase', image: p1 },
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = all[slug]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-24">
        <section className="mt-12">
          <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-white text-indigo-900 px-4 py-2 border border-indigo-200 shadow-sm">← Back to Projects</Link>
          <h1 className="mt-6 text-3xl md:text-4xl font-extrabold text-gray-900">{project?.title || 'Project'}</h1>
          <div className="mt-6 rounded-3xl bg-white/80 border border-white/60 shadow-lg p-3">
            {project?.image ? (
              <img src={project.image} alt={project.title} className="w-full h-[28rem] object-cover rounded-2xl" />
            ) : (
              <div className="h-[28rem] rounded-2xl bg-indigo-300" />
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
