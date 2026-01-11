import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

// Images
import agilis from '../assets/Our Project/Agilis.png'
import bhajan from '../assets/Our Project/Bhajan mandhir.png'
import careerminer from '../assets/Our Project/Careerminer.png'
import estateverse from '../assets/Our Project/EstateVerse.png'
import growvia from '../assets/Our Project/Growvia.png'
import zinnai from '../assets/Our Project/ZINN AI.png'
import hero from '../assets/Our Project/unsplash_sScmok4Iq1o.png'

const allProjects = {
  'careerminer': {
    title: 'Careerminer',
    image: careerminer,
    description:
      'Your personalized job search assistant. Build your profile, track applications, and explore opportunities while focusing on what matters most—your career growth.',
    link: 'https://careerminer.com',
  },
  'zinn-ai': {
    title: 'ZINN AI',
    image: zinnai,
    description:
      'An AI-powered platform that helps you apply smarter, track progress, and stand out effortlessly with intelligent career insights.',
    link: 'https://zinn.ai',
  },
  'agilis': {
    title: 'Agilis',
    image: agilis,
    description:
      'A global business platform delivering growth opportunities across EMEA and Asia, connecting businesses with international investors.',
    link: 'https://agilis.com',
  },
  'bhajan-mandhir': {
    title: 'Bhajan Mandhir',
    image: bhajan,
    description:
      'A spiritual digital platform dedicated to devotional content, bhajans, and temple-related information for a peaceful experience.',
    link: '#',
  },
  'estateverse': {
    title: 'EstateVerse',
    image: estateverse,
    description:
      'A modern real-estate platform helping users explore properties, investments, and smart housing solutions with ease.',
    link: '#',
  },
  'showcase': {
    title: 'Showcase',
    image: hero,
    description:
      'A curated showcase of our design, development, and innovation work across multiple domains and industries.',
    link: '#',
  },
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = allProjects[slug]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 py-16">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 rounded-full bg-white text-indigo-900 px-4 py-2 border border-indigo-200 shadow-sm"
        >
          ← Back to Projects
        </Link>

        {/* Project Section */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="rounded-3xl border border-indigo-100 shadow-md overflow-hidden bg-white">
            {project?.image ? (
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-[20rem] md:h-[26rem] object-cover"
              />
            ) : (
              <div className="h-[26rem] bg-indigo-200 flex items-center justify-center text-white font-semibold">
                Image Coming Soon
              </div>
            )}
          </div>

          {/* Content */}
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-900">
              {project?.title || 'Project'}
            </h1>

            <p className="mt-4 text-gray-700 leading-relaxed">
              {project?.description ||
                'Detailed information about this project will be available soon.'}
            </p>

            <div className="mt-6">
              <a
                href={project?.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-indigo-900 text-white px-6 py-3 font-semibold shadow hover:bg-indigo-800 transition"
                aria-label={`Visit the website of ${project?.title}`}
              >
                Go to Website
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-indigo-900">
                  ➜
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
