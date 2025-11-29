import { useState, useEffect } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const heroSlides = [
    {
      video: "https://www.youtube.com/embed/AhGFGa-3FU8?autoplay=1&mute=1&loop=1&playlist=AhGFGa-3FU8&controls=0&modestbranding=1",
      title: "ALIRFAN RESIDENTIAL SCHOOL",
      subtitle: "Unlocking Knowledge, Inspiring Growth"
    }
  ];

  const testimonials = [
    {
      quote: "Human Being is the Viceregent of Almighty Allah. The reason behind this honor is that he has been equipped with knowledge. In broader perspective, this knowledge can be considered...",
      author: "Mr. Mujtaba Farooq, President"
    },
    {
      quote: "Education & Knowledge are rightly called the 'Third Eye' of Human Being. It gives him an insight into all affairs of life, removes all the darkness and spreads illumination...",
      author: "Mohammad Khalid, Principal"
    }
  ];

  const features = [
    { title: "Academic Facilities", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtOziYdgFhdzpVdu2m_yM1aLtIy_8qAICjng&s", bullets: ["Smart Class Rooms", "Laboratories"] },
    { title: "Computer Education", image: "https://www.wesgreeninternationalschool-sharjah.com/-/media/project/gems/wgp_wesgreen_international_school_sharjah/_generic-content-images/faciltiies-7.jpg", bullets: ["Labs", "Khan Academy"] },
    { title: "Academic Support", image: "https://www.wesgreeninternationalschool-sharjah.com/-/media/project/gems/wgp_wesgreen_international_school_sharjah/_generic-content-images/faciltiies-8.jpg", bullets: ["Regular Test Series", "Excellence Batch"] },
    { title: "Learning Resources", image: "https://www.gemsakinternationalschool.com/-/media/project/gems/akn_al_khaleej_national_school/_generic-content-images/new-facilities-02-08-22/3.jpg", bullets: ["Library", "Subject-based Clubs"] },
    { title: "Competitions and Events", image: "https://lh3.googleusercontent.com/p/AF1QipO0EdNNFv5a-ufPkAt-rmf_dANgRJwNuvvODfzt=s680-w680-h510", bullets: ["Olympiads & Competitions", "Annual Gathering"] },
    { title: "Cultural and Social Activities", image: "https://greenwoodhigh.edu.in/wp-content/uploads/2021/03/facilities-sarja-icse-tile.jpg", bullets: ["Assembly", "Co-Curricular Activities"] },
    { title: "Physical Education", image: "https://www.sunglowschool.in/web_uploads/ch2018-11-05-16-37-34.jpg", bullets: ["Sports", "Judo"] },
    { title: "Environmental Learning", image: "https://images.unsplash.com/photo-1588075592446-8e95b58e9e5e?w=800&q=80", bullets: ["\"Al Hamra\" Garden", "Educational Tours"] },
    { title: "Religious Studies", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80", bullets: ["Islamic Environment", "Cultural Studies"] }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-800 overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        body { font-family: 'Poppins', sans-serif; }
        .glass { background: rgba(255,255,255,0.9); backdrop-filter: blur(20px); border: 1px solid rgba(212,175,55,0.2); border-radius: 16px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
        .gold { color: #d4af37; }
        .nav-link { 
          position: relative; 
          color: #1f2937; 
          font-weight: 500; 
          font-size: 1rem; 
          padding: 0.5rem 1rem; 
          transition: all 0.3s;
        }
        .nav-link:hover { color: #d4af37; }
        .nav-link::after {
          content: ''; 
          position: absolute; 
          width: 0; 
          height: 2px; 
          bottom: -4px; 
          left: 50%; 
          background: #d4af37; 
          transition: all 0.3s;
        }
        .nav-link:hover::after { width: 100%; left: 0; }
        .hamburger {
          width: 25px;
          height: 20px;
          position: relative;
          cursor: pointer;
        }
        .hamburger span {
          display: block;
          width: 100%;
          height: 2px;
          background: #d4af37;
          border-radius: 2px;
          transition: all 0.3s;
        }
        .hamburger span:nth-child(2) { margin: 5px 0; }
        .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .hamburger.active span:nth-child(2) { opacity: 0; }
        .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(6px, -6px); }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate { animation: fadeInUp 0.8s ease-out forwards; }
        .hero-overlay { background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%); }
      `}</style>

      {/* Wesgreen-Inspired Navbar */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#d4af37' }}>
            Al-Irfan
          </div>

          {/* Desktop Menu */}
          <div style={{ display: 'flex', gap: '2.5rem' }} className="hidden lg:flex">
            {['Home', 'About Us', 'Why Al-Irfan?', 'Admissions', 'Curriculum', 'Student Life', 'For Parents'].map((item) => (
              <a key={item} href="#" className="nav-link">
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div 
            className="hamburger lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={mobileMenuOpen ? 'active' : ''}></span>
            <span className={mobileMenuOpen ? 'active' : ''}></span>
            <span className={mobileMenuOpen ? 'active' : ''}></span>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      {mobileMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(10,26,47,0.98)',
            zIndex: 998,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div style={{ textAlign: 'center' }} onClick={(e) => e.stopPropagation()}>
            {['Home', 'About Us', 'Why Al-Irfan?', 'Admissions', 'Curriculum', 'Student Life', 'For Parents'].map((item, i) => (
              <div 
                key={item} 
                style={{ 
                  margin: '1.5rem 0',
                  opacity: 0,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  animationDelay: `${i * 0.1}s`
                }}
              >
                <a 
                  href="#" 
                  style={{ 
                    color: '#d4af37', 
                    textDecoration: 'none', 
                    fontSize: '2.5rem', 
                    fontWeight: '600'
                  }}
                >
                  {item}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hero with YouTube Video */}
      <section style={{ height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <iframe
            src="https://www.youtube.com/embed/AhGFGa-3FU8?autoplay=1&mute=1&loop=1&playlist=AhGFGa-3FU8&controls=0&modestbranding=1&rel=0"
            style={{ width: '100%', height: '100%', border: 'none' }}
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,26,47,0.75) 0%, rgba(10,26,47,0.95) 100%)' }} className="hero-overlay"></div>
        </div>

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1000px', padding: '0 2rem' }} className="animate">
          <h1 style={{ fontSize: 'clamp(3.5rem,9vw,8rem)', fontWeight: '900', margin: '0 0 1rem 0', lineHeight: '1.1' }}>
            ALIRFAN RESIDENTIAL SCHOOL
          </h1>
          <p style={{ fontSize: 'clamp(1.6rem,5vw,3.2rem)', margin: '0 0 1.5rem 0', color: '#e2e8f0' }}>
            Unlocking Knowledge • Inspiring Growth
          </p>
          <p style={{ fontSize: '1.4rem', maxWidth: '750px', margin: '0 auto 3.5rem', color: '#cbd5e1', lineHeight: '1.7' }}>
            Empowering young minds with academic excellence and strong Islamic values in a safe, modern residential campus.
          </p>
          <a href="#enquiry" className="btn-gold">
            ENROLL YOUR CHILD TODAY
          </a>
        </div>
      </section>

      {/* Leadership Insights */}
      <section style={{ padding: '120px 5%', background: 'linear-gradient(to bottom, #0a1a2f, #03102a)' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '4rem', color: '#d4af37', marginBottom: '4rem' }}>Leadership Insights</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtOziYdgFhdzpVdu2m_yM1aLtIy_8qAICjng&s" 
              alt="Leadership" 
              style={{ borderRadius: '24px', boxShadow: '0 25px 50px rgba(0,0,0,0.6)', width: '100%', height: 'auto' }} 
            />
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '1.6rem', lineHeight: '2.4rem', color: '#e2e8f0', fontStyle: 'italic' }}>
                "True education extends beyond books — it nurtures the soul, builds character, and prepares leaders for tomorrow."
              </p>
              <p style={{ fontSize: '1.8rem', color: '#d4af37', marginTop: '3rem', fontWeight: 'bold' }}>
                — Janab Secretary Saheb
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* President's Message */}
      <section style={{ padding: '120px 5%', background: '#03102a' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '4rem', color: '#d4af37', marginBottom: '5rem' }}>President's Message</h2>
          <div className="glass" style={{ padding: '3rem', minHeight: '320px', position: 'relative', overflow: 'hidden' }}>
            {presidentNotes.map((note, i) => (
              <div
                key={i}
                style={{
                  position: i === currentSlide ? 'relative' : 'absolute',
                  top: 0, left: 0, width: '100%',
                  opacity: i === currentSlide ? 1 : 0,
                  transform: i === currentSlide ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 1s ease',
                }}
              >
                <p style={{ fontSize: '1.7rem', lineHeight: '2.6rem', color: '#e2e8f0', fontStyle: 'italic' }}>
                  {note.quote}
                </p>
                <p style={{ marginTop: '3rem', fontSize: '1.8rem', color: '#d4af37', fontWeight: 'bold' }}>
                  {note.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: '120px 5%', background: 'linear-gradient(to top, #0a1a2f, #03102a)' }}>
        <h2 style={{ textAlign: 'center', fontSize: '4.2rem', color: '#d4af37', marginBottom: '6rem' }}>
          Why Choose Al-Irfan?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem', maxWidth: '1400px', margin: '0 auto' }}>
          {features.map((f, i) => (
            <div key={i} className="glass" style={{ padding: '3rem', transition: 'transform 0.4s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-20px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <h3 style={{ fontSize: '2rem', color: '#d4af37', marginBottom: '2rem' }}>{f.title}</h3>
              <ul style={{ paddingLeft: '1.8rem', color: '#cbd5e1', fontSize: '1.2rem' }}>
                {f.bullets.map((b, j) => (
                  <li key={j} style={{ margin: '1rem 0' }}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section style={{ padding: '120px 5%', background: '#0a1a2f' }}>
        <h2 style={{ textAlign: 'center', fontSize: '4rem', color: '#d4af37', marginBottom: '5rem' }}>Campus Life</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', maxWidth: '1400px', margin: '0 auto' }}>
          {[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtOziYdgFhdzpVdu2m_yM1aLtIy_8qAICjng&s",
            "https://www.wesgreeninternationalschool-sharjah.com/-/media/project/gems/wgp_wesgreen_international_school_sharjah/_generic-content-images/faciltiies-7.jpg",
            "https://www.wesgreeninternationalschool-sharjah.com/-/media/project/gems/wgp_wesgreen_international_school_sharjah/_generic-content-images/faciltiies-8.jpg",
            "https://www.gemsakinternationalschool.com/-/media/project/gems/akn_al_khaleej_national_school/_generic-content-images/new-facilities-02-08-22/3.jpg",
            "https://lh3.googleusercontent.com/p/AF1QipO0EdNNFv5a-ufPkAt-rmf_dANgRJwNuvvODfzt=s680-w680-h510",
            "https://greenwoodhigh.edu.in/wp-content/uploads/2021/03/facilities-sarja-icse-tile.jpg",
            "https://www.sunglowschool.in/web_uploads/ch2018-11-05-16-37-34.jpg"
          ].map((src, i) => (
            <img 
              key={i} 
              src={src} 
              alt={`Campus Life ${i + 1}`} 
              style={{ 
                borderRadius: '24px', 
                width: '100%', 
                height: '340px', 
                objectFit: 'cover', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                loading: 'lazy'
              }} 
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="enquiry" style={{ padding: '140px 5%', background: 'linear-gradient(to bottom, #03102a, #000)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '4.5rem', color: '#d4af37', marginBottom: '2rem' }}>
            Ready to Join the Al-Irfan Family?
          </h2>
          <p style={{ fontSize: '1.6rem', color: '#e2e8f0', marginBottom: '5rem' }}>
            Limited seats available • Secure your child's future today
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '5rem' }}>
            <div className="glass" style={{ padding: '3rem' }}>
              <h3 style={{ color: '#d4af37', fontSize: '2rem', marginBottom: '1.5rem' }}>Admission Office</h3>
              <p style={{ fontSize: '1.3rem', margin: '0.8rem 0' }}>+91 9860 579 809</p>
              <p style={{ fontSize: '1.3rem', margin: '0.8rem 0' }}>+91 8975 613 666</p>
              <p style={{ fontSize: '1.3rem', margin: '0.8rem 0' }}>+91 9923 203 933</p>
              <p style={{ marginTop: '1.5rem', fontSize: '1.3rem' }}>mail@alirfanschool.com</p>
            </div>
            <div className="glass" style={{ padding: '3rem' }}>
              <h3 style={{ color: '#d4af37', fontSize: '2rem', marginBottom: '1.5rem' }}>Visit Us</h3>
              <p style={{ fontSize: '1.3rem' }}>Every Day: 9:00 AM – 3:00 PM</p>
              <p style={{ marginTop: '1.5rem', fontSize: '1.3rem' }}>Khultabad, Maharashtra (India)</p>
            </div>
          </div>
          <a href="enquiry.aspx" className="btn-gold">
            SUBMIT ENQUIRY NOW
          </a>
        </div>
      </section>

      <footer style={{ padding: '4rem', textAlign: 'center', background: '#000', color: '#777', fontSize: '1.1rem' }}>
        <p>© 2024–2025 Al-Irfan Residential School • All Rights Reserved</p>
      </footer>
    </div>
  );
}