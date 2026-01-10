import logo from '../assets/icons/Logo-removebg-preview.png'

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="relative rounded-3xl overflow-hidden bg-[#D8DEF6]">

          {/* Content */}
          <div className="relative z-20 px-6 md:px-10 py-10">

            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {/* Left */}
              <div className="flex flex-col">

                {/* WHITE LOGO STRIP (Responsive Safe) */}
                <div
                  className="inline-flex items-center gap-3 bg-white shadow-md
                             rounded-tl-3xl rounded-br-[2rem]
                             px-5 py-3 w-fit"
                  style={{
                    clipPath:
                      'polygon(0 0, 100% 0, 92% 100%, 0% 100%)',
                  }}
                >
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-10 h-10 shrink-0"
                  />
                  <span className="font-semibold text-gray-800 text-lg leading-tight whitespace-nowrap">
                    DatenStrone <span className="block sm:inline">3AGsolution</span>
                  </span>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button className="inline-flex items-center gap-2 rounded-full bg-white text-indigo-900 px-5 py-2.5 text-sm font-semibold shadow border border-indigo-200 hover:bg-indigo-50">
                    Book Consultation <span aria-hidden>➜</span>
                  </button>

                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-b from-indigo-900 to-indigo-700 text-white shadow-md cursor-pointer">
                    in
                  </span>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-b from-indigo-900 to-indigo-700 text-white shadow-md cursor-pointer">
                    ig
                  </span>
                </div>
              </div>

              {/* Right */}
              <div className="text-indigo-900 md:text-right">
                <div className="font-bold mb-4 text-lg">Contact</div>

                <div className="grid gap-4 text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2 sm:gap-6">
                    <span className="text-gray-700 w-32">Email</span>
                    <a className="font-semibold break-all" href="mailto:info@datenstrom-3ag.com">
                      info@datenstrom-3ag.com
                    </a>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2 sm:gap-6">
                    <span className="text-gray-700 w-32">Working Hours</span>
                    <span className="font-semibold">
                      Monday – Friday 9:00 – 18:00
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2 sm:gap-6">
                    <span className="text-gray-700 w-32">Our Address</span>
                    <span className="font-semibold">
                      Kolonnenstr. 8, 10827 Berlin
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 border-t border-indigo-200 pt-4 text-xs md:text-sm text-gray-900 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>© 2025 datenstrom-3ag.com. All Rights Reserved</div>

              <div className="font-semibold text-center">
                <a href="#" className="hover:underline">Privacy Policy</a>
              </div>

              <div className="font-semibold">
                <a href="#" className="hover:underline">Terms and conditions</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}
