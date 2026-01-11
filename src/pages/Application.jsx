import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ca1 from "../assets/coustm Appplication/Property 1=Default (5).png";
import ca2 from "../assets/coustm Appplication/Property 1=Variant2.png";
import group69 from "../assets/Group/Group 69.png";
import a1 from "../assets/Our Approch/Property 1=Default (1).png";
import a2 from "../assets/Our Approch/Property 1=Default (2).png";
import a3 from "../assets/Our Approch/Property 1=Default (3).png";
import a4 from "../assets/Our Approch/Property 1=Default (4).png";
import a0 from "../assets/Our Approch/Property 1=Default.png";
import agilis from "../assets/Our Project/Agilis.png";
import bhajanMandhir from "../assets/Our Project/Bhajan mandhir.png";
import careerminer from "../assets/Our Project/Careerminer.png";
import estateVerse from "../assets/Our Project/EstateVerse.png";
import growvia from "../assets/Our Project/Growvia.png";
import zinnAI from "../assets/Our Project/ZINN AI.png";
import hero from "../assets/Our Project/unsplash_sScmok4Iq1o.png";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

const items = [
  { slug: "careerminer", title: "Careerminer", image: careerminer },
  { slug: "zinn-ai", title: "ZINN AI", image: zinnAI },
  { slug: "agilis", title: "Agilis", image: agilis },
  { slug: "bhajan-mandhir", title: "Bhajan Mandhir", image: bhajanMandhir },
  { slug: "estateverse", title: "EstateVerse", image: estateVerse },
  { slug: "growvia", title: "Growvia", image: growvia },
];


