import { useState } from "react";
import { FiCode, FiLayers, FiSmartphone } from "react-icons/fi";
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
import hero from "../assets/Our Project/unsplash_sScmok4Iq1o.png";
import zinnAI from "../assets/Our Project/ZINN AI.png";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

/* ---------------- DATA ---------------- */

const projectImages = [
  careerminer,
  zinnAI,
  agilis,
  bhajanMandhir,
  estateVerse,
  growvia,
];

const approachItems = [
  { title: "Startup-Centric", image: a0 },
  { title: "Tailored Solutions", image: a1 },
  { title: "Agile & Secure", image: a2 },
  { title: "Comprehensive Support", image: a3 },
  { title: "Expert Team", image: a4 },
];

export default function Application() {
  const [womanIndex, setWomanIndex] = useState(0);
  const [approachIndex, setApproachIndex] = useState(0);

  const womanImages = [ca1, ca2];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4">

        {/* HERO */}
        <section className="mt-16 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0b0f5c]">
            Custom Applications <span className="text-[#7b7fae]">That Drive Growth</span>
            <br />and Efficiency
          </h1>
        </section>

        {/* OUR PROJECTS */}
        <section className="mt-12 flex justify-center">
          <div className="relative w-full max-w-[1050px] h-[320px] rounded-[22px] overflow-hidden shadow-md">
            <img src={hero} className="absolute inset-0 w-full h-full object-cover" />

            <div className="absolute inset-0 flex items-center px-10">
              <div>
                <h3 className="text-[#0b0f5c] font-bold text-xl mb-4">Our projects</h3>

                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {projectImages.map((img, i) => (
                      <Link
                        key={i}
                        to="/projects"
                        className="w-11 h-11 rounded-full bg-white border-2 border-white shadow overflow-hidden hover:scale-110 transition"
                      >
                        <img src={img} className="w-full h-full object-cover" />
                      </Link>
                    ))}
                  </div>

                  <span className="text-sm text-gray-700 ml-2">and more</span>

                  <Link
                    to="/projects"
                    className="ml-3 w-10 h-10 rounded-full bg-[#e9ecff] flex items-center justify-center text-[#0b0f5c] hover:bg-[#0b0f5c] hover:text-white transition"
                  >
                    →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CUSTOM */}
        <section className="mt-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0b0f5c]">
              Why Your Business <span className="text-[#8a8fb5]">Needs</span>
              <br />a Custom Application
            </h2>

            <p className="mt-4 text-gray-600">
              Inefficient tools or generic software often create operational bottlenecks.
            </p>

            <div className="mt-6 bg-[#f5f6fa] rounded-2xl p-6 shadow">
              <p className="font-semibold text-[#0b0f5c] mb-4">
                Custom applications can transform the way your startup or SME operates:
              </p>
              <ul className="space-y-3 text-gray-800">
                <li>Streamline operations and automate workflows</li>
                <li>Deliver unique services or experiences</li>
                <li>Support long-term growth</li>
              </ul>
            </div>
          </div>

          <div className="rounded-[3rem] overflow-hidden bg-white">
            <img
              src={womanImages[womanIndex]}
              className="w-full h-72 md:h-[28rem] object-contain grayscale cursor-pointer"
              onClick={() => setWomanIndex((p) => (p + 1) % womanImages.length)}
            />
          </div>
        </section>

        {/* SERVICES */}
        <section className="mt-28 text-center relative">
          <div className="absolute inset-0 bg-[linear-gradient(#eef0fb_1px,transparent_1px),linear-gradient(90deg,#eef0fb_1px,transparent_1px)] bg-[size:28px_28px] opacity-40 pointer-events-none" />

          <div className="relative">
            <h2 className="text-3xl font-extrabold text-[#0b0f5c]">
              Our Application <br />
              Development <span className="text-[#9aa0c9]">Services</span>
            </h2>

            <div className="mt-12 grid md:grid-cols-3 gap-10 justify-items-center">
              <ServiceDarkCard icon={FiCode} title="Custom Software Development" />
              <ServiceLightCard />
              <ServiceDarkCard icon={FiLayers} title="Cross-Platform Solutions" />
            </div>

            <div className="mt-10 flex justify-center gap-4">
              <ArrowBtn>←</ArrowBtn>
              <ArrowBtn>→</ArrowBtn>
            </div>
          </div>
        </section>

        {/* OUR APPROACH (EXACT UI) */}
        <ApproachSection
          approachItems={approachItems}
          index={approachIndex}
          setIndex={setApproachIndex}
        />

        {/* CONTACT */}
        <ContactSection />

      </div>

      <Footer />
    </div>
  );
}

/* ---------------- UI COMPONENTS ---------------- */

function ArrowBtn({ children }) {
  return (
    <button className="w-10 h-10 rounded-full bg-[#eef1fb] text-[#0b0f5c] text-lg shadow">
      {children}
    </button>
  );
}

function ServiceDarkCard({ icon: Icon, title }) {
  return (
    <div className="w-[300px] h-[270px] rounded-2xl p-6 text-white relative bg-gradient-to-b from-[#9aa0c9] to-[#1a1f7a]">
      <div className="absolute top-5 right-5 w-10 h-10 bg-white/25 rounded-lg flex items-center justify-center">
        <Icon size={18} />
      </div>
      <h3 className="mt-12 font-bold text-lg">{title}</h3>
      <p className="mt-3 text-sm text-white/90">
        Tailored solutions for automating tasks, improving workflows, or delivering unique business functionality.
      </p>
    </div>
  );
}

