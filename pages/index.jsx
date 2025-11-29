import React, { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About Us",
    "Why AI-Irfan?",
    "Curriculum",
    "Our Team",
    "Admissions",
    "News & Events",
    "Contact",
  ];

  return (
    <>
      {/* Header & Navigation - Clean and minimal, text-based links */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          {/* Logo - Circular, professional */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-600 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=200&h=200&fit=crop&crop=face"
                  alt="AI-Irfan School Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">AI-Irfan School</h1>
                <p className="text-sm text-gray-600">Outstanding British School in Dubai</p>
              </div>
            </div>

            {/* Desktop Navigation - Simple links */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button - Simple hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-700 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-700 hover:text-blue-600 font-medium"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Banner - Text-heavy welcome with subtle background */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to AI-Irfan School
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A Premium British School with a Family-Focused Ethos in the Dubai Area
          </p>
          <div className="space-x-4">
            <a
              href="/admissions"
              className="inline-block bg-blue-600 text-white px-8 py-3 font-semibold rounded hover:bg-blue-700 transition"
            >
              Apply Now
            </a>
            <a
              href="/about-us"
              className="inline-block text-blue-600 border-2 border-blue-600 px-8 py-3 font-semibold rounded hover:bg-blue-600 hover:text-white transition"
            >
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Principal's Welcome and Ethos */}
      <section id="about-us" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">The AI Standard in Education</h2>
              <p className="text-lg text-gray-600 mb-6">
                At AI-Irfan, we nurture a supportive and inspiring environment where academic rigour meets innovative AI integration. #AIStandard
              </p>
              <a
                href="/about-us"
                className="text-blue-600 hover:underline font-semibold"
              >
                Read More about our education
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Welcome from Our Principal</h3>
              <p className="text-gray-600 mb-6">
                Rated Outstanding by KHDA, our inclusive community offers a vibrant curriculum delivered by British-trained teachers.
              </p>
              <a
                href="/about-us/welcome-message"
                className="text-blue-600 hover:underline font-semibold"
              >
                Read More about principal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section - Detailed subsections */}
      <section id="curriculum" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Explore Our Curriculum</h2>
          <div className="space-y-12">
            {/* EYFS */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Early Years Foundation Stage (3-5 years)</h3>
                <p className="text-gray-600">A nurturing environment focused on play-based learning and holistic development.</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop"
                alt="EYFS"
                className="rounded-lg shadow-md"
              />
            </div>
            {/* Primary */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
                alt="Primary"
                className="rounded-lg shadow-md order-2 md:order-1"
              />
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Primary (5-11 years)</h3>
                <p className="text-gray-600">Following the National Curriculum for England with core subjects and AI enhancements.</p>
              </div>
            </div>
            {/* Secondary */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Secondary (11-18 years)</h3>
                <p className="text-gray-600">Key Stage 3-5 leading to GCSE and A-Levels, with Arabic, Islamic studies, and extracurriculars.</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop"
                alt="Secondary"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="/curriculum/overview"
              className="text-blue-600 hover:underline font-semibold text-lg"
            >
              Read More about Curriculum
            </a>
          </div>
        </div>
      </section>

      {/* Facilities Section - List with images */}
      <section id="facilities" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our World-Class Facilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "AI & Robotics Labs", img: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop", desc: "State-of-the-art labs for innovative learning." },
              { title: "Sports Courts", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop", desc: "Multi-purpose courts including padel and MUGA." },
              { title: "Performing Arts Studio", img: "https://images.unsplash.com/photo-1511632765486-a047080e4e91?w=400&h=300&fit=crop", desc: "Dedicated space for drama, dance, and music." },
              { title: "Swimming Pool", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop", desc: "Modern aquatic facilities for physical education." },
              { title: "Library & Research Centre", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop", desc: "Digital and traditional resources for inquiry-based learning." },
              { title: "Makerspace", img: "https://images.unsplash.com/photo-1558618047-3c8c76ca71b2?w=400&h=300&fit=crop", desc: "Creative space for design and technology projects." },
            ].map((facility, index) => (
              <div key={index} className="text-center">
                <img src={facility.img} alt={facility.title} className="rounded-lg shadow-md mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="why-ai-irfan" className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why AI-Irfan School?</h2>
          <p className="text-lg text-gray-600 mb-8">Leading with Vision and Excellence #AIShineBright</p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Academic Success</h3>
              <p className="text-gray-600"><strong>75%</strong> of students achieve above curriculum standards in English, Maths, and Science.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Personalised Attention</h3>
              <p className="text-gray-600">Rated Outstanding across all phases for Curriculum Design (KHDA 2023-24).</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Global Community</h3>
              <p className="text-gray-600">Nurturing families from over 40 nationalities in a home-away-from-home.</p>
            </div>
          </div>
          <a
            href="/choosing-rds"
            className="mt-8 inline-block text-blue-600 hover:underline font-semibold"
          >
            Read More about Why AI-Irfan
          </a>
        </div>
      </section>

      {/* Student Life Section */}
      <section id="student-life" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Student Life at AI-Irfan</h2>
          <p className="text-center text-gray-600 mb-8">#AIShineBright - Prioritising emotional, mental, and physical wellbeing.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1516979187457-637a1d7a5a0d?w=400&h=300&fit=crop" alt="Extracurriculars" className="rounded-lg shadow-md mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Extracurricular Activities</h3>
              <p className="text-gray-600">Performing Arts, Sports, and Modern Foreign Languages.</p>
            </div>
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop" alt="Community" className="rounded-lg shadow-md mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Inclusive Community</h3>
              <p className="text-gray-600">Building confidence through diverse experiences and performances.</p>
            </div>
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop" alt="Wellbeing" className="rounded-lg shadow-md mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Pastoral Care</h3>
              <p className="text-gray-600">Holistic support for every student's growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section id="admissions" className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">School Admissions FS1 - Year 13</h2>
          <p className="text-xl mb-8">Want to join our community?</p>
          <a
            href="/admissions/enrol-online"
            className="inline-block bg-white text-blue-600 px-8 py-3 font-bold rounded hover:bg-gray-100 transition"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="our-team" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet Our Leadership Team</h2>
          <p className="text-gray-600 mb-8">Dedicated educators shaping the future.</p>
          <a
            href="/our-team"
            className="text-blue-600 hover:underline font-semibold"
          >
            Meet the Team
          </a>
        </div>
      </section>

      {/* Footer - Simple and informative */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-600">
                  <img
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=200&h=200&fit=crop&crop=face"
                    alt="Logo"
                  />
                </div>
                <h3 className="text-xl font-bold">AI-Irfan School</h3>
              </div>
              <p className="text-gray-400 text-sm">Premium British Education in Dubai.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/admissions" className="hover:text-blue-400">Admissions</a></li>
                <li><a href="/curriculum" className="hover:text-blue-400">Curriculum</a></li>
                <li><a href="/news-events" className="hover:text-blue-400">News & Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <p className="text-gray-400 text-sm">
                Mirdif Area, Dubai, UAE<br />
                info@aiirfan.com<br />
                +971 4 123 4567
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-blue-400">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-blue-400">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-blue-400">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            © 2025 AI-Irfan School. All rights reserved. | #AIStandard #AIShineBright
          </div>
        </div>
      </footer>
    </>
  );
}