function HorizontalScroller() {
  const ref = useRef(null);
  return (
    <div className="mt-6">
      <div ref={ref} className="flex gap-6 overflow-x-auto pb-2">
        {items.map((p) => (
          <Link key={p.slug} to="/projects" className="shrink-0 w-64">
            <div className="rounded-2xl bg-white border border-indigo-100 shadow p-2">
              <img
                src={p.image}
                alt={p.title}
                className="h-40 w-full object-cover rounded-xl"
              />
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-semibold text-indigo-900">{p.title}</span>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-900 text-white">
                ➜
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        <button
          onClick={() =>
            ref.current?.scrollBy({ left: -600, behavior: "smooth" })
          }
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-indigo-200 shadow"
        >
          ←
        </button>
        <button
          onClick={() =>
            ref.current?.scrollBy({ left: 600, behavior: "smooth" })
          }
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-900 text-white shadow"
        >
          →
        </button>
      </div>
    </div>
  );
}

// VerticalProjects removed; shown on separate Projects page

export default function Application() {
  const customAppImages = [ca1, ca2];
  const [customIndex, setCustomIndex] = useState(0);
  const toggleCustomImage = () =>
    setCustomIndex((customIndex + 1) % customAppImages.length);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div id="apps" className="mx-auto max-w-6xl px-4">
        <section className="text-center mt-16">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Custom Applications That Drive Growth and Efficiency
            </span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-black leading-relaxed">
            From MVPs for startups to scalable applications for SMEs, we craft
            solutions that turn ideas into digital products that work.
          </p>

          <div className="mt-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-700 text-white px-6 py-2 font-semibold shadow-md hover:bg-indigo-600"
            >
              Start Your Project
              <span aria-hidden>➜</span>
            </a>
          </div>
        </section>
        <section className="mt-16">
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            <span className="text-indigo-800">Our Ongoing Projects</span>
          </h3>
        </section>

        <section className="mt-10">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={hero}
              alt="Our projects"
              className="h-56 md:h-80 w-full object-cover"
            />
            <div className="absolute left-4 top-4 md:left-6 md:top-6">
              <h4 className="text-indigo-900 font-extrabold text-xl md:text-2xl">
                Our projects
              </h4>
              <div className="mt-3 flex items-center gap-3">
                <Link to="/projects">
  <img
    src={careerminer}
    alt="Careerminer"
    className="w-12 h-12 rounded-full object-cover border border-white shadow"
  />
</Link>

<Link to="/projects">
  <img
    src={zinnAI}
    alt="ZINN AI"
    className="w-12 h-12 rounded-full object-cover border border-white shadow"
  />
</Link>

<Link to="/projects">
  <img
    src={agilis}
    alt="Agilis"
    className="w-12 h-12 rounded-full object-cover border border-white shadow"
  />
</Link>

<Link to="/projects">
  <img
    src={bhajanMandhir}
    alt="Bhajan Mandhir"
    className="w-12 h-12 rounded-full object-cover border border-white shadow"
  />
</Link>

<Link to="/projects">
  <img
    src={estateVerse}
    alt="EstateVerse"
    className="w-12 h-12 rounded-full object-cover border border-white shadow"
  />
</Link>

              </div>
            </div>
          </div>
        </section>
        <section className="mt-14">
          <h4 className="text-indigo-900 font-extrabold text-xl md:text-2xl">
            Scroll to see more projects
          </h4>

          <HorizontalScroller />
        </section>
        <section className="mt-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-indigo-800">
              Why Your Business Neesd a Custom Appliction{" "}
              <span className="text-indigo-700">Custom Application</span>
            </h3>
            <p className="mt-3 text-gray-700">
              Inefficient tools create bottlenecks. We ensure your application
              becomes a foundation for efficiency, innovation, and measurable
              impact.
            </p>
            <div className="mt-6 rounded-2xl bg-white/70 border border-white/60 shadow-md p-5">
              <ul className="space-y-3 text-gray-800">
                <li>• Streamline operations and automate workflows</li>
                <li>• Deliver unique experiences to your clients</li>
                <li>
                  • Support long-term growth with scalable, flexible solutions
                </li>
              </ul>
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden bg-white">
            <button onClick={toggleCustomImage} className="block w-full">
              <img
                src={customAppImages[customIndex]}
                alt="Custom Application"
                className="w-full h-72 md:h-[28rem] object-contain"
              />
            </button>
          </div>
        </section>

        <section className="mt-16">
          <h3 className="text-center text-2xl md:text-3xl font-extrabold text-indigo-800">
            Our Application Development Services
          </h3>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Custom Software Development",
                desc: "Tailored solutions for automating tasks, improving workflows, and delivering unique functionality.",
              },
              {
                title: "Mobile App Development",
                desc: "High-performance, user-friendly apps that engage your audience wherever they are.",
              },
              {
                title: "Cross-Platform Solutions",
                desc: "Applications that work seamlessly across devices and platforms, maximizing reach and usability.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 text-white bg-gradient-to-br from-indigo-700 to-purple-700 shadow-lg"
              >
                <h4 className="font-bold text-lg">{card.title}</h4>
                <p className="mt-2 text-sm text-white/90">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <ApproachSection />
        </section>

        <section id="contact" className="mt-16">
          <h3 className="text-center text-2xl md:text-3xl font-extrabold">
            <span className="text-indigo-700">
              Ready to Build Your Application ?
            </span>
          </h3>
          <p className="text-center mt-2 text-gray-700">
            Let us create a digital solution that boosts efficiency and growth.
          </p>
          <div className="mt-8 rounded-3xl border-2 border-indigo-500 p-2 md:p-3">
            <div className="grid md:grid-cols-2 gap-2 md:gap-3 items-stretch">
              <form className="rounded-2xl bg-white/80 border border-indigo-300 shadow-lg p-4 md:p-6 h-full">
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
                    placeholder="Startup Name (optional)"
                  />
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
              <div className="rounded-2xl overflow-hidden h-full border border-indigo-300">
                <img
                  src={group69}
                  alt="Contact side"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

const approachItems = [
  {
    title: "Startup-Centric",
    image: a0,
    desc: "Respect budget and timelines; no quality trade-offs.",
    accentText: "text-indigo-600",
    badgeBg: "bg-indigo-600",
  },
  {
    title: "Tailored Solutions",
    image: a1,
    desc: "Customized solutions aligned to business goals.",
    accentText: "text-sky-600",
    badgeBg: "bg-sky-600",
  },
  {
    title: "Agile & Secure",
    image: a2,
    desc: "Agile delivery with robust security measures.",
    accentText: "text-emerald-600",
    badgeBg: "bg-emerald-600",
  },
  {
    title: "Comprehensive Support",
    image: a3,
    desc: "Partner from ideation to launch and beyond.",
    accentText: "text-fuchsia-600",
    badgeBg: "bg-fuchsia-600",
  },
  {
    title: "Expert Team",
    image: a4,
    desc: "Experienced team, scalable products, real impact.",
    accentText: "text-orange-600",
    badgeBg: "bg-orange-600",
  },
];

function ApproachSection() {
  const [i, setI] = useState(0);
  const next = () => setI((i + 1) % approachItems.length);
  const prev = () =>
    setI((i - 1 + approachItems.length) % approachItems.length);
  const active = approachItems[i];

  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-extrabold text-indigo-800">
        Our Approach
      </h3>
      <div className="mt-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          {approachItems.map((item, idx) => (
            <button
              key={item.title}
              onClick={() => setI(idx)}
              className={`inline-flex items-center rounded-full px-4 py-2 font-semibold transition-all ${
                idx === i
                  ? `${item.badgeBg} text-white shadow-md scale-105`
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-64 md:w-[27rem] md:h-[27rem] rounded-full border border-gray-300 flex items-center justify-center shadow-sm">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-56 h-56 md:w-[24rem] md:h-[24rem] rounded-full border border-gray-200"></div>
            </div>
            <button
              onClick={() => setI((i + 1) % approachItems.length)}
              className="relative rounded-full overflow-hidden w-60 h-60 md:w-[25rem] md:h-[25rem]"
            >
              <img
                src={active.image}
                alt={active.title}
                className="w-full h-full object-cover md:scale-110"
              />
            </button>
            <div className="absolute inset-0 rounded-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-white/50" />
              <div className="relative z-10 px-8 text-center">
                <div className="text-xl md:text-2xl font-extrabold text-black">
                  {active.title}
                </div>
                <div className="mt-2 text-black text-sm md:text-base">
                  {active.desc}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 font-bold text-black text-xl">
            {active.title}
          </div>
          <div className="mt-6 flex gap-3">
            <button
              onClick={prev}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-indigo-200 shadow"
            >
              ←
            </button>
            <button
              onClick={next}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-900 text-white shadow"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