function ServiceLightCard() {
  return (
    <div className="w-[300px] h-[270px] rounded-2xl p-6 bg-[#dde3f5] relative">
      <div className="absolute top-5 right-5 w-10 h-10 bg-[#cfd7ef] rounded-lg flex items-center justify-center">
        <FiSmartphone size={18} className="text-[#0b0f5c]" />
      </div>
      <h3 className="mt-12 font-bold text-lg text-[#0b0f5c]">Mobile App Development</h3>
      <p className="mt-3 text-sm text-gray-600">
        High-performance apps for iOS and Android designed to engage users.
      </p>
    </div>
  );
}

/* ---------------- OUR APPROACH (EXACT MATCH) ---------------- */

function ApproachSection({ approachItems, index, setIndex }) {
  const prev = () =>
    setIndex((index - 1 + approachItems.length) % approachItems.length);
  const next = () =>
    setIndex((index + 1) % approachItems.length);

  return (
    <section className="mt-20 md:mt-28 mb-20 relative">
      <h2 className="text-4xl font-extrabold text-[#0b0f5c] mb-12">Our Approach</h2>

      <div className="grid md:grid-cols-2 gap-0 items-center">
        
        {/* Left Column: List (Right Aligned) + Arrows (Left Aligned) */}
        <div className="flex flex-col h-full justify-center relative z-20 pr-10 md:pr-16"> 
          
          {/* Text items: Gap maintained */}
          <div className="space-y-6 flex flex-col items-end text-right">
            {approachItems.map((item, i) => (
              <h3
                key={i}
                onClick={() => setIndex(i)}
                className={`cursor-pointer transition-all duration-300 font-bold select-none whitespace-nowrap ${
                    i === index 
                    ? "text-3xl md:text-4xl text-black opacity-100" 
                    : "text-xl md:text-2xl text-gray-300 opacity-40 hover:opacity-75"
                }`}
              >
                {item.title}
              </h3>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-4 self-start mt-10 md:mt-16">
            <button 
                onClick={prev} 
                className="w-12 h-12 rounded-full bg-[#EBF0FF] flex items-center justify-center text-[#0b0f5c] hover:bg-[#dce3fc] transition shadow-sm z-30"
            >
                <span className="text-xl mb-1">←</span>
            </button>
            <button 
                onClick={next} 
                className="w-12 h-12 rounded-full bg-[#EBF0FF] flex items-center justify-center text-[#0b0f5c] hover:bg-[#dce3fc] transition shadow-sm z-30"
            >
                <span className="text-xl mb-1">→</span>
            </button>
          </div>
        </div>

        {/* Right Column: Circular Image */}
        <div className="flex justify-start items-center relative z-10 pointer-events-none md:pointer-events-auto pl-0">
             {/* Outer Circle: RESTORED thin dark border */}
             
                
                   <img
                    src={approachItems[index].image}
                    className="w-full h-full object-cover transition-opacity duration-500"
                    alt="Approach Visual"
                  />
               
           
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT SECTION ---------------- */

function ContactSection() {
  return (
    <section id="contact" className="mt-32 mb-20 text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold text-[#0b0f5c]">
        Ready to Build Your <br /> Application?
      </h2>

      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Let us create a digital solution that boosts efficiency, engages users, and accelerates growth for your startup or SME.
      </p>

      {/* Main Card */}
      <div className="mt-12 bg-white rounded-2xl border border-[#9aa0c9] shadow-lg overflow-hidden flex flex-col md:flex-row p-2 md:p-0">
        
        {/* Left: Form */}
        <div className="flex-1 p-8 md:p-12 text-left">
            <form className="space-y-5">
                <div>
                    <label className="block text-[#0b0f5c] font-bold mb-2">Name*</label>
                    <input type="text" className="w-full h-12 rounded-xl border border-[#9aa0c9] px-4 outline-none focus:border-[#0b0f5c] transition bg-white" />
                </div>
                <div>
                    <label className="block text-[#0b0f5c] font-bold mb-2">Email*</label>
                    <input type="email" className="w-full h-12 rounded-xl border border-[#9aa0c9] px-4 outline-none focus:border-[#0b0f5c] transition bg-white" />
                </div>
                <div>
                    <label className="block text-[#0b0f5c] font-bold mb-2">Phone Number</label>
                    <input type="tel" className="w-full h-12 rounded-xl border border-[#9aa0c9] px-4 outline-none focus:border-[#0b0f5c] transition bg-white" />
                </div>
                <div>
                    <label className="block text-[#0b0f5c] font-bold mb-2">Startup Name (optional)</label>
                    <input type="text" className="w-full h-12 rounded-xl border border-[#9aa0c9] px-4 outline-none focus:border-[#0b0f5c] transition bg-white" />
                </div>
                <div>
                    <label className="block text-[#0b0f5c] font-bold mb-2">Message</label>
                    <textarea className="w-full h-32 rounded-xl border border-[#9aa0c9] p-4 outline-none focus:border-[#0b0f5c] transition resize-none bg-white" />
                </div>

                <div className="flex justify-center md:justify-start pt-2">
                    <button className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#0b0f5c] text-[#0b0f5c] font-bold hover:bg-[#0b0f5c] hover:text-white transition group">
                        Send Message
                        <div className="w-6 h-6 rounded-full bg-[#0b0f5c] flex items-center justify-center group-hover:bg-white text-white group-hover:text-[#0b0f5c]">
                            <span className="text-sm">→</span>
                        </div>
                    </button>
                </div>
            </form>
        </div>

        {/* Right: Image */}
        <div className="hidden md:block w-[45%] relative">
             <img src={group69} className="absolute inset-0 w-full h-full object-cover" alt="Contact Visual" />
        </div>
      </div>
    </section>
  );
}
