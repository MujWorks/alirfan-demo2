import React, { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Why AI-Irfan?", href: "#why" },
    { name: "Curriculum", href: "#curriculum" },
    { name: "Our Team", href: "#team" },
    { name: "Admissions", href: "#admissions" },
    { name: "News & Events", href: "#news" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <Head>
        <title>AI-Irfan School - Outstanding British School in Dubai</title>
        <meta name="description" content="Premium British Curriculum School in Dubai with AI Integration" />
      </Head>

      {/* Enhanced Header with Full Design */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-3">
            {/* Logo - Enhanced Circular with Shadow */}
            <a href="/" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-3 border-blue-500/20 shadow-xl group-hover:shadow-blue-200 transition-shadow duration-300">
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=300&h=300&fit=crop&crop=face&crop=entropy"
                  alt="AI-Irfan Logo"
                  className="w-full h-full object-cover brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full"></div>
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">AI-Irfan School</h1>
                <p className="text-xs text-blue-600 font-medium tracking-wide uppercase">Outstanding British Education</p>
              </div>
            </a>

            {/* Desktop Nav - Enhanced with Hover Effects */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-700 font-medium text-sm lg:text-base py-2 px-3 transition-all duration-200 hover:text-blue-600 hover:font-semibold after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-200 group"
                >
                  {item.name}
                  <span className="absolute inset-0 -z-10 bg-blue-50 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                </a>
              ))}
            </nav>

            {/* CTA Button in Header */}
            <a
              href="#admissions"
              className="hidden lg:inline-block bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Enquire Now
            </a>

            {/* Mobile Menu Button - Animated Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg className={`w-6 h-6 transition-transform duration-300 ${menuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" className={`${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" className={`${menuOpen ? 'opacity-100 rotate-180' : 'opacity-0'}`} />
              </svg>
            </button>
          </div>

          {/* Mobile Nav - Full Screen Overlay */}
          {menuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100">
              <nav className="flex flex-col p-4 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-3 px-4 text-gray-700 font-medium border-b border-gray-100 last:border-b-0 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#admissions"
                  className="mt-4 bg-blue-600 text-white py-3 px-4 rounded-md font-semibold text-center hover:bg-blue-700 transition-colors"
                >
                  Enquire Now
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - Full Width with Overlay Image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-32 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop")'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Welcome to AI-Irfan School
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              A Premium British School in Dubai | Family-Focused Ethos | AI-Enhanced Learning Excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#admissions"
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 transform"
              >
                Apply Now
              </a>
              <a
                href="#about"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Discover More
              </a>
            </div>
            <div className="mt-12 flex justify-center space-x-1 text-blue-200 text-sm">
              <span>Outstanding by KHDA</span>
              <span>•</span>
              <span>FS1 to Year 13</span>
              <span>•</span>
              <span>Over 40 Nationalities</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
      </section>

      {/* About Section - Two Column with Image */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The AI Standard in Education
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At AI-Irfan School, we blend the rigour of the British Curriculum with cutting-edge AI integration to create a transformative learning environment. Our family-focused ethos ensures every student thrives in a supportive, inclusive community.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Rated <span className="font-semibold text-blue-600">Outstanding</span> by KHDA, we deliver world-class education from Early Years to Sixth Form, fostering innovation, wellbeing, and global citizenship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/about-us"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                >
                  Learn About Us
                </a>
                <a
                  href="/principal-welcome"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Principal's Message
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&w=800&h=600&fit=crop"
                alt="AI-Irfan Campus"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-48 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-xl flex items-center justify-center text-white font-bold text-sm">
                #AIStandard
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Gradient Background */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-blue-600">1,200+</h3>
              <p className="text-gray-600 font-medium">Students</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-blue-600">50+</h3>
              <p className="text-gray-600 font-medium">Nationalities</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-blue-600">100%</h3>
              <p className="text-gray-600 font-medium">University Placement</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-blue-600">Outstanding</h3>
              <p className="text-gray-600 font-medium">KHDA Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section - Accordion-like Grids */}
      <section id="curriculum" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Curriculum Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">From play-based discovery to academic excellence</p>
          </div>
          <div className="space-y-16">
            {[
              {
                title: "Early Years Foundation Stage",
                desc: "Nurturing curiosity through play and exploration for ages 3-5.",
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop",
                reverse: false,
              },
              {
                title: "Primary Years",
                desc: "Building strong foundations in core subjects with AI-infused creativity for ages 5-11.",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop",
                reverse: true,
              },
              {
                title: "Secondary & Sixth Form",
                desc: "Preparing for global success with GCSE, A-Levels, and advanced AI modules for ages 11-18.",
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop",
                reverse: false,
              },
            ].map((phase, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${phase.reverse ? 'md:grid-cols-reverse' : ''}`}>
                <div className={`${phase.reverse ? 'md:order-2' : ''}`}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">{phase.title}</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{phase.desc}</p>
                  <a href={`/curriculum/${phase.title.toLowerCase().replace(/ /g, '-')}`} className="text-blue-600 font-semibold hover:underline flex items-center">
                    Learn More <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
                <div className={`${phase.reverse ? 'md:order-1' : ''} relative group`}>
                  <img src={phase.image} alt={phase.title} className="w-full rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid - 3 Column with Cards */}
      <section id="facilities" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600">State-of-the-art spaces designed for inspiration and growth</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "AI & Robotics Labs", desc: "Hands-on innovation with cutting-edge technology.", img: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop" },
              { title: "Sports & Wellness Centre", desc: "Modern courts and pools for physical excellence.", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop" },
              { title: "Performing Arts Studio", desc: "Creative spaces for drama, music, and expression.", img: "https://images.unsplash.com/photo-1511632765486-a047080e4e91?w=400&h=300&fit=crop" },
              { title: "Digital Library", desc: "Vast resources for research and lifelong learning.", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop" },
              { title: "Makerspace", desc: "Design and prototype your ideas into reality.", img: "https://images.unsplash.com/photo-1558618047-3c8c76ca71b2?w=400&h=300&fit=crop" },
              { title: "Outdoor Learning Areas", desc: "Nature-inspired zones for collaborative discovery.", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop" },
            ].map((facility, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 h-64">
                  <img src={facility.img} alt={facility.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                    <p className="text-blue-100">{facility.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose - 3 Column Cards */}
      <section id="why" className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose AI-Irfan?</h2>
            <p className="text-xl text-gray-600">#AIShineBright</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Excellence</h3>
              <p className="text-gray-600 mb-6">75% of students exceed national standards in core subjects.</p>
              <a href="#why" className="text-blue-600 font-semibold hover:underline">Read More</a>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalised Learning</h3>
              <p className="text-gray-600 mb-6">Tailored AI-driven paths for every student's potential.</p>
              <a href="#why" className="text-blue-600 font-semibold hover:underline">Read More</a>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Community</h3>
              <p className="text-gray-600 mb-6">Diverse, inclusive environment with 50+ nationalities.</p>
              <a href="#why" className="text-blue-600 font-semibold hover:underline">Read More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Student Life Grid */}
      <section id="student-life" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Vibrant Student Life</h2>
            <p className="text-xl text-gray-600">#AIShineBright</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Extracurriculars", desc: "Clubs, sports, and arts for holistic growth.", img: "https://images.unsplash.com/photo-1516979187457-637a1d7a5a0d?w=400&h=300&fit=crop" },
              { title: "Events & Trips", desc: "Memorable experiences that build lasting bonds.", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop" },
              { title: "Pastoral Care", desc: "Dedicated support for wellbeing and confidence.", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop" },
            ].map((activity, index) => (
              <div key={index} className="group">
                <img src={activity.img} alt={activity.title} className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions CTA - Bold Section */}
      <section id="admissions" className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&w=1920&h=800&fit=crop")'
          }}
        ></div>
        <div className="relative max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">Admissions Open for 2025-2026 | FS1 to Year 13</p>
          <a
            href="/admissions"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 transform hover:scale-105"
          >
            Enrol Online Now
          </a>
        </div>
      </section>

      {/* Team Teaser */}
      <section id="team" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Leadership Team</h2>
          <p className="text-lg text-gray-600 mb-8">Passionate educators dedicated to your child's success</p>
          <div className="grid md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="group">
                <img
                  src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=200&h=200&fit=crop&crop=face`}
                  alt={`Team Member ${i + 1}`}
                  className="w-20 h-20 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="font-semibold text-gray-900">Role Title</h3>
              </div>
            ))}
          </div>
          <a href="/our-team" className="mt-8 inline-block text-blue-600 font-semibold hover:underline">Meet the Full Team</a>
        </div>
      </section>

      {/* Footer - Enhanced with Sections */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500">
                  <img
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=200&h=200&fit=crop&crop=face"
                    alt="Logo"
                  />
                </div>
                <h3 className="text-xl font-bold">AI-Irfan School</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">Empowering future leaders through innovative British education in Dubai.</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">📘</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">📷</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">💼</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/admissions" className="hover:text-blue-400 transition-colors">Admissions</a></li>
                <li><a href="/curriculum" className="hover:text-blue-400 transition-colors">Curriculum</a></li>
                <li><a href="/news-events" className="hover:text-blue-400 transition-colors">News & Events</a></li>
                <li><a href="/fees" className="hover:text-blue-400 transition-colors">Fees</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Contact Info</h4>
              <p className="text-gray-400 text-sm space-y-2">
                <span>Mirdif, Dubai, UAE</span>
                <span>info@aiirfan.com</span>
                <span>+971 4 123 4567</span>
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Latest News</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Open Day 2025</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">AI Workshop</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            © 2025 AI-Irfan School. All rights reserved. | #AIStandard #AIShineBright
          </div>
        </div>
      </footer>
    </>
  );
}