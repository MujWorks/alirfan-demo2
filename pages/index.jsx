import { useState, useEffect } from 'react';

export default function Home() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const heroSlides = [
    {
      video: "https://www.youtube.com/embed/AhGFGa-3FU8?autoplay=1&mute=1&loop=1&playlist=AhGFGa-3FU8&controls=0&modestbranding=1",
      title: "ALIRFAN RESIDENTIAL SCHOOL",
      subtitle: "Unlocking Knowledge, Inspiring Growth",
      description: "Empower your child with a dynamic and engaging learning environment that fosters creativity and critical thinking."
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

  const facilities = [
    { title: "Academic Facilities", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtOziYdgFhdzpVdu2m_yM1aLtIy_8qAICjng&s", description: "Smart Class Rooms, Laboratories" },
    { title: "Computer Education", image: "https://www.wesgreeninternationalschool-sharjah.com/-/media/project/gems/wgp_wesgreen_international_school_sharjah/_generic-content-images/faciltiies-7.jpg", description: "Labs, Khan Academy" },
    { title: "Academic Support", image: "https://www.wesgreeninternationalschool-sharjah.com/-/media/project/gems/wgp_wesgreen_international_school_sharjah/_generic-content-images/faciltiies-8.jpg", description: "Regular Test Series, Excellence Batch" },
    { title: "Learning Resources", image: "https://www.gemsakinternationalschool.com/-/media/project/gems/akn_al_khaleej_national_school/_generic-content-images/new-facilities-02-08-22/3.jpg", description: "Library, Subject-based Clubs" },
    { title: "Competitions & Events", image: "https://lh3.googleusercontent.com/p/AF1QipO0EdNNFv5a-ufPkAt-rmf_dANgRJwNuvvODfzt=s680-w680-h510", description: "Olympiads & Competitions, Annual Gathering" },
    { title: "Cultural & Social Activities", image: "https://greenwoodhigh.edu.in/wp-content/uploads/2021/03/facilities-sarja-icse-tile.jpg", description: "Assembly, Co-Curricular Activities" },
    { title: "Physical Education", image: "https://www.sunglowschool.in/web_uploads/ch2018-11-05-16-37-34.jpg", description: "Sports, Judo" },
    { title: "Environmental Learning", image: "https://images.unsplash.com/photo-1588075592446-8e95b58e9e5e?w=800&q=80", description: "\"Al Hamra\" Garden, Educational Tours" },
    { title: "Religious Studies", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80", description: "Islamic Environment, Cultural Studies" }
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
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Poppins', sans-serif; }
        .nav-link { position: relative; color: #1f2937; font-weight: 500; font-size: 1rem; padding: 0.5rem 1rem; transition: color 0.3s; }
        .nav-link:hover { color: #d4af37; }
        .nav-link::after { content: ''; position: absolute; width: 0; height: 2px; bottom: -4px; left: 50%; background: #d4af37; transition: all 0.3s; }
        .nav-link:hover::after { width: 100%; left: 0; }
        .hamburger { width: 25px; height: 20px; position: relative; cursor: pointer; }
        .hamburger span { display: block; width: 100%; height: 2px; background: #d4af37; margin: 5px 0; border-radius: 2px; transition: all 0.3s; }
        .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .hamburger.active span:nth-child(2) { opacity: 0; }
        .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(6px, -6px); }
        .hero-overlay { background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%); }
        .card { transition: transform 0.3s, box-shadow 0.3s; }
        .card:hover { transform: scale(1.05); box-shadow: 0 8px 25px rgba(0,0,0,0.2); }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate { animation: fadeInUp 0.8s ease-out forwards; }
      `}</style>

      {/* Fixed Navbar - Exact Royal Dubai Style */}
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
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={menuOpen ? 'active' : ''}></span>
            <span className={menuOpen ? 'active' : ''}></span>
            <span className={menuOpen ? 'active' : ''}></span>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      {menuOpen && (
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
          onClick={() => setMenuOpen(false)}
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

      {/* Hero Slider - Exact Royal Dubai Style */}
      <section className="hero-slider" style={{ position: 'relative', height: '80vh' }}>
        <div className="slide active" style={{ position: 'absolute', width: '100%', height: '100%' }}>
          <iframe
            src="https://www.youtube.com/embed/AhGFGa-3FU8?autoplay=1&mute=1&loop=1&playlist=AhGFGa-3FU8&controls=0&modestbranding=1"
            title="Hero Video"
            frameBorder="0"
            allowFullScreen
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div className="hero-overlay" style={{ position: 'absolute', top: '50%', left: '5%', transform: 'translateY(-50%)', color: 'white', background: 'rgba(0,0,0,0.5)', padding: '2rem', borderRadius: '10px', maxWidth: '50%' }}>
            <h1 style={{ fontSize: '2.5rem', margin: 0, color: 'white' }}>ALIRFAN RESIDENTIAL SCHOOL</h1>
            <p style={{ fontSize: '1.2rem', color: 'white' }}>Unlocking Knowledge, Inspiring Growth</p>
            <p style={{ fontSize: '1rem', color: 'white' }}>Empower your child with a dynamic and engaging learning environment that fosters creativity and critical thinking.</p>
          </div>
        </div>
      </section>

      {/* About Section - Exact Royal Dubai Style */}
      <section style={{ padding: '4rem 5%', background: 'white' }}>
        <h2 style={{ color: '#d4af37', textAlign: 'center', fontSize: '2.5rem' }}>The Al-Irfan Standard in Education</h2>
        <p style={{ maxWidth: '800px', margin: '1rem auto', textAlign: 'center', fontSize: '1.1rem', lineHeight: '1.6' }}>
          At Al-Irfan Residential School, we provide a nurturing environment with academic rigour and high performance. The commitment, vision, and dedication that shape our school's journey.
        </p>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="/about" style={{ color: '#d4af37', textDecoration: 'underline', fontSize: '1.1rem' }}>Read More about Al-Irfan</a>
        </div>
      </section>

      {/* Facilities Grid - Exact Royal Dubai Style */}
      <section style={{ padding: '4rem 5%', background: '#f9f9f9' }}>
        <h2 style={{ color: '#d4af37', textAlign: 'center', fontSize: '2.5rem' }}>Facilities</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          {facilities.map((facility, i) => (
            <div key={i} className="card" style={{ background: 'white', padding: '1.5rem', textAlign: 'center', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <img src={facility.image} alt={facility.title} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }} />
              <h3 style={{ color: '#d4af37' }}>{facility.title}</h3>
              <p style={{ fontSize: '0.9rem' }}>{facility.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Carousel - Exact Royal Dubai Style */}
      <section style={{ padding: '4rem 5%', background: 'white' }}>
        <h2 style={{ color: '#d4af37', textAlign: 'center', fontSize: '2.5rem' }}>Hear from the Al-Irfan Community</h2>
        <div className="testimonial-slider" style={{ marginTop: '2rem', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ padding: '1rem', textAlign: 'center', fontStyle: 'italic', fontSize: '1.1rem' }}>
            <p>{testimonials[currentTestimonial].quote}</p>
            <strong style={{ color: '#d4af37', display: 'block', marginTop: '1rem' }}>{testimonials[currentTestimonial].author}</strong>
          </div>
        </div>
      </section>

      {/* Gallery - Exact Royal Dubai Style */}
      <section style={{ padding: '4rem 5%', background: '#f9f9f9' }}>
        <h2 style={{ color: '#d4af37', textAlign: 'center', fontSize: '2.5rem' }}>Gallery</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
          {facilities.slice(0, 6).map((facility, i) => (
            <img key={i} src={facility.image} alt={facility.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
          ))}
        </div>
      </section>

      {/* Contact - Exact Royal Dubai Style */}
      <section id="enquiry" style={{ padding: '4rem 5%', background: 'white' }}>
        <h2 style={{ color: '#d4af37', textAlign: 'center', fontSize: '2.5rem' }}>Contact Us</h2>
        <div style={{ maxWidth: '800px', margin: '2rem auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <h3 style={{ color: '#d4af37' }}>Admission Inquiries</h3>
            <p><i className="fas fa-phone mr-2"></i>+91 9860 579 809</p>
            <p><i className="fas fa-envelope mr-2"></i>mail@alirfanschool.com</p>
            <p>+91 8975 613 666 • +91 9923 203 933</p>
          </div>
          <div>
            <h3 style={{ color: '#d4af37' }}>School Hours & Location</h3>
            <p>Every Day: 9:00 AM to 3:00 PM</p>
            <p><i className="fas fa-map-marker-alt mr-2"></i>Khultabad, Maharashtra (IN)</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="enquiry.aspx" className="btn-gold">Submit Enquiry Now</a>
        </div>
      </section>

      <footer style={{ background: '#0a1a2f', color: 'white', padding: '3rem 5%', textAlign: 'center' }}>
        <p>&copy; 2025 Al-Irfan Residential School. All rights reserved.</p>
      </footer>
    </div>
  );
}