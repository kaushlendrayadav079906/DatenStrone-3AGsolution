import group69 from "../assets/Group/Group 69.png";
import logo from "../assets/icons/Logo-removebg-preview.png";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-24">
        <section className="mt-12">
          <h1 className="text-center text-3xl md:text-4xl font-extrabold text-indigo-700">
            Let’s Build Your Digital Vision Together
          </h1>

          <p className="text-center mt-3 text-lg md:text-xl text-black max-w-5xl mx-auto">
            Have an idea for your startup or want to digitize your SME
            operations? Reach out today, and let’s turn your vision into a
            market-ready product.
          </p>
        </section>

        <section className="mt-10 grid md:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col h-full">
            <h2 className="text-2xl font-extrabold text-indigo-700">
              Contact Information
            </h2>

            <div className="mt-2 flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-10 h-10 rounded" />
              <span className="font-semibold text-gray-800">
                DatenStrone 3AGsolution
              </span>
            </div>
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl bg-white border border-indigo-300 shadow p-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-700 text-white">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <path
                        d="M4 6h16v12H4z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M4 7l8 6 8-6"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                  <div>
                    <div className="font-semibold text-gray-800">Email</div>
                    <div className="mt-1 text-indigo-700">
                      info@datenstrom-3ag.com
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-white border border-indigo-300 shadow p-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-700 text-white">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 7v6l4 2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <div className="font-semibold text-gray-800">
                      Working Hours
                    </div>
                    <div className="mt-1 text-gray-700">
                      Monday - Friday 9:00 - 18:00
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-white border border-indigo-300 shadow p-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-700 text-white">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <path
                        d="M12 3c3.314 0 6 2.686 6 6 0 4.5-6 12-6 12S6 13.5 6 9c0-3.314 2.686-6 6-6z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle
                        cx="12"
                        cy="9"
                        r="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                  <div>
                    <div className="font-semibold text-gray-800">
                      Our Address
                    </div>
                    <div className="mt-1 text-gray-700">
                      Kolonnenstr. 8, 10827 Berlin
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <img
                src={group69}
                alt="Contact visual"
                className="rounded-2xl w-full h-64 md:h-80 object-cover border border-indigo-300"
              />
            </div>
          </div>
          <form className="rounded-2xl bg-white/80 border border-indigo-300 shadow-lg p-6 h-full">
            <div className="grid gap-4">
              <input
                className="rounded-lg border border-indigo-300 px-3 py-2 outline-none"
                placeholder="Name*"
              />
              <input
                className="rounded-lg border border-indigo-300 px-3 py-2 outline-none"
                placeholder="Email*"
              />
              <input
                className="rounded-lg border border-indigo-300 px-3 py-2 outline-none"
                placeholder="Phone Number"
              />
              <input
                className="rounded-lg border border-indigo-300 px-3 py-2 outline-none"
                placeholder="Company Name (optional)"
              />
              <div className="mt-2">
                <div className="text-sm font-semibold text-gray-800 mb-2">
                  Service interested*
                </div>
                <label className="flex items-center gap-2 text-gray-700">
                  <input
                    type="radio"
                    name="service"
                    className="accent-indigo-700"
                    defaultChecked
                  />
                  <span>MVP</span>
                </label>
                <label className="mt-2 flex items-center gap-2 text-gray-700">
                  <input
                    type="radio"
                    name="service"
                    className="accent-indigo-700"
                  />
                  <span>Application Development</span>
                </label>
              </div>
              <textarea
                className="rounded-lg border border-indigo-300 px-3 py-2 outline-none min-h-24"
                placeholder="Message"
              />
            </div>
            <button
              type="button"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-indigo-700 text-white px-6 py-2 font-semibold shadow-md hover:bg-indigo-600"
            >
              Send Message <span aria-hidden>➜</span>
            </button>
          </form>
        </section>

        <section className="mt-10">
          <p className="text-center text-xl md:text-2xl text-black max-w-4xl mx-auto leading-relaxed">
            Whether you’re building your first MVP or planning a custom
            application for your SME, we’re here with the expertise, guidance,
            and solutions you need. Let’s start building your future today.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
