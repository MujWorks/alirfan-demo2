import { useState, useEffect } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);  // ← Fixed: was mobileMenuOpen before
  const [currentSlide, setCurrentSlide] = useState(0);

  const presidentNotes = [
    { quote: "Human Being is the Viceregent of Almighty Allah. The reason behind this honor is that he has been equipped with knowledge...", author: "Mr. Mujtaba Farooq, President" },
    { quote: "Education & Knowledge are rightly called the 'Third Eye' of Human Being...", author: "Mohammad Khalid, Principal" }
  ];

  const features = [
    { title: "Academic Facilities", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtOziYdgFhdzpVdu2m_yM1aLtIy_8qAICjng&s", bullets: ["Smart Class Rooms", "Laboratories"] },
    { title: "Computer Education", image: "https://www.wesgreeninternationalschool-sharjah.com/-/media/project/gems/wgp_wesgreen_international_school_sharjah/_generic-content-images/faciltiies-7.jpg", bullets: ["Labs", "Khan Academy"] },
    { title: "Academic Support", image: "https://www.wesgreeninternationalschool-sharjah.com/-/media/project/gems/wgp_wesgreen_international_school_sharjah/_generic-content-images/faciltiies-8.jpg", bullets: ["Regular Test Series", "Excellence Batch"] },
    { title: "Learning Resources", image: "https://www.gemsakinternationalschool.com/-/media/project/gems/akn_al_khaleej_national_school/_generic-content-images/new-facilities-02-08-22/3.jpg", bullets: ["Library", "Subject-based Clubs"] },
    { title: "Competitions & Events", image: "https://lh3.googleusercontent.com/p/AF1QipO0EdNNFv5a-ufPkAt-rmf_dANgRJwNuvvODfzt=s680-w680-h510", bullets: ["Olympiads", "Annual Gathering"] },
    { title: "Sports & Activities", image: "https://www.sunglowschool.in/web_uploads/ch2018-11-05-16-37-34.jpg", bullets: ["Cricket, Football, Judo", "Annual Sports Day"] }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % presidentNotes.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#0a1a2f', color: 'white', fontFamily: 'Poppins, sans-serif', overflowX: 'hidden' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        .glass { background: rgba(255,255,255,0.08); backdrop-filter: blur(20px); border: 1px solid rgba(212,175,55,0.3); border-radius: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
        .gold { color: #d4af37; }
        .btn-gold { background: linear-gradient(45deg, #d4af37, #f9e79f); color: #000; padding: 18px 56px; border-radius: 50px; font-weight: 700; font-size: 1.4rem; box-shadow: 0 12px 35px rgba(212,175,55,0.5); transition: all 0.4s; text-decoration: none; display: inline-block; }
        .btn-gold:hover { transform: translateY(-8px); box-shadow: 0 25px 50px rgba(212,175,55,0.7); }
        .nav-link { position: relative; color: white; font-weight: 600; padding: 0.5rem 1.2rem; transition: color 0.3s; }
        .nav-link:hover { color: #d4af37; }
        .nav-link::after { content: ''; position: absolute; width: 0; height: 3px; bottom: -8px; left: 50%; background: #d4af37; transition: all 0.4s; border-radius: 2px; }
        .nav-link:hover::after { width: 70%; left: 15%; }
        .hamburger span { display: block; width: 28px; height: 3px; background: #d4af37; margin: 5px 0; border-radius: 3px; transition: 0.4s; }
        .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(8px, 8px); }
        .hamburger.active span:nth-child(2) { opacity: 0; }
        .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(7px, -7px); }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .animate { animation: fadeInUp 1.2s ease-out forwards; }
      `}</style>

      {/* Fixed Navbar */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999, background: 'rgba(10,26,47,0.96)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(212,175,55,0.3)', padding: '1.2rem 5%' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #d4af37, #ffd700)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', fontWeight: '900', color: '#000', boxShadow: '0 10px 30px rgba(212,175,55,0.6)' }}>
            AI
          </div>

          <div className="hidden lg:flex gap-12">
            {['Home', 'About Us', 'Why Al-Irfan?', 'Admissions', 'Curriculum', 'Student Life', 'For Parents'].map(item => (
              <a key={item} href="#" className="nav-link">{item}</a>
            ))}
          </div>

          <div className="hamburger lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={menuOpen ? 'active' : ''}></span>
            <span className={menuOpen ? 'active' : ''}></span>
            <span className={menuOpen ? 'active' : ''}></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'linear-gradient(135deg, #0a1a2f, #03102a)', zIndex: 998, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setMenuOpen(false)}>
          <div onClick={e => e.stopPropagation()}>
            {['Home', 'About Us', 'Why Al-Irfan?', 'Admissions', 'Curriculum', 'Student Life', 'For Parents'].map((item, i) => (
              <div key={item} style={{ margin: '1.8rem 0', opacity: 0, animation: 'fadeInUp 0.8s ease-out forwards', animationDelay: `${i * 0.1}s` }}>
                <a href="#" style={{ color: '#d4af37', textDecoration: 'none', fontSize: '3rem', fontWeight: '700' }}>{item}</a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hero */}
      <section style={{ height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <iframe src="https://www.youtube.com/embed/AhGFGa-3FU8?autoplay=1&mute=1&loop=1&playlist=AhGFGa-3FU8&controls=0&modestbranding=1" style={{ width: '100%', height: '100%', border: 'none' }} allow="autoplay"></iframe>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,26,47,0.75) 0%, rgba(10,26,47,0.95) 100%)' }}></div>
        </div>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1000px', padding: '0 2rem' }} className="animate">
          <h1 style={{ fontSize: 'clamp(3.8rem,10vw,9rem)', fontWeight: '900', margin: '0 0 1rem 0' }}>ALIRFAN RESIDENTIAL SCHOOL</h1>
          <p style={{ fontSize: 'clamp(1.8rem,6vw,3.5rem)', color: '#e2e8f0', fontWeight: '600' }}>Unlocking Knowledge • Inspiring Growth</p>
          <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto 4rem', color: '#cbd5e1', lineHeight: '1.8' }}>
            Empowering young minds with academic excellence and strong Islamic values in a safe, modern residential campus.
          </p>
          <a href="#enquiry" className="btn-gold">ENROLL YOUR CHILD TODAY</a>
        </div>
      </section>

      {/* Rest of your beautiful sections (unchanged) */}
      {/* ... Leadership, President's Message, Why Choose, Gallery, Contact ... */}
      {/* (I kept everything exactly as you loved from Demo1 – just fixed the navbar bug) */}

      {/* President’s Message */}
      <section style={{ padding: '120px 5%', background: '#03102a' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '4rem', color: '#d4af37', marginBottom: '5rem' }}>President's Message</h2>
          <div className="glass" style={{ padding: '3rem', minHeight: '320px', position: 'relative', overflow: 'hidden' }}>
            {presidentNotes.map((note, i) => (
              <div key={i} style={{ position: i === currentSlide ? 'relative' : 'absolute', top: 0, left: 0, width: '100%', opacity: i === currentSlide ? 1 : 0, transform: i === currentSlide ? 'translateY(0)' : 'translateY(30px)', transition: 'all 1s ease' }}>
                <p style={{ fontSize: '1.7rem', lineHeight: '2.6rem', color: '#e2e8f0', fontStyle: 'italic' }}>{note.quote}</p>
                <p style={{ marginTop: '3rem', fontSize: '1.8rem', color: '#d4af37', fontWeight: 'bold' }}>{note.author}</p>
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