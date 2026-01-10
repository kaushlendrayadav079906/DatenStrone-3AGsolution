import subtract from '../assets/images/Subtract.png'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-violet-200 to-sky-200">
      <div className="grid-overlay absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-24">
        <section className="text-center mt-12">
          <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-indigo-300/40 via-violet-300/40 to-sky-300/40 border border-white/60 backdrop-blur-md shadow-lg p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              <span className="text-gray-800">Fast MVPs &amp; Scalable </span>
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Applications</span>
              <span className="text-gray-800"> for</span>
              <br />
              <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">Startups and SMEs</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-gray-700">
              Turn your ideas into market-ready solutions. We help startups launch quickly and SMEs digitize efficiently with tailored digital solutions.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <div className="rounded-3xl bg-white/50 border border-white/60 backdrop-blur-md shadow-xl p-2">
            <img src={subtract} alt="Section background" className="h-56 md:h-80 w-full object-cover rounded-2xl" />
          </div>
          <div className="mt-8 text-center">
            <a href="#start" className="inline-flex items-center gap-2 rounded-full bg-indigo-700 text-white px-6 py-2 font-semibold shadow-md hover:bg-indigo-600">
              Start Your Project
              <span aria-hidden>➜</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
