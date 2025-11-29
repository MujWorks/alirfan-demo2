import React, { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About Us",
    "Why AI-Irfan?",
    "Admissions",
    "Curriculum",
    "Student Life",
    "For Parents",
    "Contact",
  ];

  return (
    <>
      {/* Header & Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo - Circular */}
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-amber-500 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=200&h=200&fit=crop&crop=face"
                alt="AI-Irfan School Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">AI-Irfan</h1>
              <p className="text-xs text-amber-600 font-semibold">
                British International School
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-amber-600 font-medium transition"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden z-50 relative w-8 h-8 focus:outline-none"
          >
            <span
              className={`block absolute h-0.5 w-6 bg-amber-600 transform transition-all duration-300 ${
                menuOpen ? "rotate-45 top-3.5" : "top-2"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-6 bg-amber-600 top-3.5 transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-6 bg-amber-600 transform transition-all duration-300 ${
                menuOpen ? "-rotate-45 top-3.5" : "top-5"
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 bg-gradient-to-b from-amber-600 to-amber-700 z-40 pt-24">
            <nav className="flex flex-col items-center space-y-8 text-white text-xl font-medium">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-amber-200 transition"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to AI-Irfan School
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            Outstanding British Education | AI-Enhanced Learning | Dubai
          </p>
          <div className="space-x-4">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg">
              Enquire Now
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-amber-600 transition">
              Virtual Tour
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              A New Era of Learning
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              AI-Irfan is a premium British curriculum school in Dubai that
              integrates artificial intelligence and modern pedagogy to prepare
              students for a future-driven world.
            </p>
            <p className="text-gray-600 mb-8">
              Rated "Outstanding" by KHDA, we offer education from FS1 to Year
              13 with world-class facilities, experienced British teachers, and
              a truly inclusive community.
            </p>
            <button className="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition">
              Discover More
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
              alt="AI-Irfan Campus"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold">1500+</h3>
            <p className="text-amber-100">Happy Students</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">65+</h3>
            <p className="text-amber-100">Nationalities</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">100%</h3>
            <p className="text-amber-100">University Placement</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">A*</h3>
            <p className="text-amber-100">KHDA Rating</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500">
                  <img
                    src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=200&h=200&fit=crop&crop=face"
                    alt="Logo"
                  />
                </div>
                <h3 className="text-xl font-bold">AI-Irfan School</h3>
              </div>
              <p className="text-gray-400">
                Shaping tomorrow's leaders through excellence in education.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-amber-500">
                    Admissions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-500">
                    Fees
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-500">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-400">
                Al Barsha South, Dubai, UAE
                <br />
                info@aiirfan.com
                <br />
                +971 4 123 4567
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4 text-2xl">
                <a href="#" className="hover:text-amber-500">
                  Facebook
                </a>
                <a href="#" className="hover:text-amber-500">
                  Instagram
                </a>
                <a href="#" className="hover:text-amber-500">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-500">
            © 2025 AI-Irfan British International School. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}