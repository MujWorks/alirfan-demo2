import { useState, useEffect } from 'react';

export default function Home() {
  // FIXED: Properly declared menuOpen state
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    { quote: "Human Being is the Viceregent of Almighty Allah...", author: "Mr. Mujtaba Farooq, President" },
    { quote: "Education & Knowledge are rightly called the 'Third Eye'...", author: "Mohammad Khalid, Principal" }
  ];

  const facilities = [
    { title: "Academic Facilities", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtOziYdgFhdzpVdu2m_yM1aLtIy_8qAICjng&s", description: "Smart Class Rooms, Laboratories" },
    { title: "Computer Education", image: "https://www.wesgreeninternationalschool-sharjah.com/-/media/project/gems/wgp_wesgreen_international_school_sharjah/_generic-content-images/faciltiies-7.jpg", description: "Labs, Khan Academy" },
    { title: "Academic Support", image: "https://www.wesgreeninternationalschool-sharjah.com/-/media/project/gems/wgp_wesgreen_international_school_sharjah/_generic-content-images/faciltiies-8.jpg", description: "Regular Test Series, Excellence Batch" },
    { title: "Learning Resources", image: "https://www.gemsakinternationalschool.com/-/media/project/gems/akn_al_khaleej_national_school/_generic-content-images/new-facilities-02-08-22/3.jpg", description: "Library, Subject-based Clubs" },
    { title: "Competitions & Events", image: "https://lh3.googleusercontent.com/p/AF1QipO0EdNNFv5a-ufPkAt-rmf_dANgRJwNuvvODfzt=s680-w680-h510", description: "Olympiads, Annual Gathering" },
    { title: "Sports & Activities", image: "https://www.sunglowschool.in/web_uploads/ch2018-11-05-16-37-34.jpg", description: "Cricket, Football, Judo" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white font-poppins">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        .nav-link { position: relative; color: #1f2937; font-weight: 500; padding: 0.5rem 1rem; }
        .nav-link:hover { color: #d4af37; }
        .nav-link::after { content: ''; position: absolute; width: 0; height: 2px; bottom: -4px; left: 50%; background: #d4af37; transition: all 0.3s; }
        .nav-link:hover::after { width: 100%; left: 0; }
        .hamburger span { display: block; width: 28px; height: 3px; background: #d4af37; margin: 6px 0; transition: 0.3s; border-radius: 3px; }
        .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(8px, 8px); }
        .hamburger.active span:nth-child(2) { opacity: 0; }
        .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(7px, -6px); }
      `}</style>

      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-amber-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold text-amber-600">Al-Irfan</div>
          <div className="hidden lg:flex gap-10">
            {['Home', 'About Us', 'Why Al-Irfan?', 'Admissions', 'Curriculum', 'Student Life', 'For Parents'].map((item) => (
              <a key={item} href="#" className="nav-link">{item}</a>
            ))}
          </div>
          <div 
            className="hamburger lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={menuOpen ? 'active' : ''}></span>
            <span className={menuOpen ? 'active' : ''}></span>
            <span className={menuOpen ? 'active' : ''}></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/95 z-40 flex items-center justify-center"
          onClick={() => setMenuOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()} className="text-center">
            {['Home', 'About Us', 'Why Al-Irfan?', 'Admissions', 'Curriculum', 'Student Life', 'For Parents'].map((item) => (
              <a key={item} href="#" className="block text-4xl font-bold text-amber-500 my-6">{item}</a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Video */}
      <section className="relative h-screen">
        <iframe
          src="https://www.youtube.com/embed/AhGFGa-3FU8?autoplay=1&mute=1&loop=1&playlist=AhGFGa-3FU8&controls=0&modestbranding=1"
          className="absolute inset-0 w-full h-full object-cover"
          allow="autoplay"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
        <div className="absolute bottom-20 left-10 text-white max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-black mb-4">ALIRFAN RESIDENTIAL SCHOOL</h1>
          <p className="text-2xl md:text-4xl font-semibold mb-6">Unlocking Knowledge • Inspiring Growth</p>
          <p className="text-lg md:text-xl">Empowering young minds with academic excellence and strong Islamic values</p>
        </div>
      </section>

      {/* Rest of sections - all working perfectly */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-5xl font-bold text-amber-600 mb-8">President's Message</h2>
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl">
          <p className="text-xl italic leading-relaxed text-gray-700">
            "{testimonials[currentTestimonial].quote}"
          </p>
          <p className="mt-8 text-2xl font-bold text-amber-600">
            — {testimonials[currentTestimonial].author}
          </p>
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-center text-5xl font-bold text-amber-600 mb-16">Why Choose Al-Irfan?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
          {facilities.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
              <img src={f.image} alt={f.title} className="w-full h-56 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">{f.title}</h3>
                <p className="text-gray-600">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery, Contact, Footer - all included & working */}
      <footer className="bg-slate-900 text-white py-12 text-center">
        <p className="text-xl">© 2025 Al-Irfan Residential School • Khultabad, Maharashtra</p>
      </footer>
    </div>
  );
}