import React, { useEffect, useState } from "react";
import "../portfolio.css";

const Portfolio = () => {
  const [projectsOpen, setProjectsOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js";
    script.onload = () => {
      // eslint-disable-next-line no-undef
      new window.Typed("#element", {
        strings: [
          "Frontend developer",
          "Graphic designer",
          "Gamer",
          "Problem Solver.",
        ],
        typeSpeed: 50,
      });
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest('.projects-dropdown')) {
        setProjectsOpen(false);
      }
    };
    if (projectsOpen) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [projectsOpen]);
  

  return (
    <div className="portfolio-bg">
      <header>
        <nav>
          <div className="left">Gourav's Portfolio</div>
          <div className="right">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li className="contact-dropdown">
                  
            <ul className="dropdown-content">
                  <li><strong>Phone:</strong> <a href="tel:8809210035">8809210035</a></li>
                  <li><strong>Email:</strong> <a href="mailto:barnwalgourav547@gmail.com">barnwalgourav547@gmail.com</a></li>
                </ul>
              </li>
              <li>
                <a href="https://instagram.com/motivation_hacker777" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                  <img src="/src/assets/insta.png" alt="Instagram" style={{ width: '40px', height: '40px', marginRight: '8px' }} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section className="firstsection">
          <div className="leftsection">
            <div className="intro-textbox">
              Hi, My name is <span className="purple">Gourav</span>, A
              <span id="element"></span>
            </div>
            <div className="buttons" >
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a href="/src/assets/Gourav_Barnwal_Resume_OnePage.pdf" className="btn mx-3 btn-wide" download>Download Resume</a>
                <a href="https://github.com/GouravBarnwal" className="btn mx-3 btn-wide" target="_blank" rel="noopener noreferrer">Visit Github</a>
                <a href="/projects" className="btn mx-3 btn-wide" target="_blank" rel="noopener noreferrer"> View Projects</a>
              </div>
            </div>
          </div>
          <div className="rightsection">
            <img className="grv-img" src="/src/assets/for portfolio.jpg" alt="Gourav" />
          </div>
        </section>
        <hr style={{ border: 0, background: "#9c97f1", height: "0.4px", margin: "40px 84px" }} />
        <section className="secondSection">
          <div className="workexp-heading-box">
            <h1>Work Experience</h1>
          </div>
          <div className="workexp-note-box">
            <p>Here are some highlights of my professional and technical journey so far. Each experience has contributed to my growth as a developer and problem solver.</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <img src="/src/assets/dsa.webp" alt="DSA" />
              </div>
              <div className="timeline-content">
                <h3>DSA with Java <span className="timeline-date">2021</span></h3>
                <p>Learnt Java in my 1st year and worked with DSA, solving questions on HackerRank and building a strong foundation in algorithms and problem-solving.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <img src="/src/assets/frontend.jpeg" alt="Frontend" />
              </div>
              <div className="timeline-content">
                <h3>Frontend Developer <span className="timeline-date">2022</span></h3>
                <p>Developed multiple projects using HTML, CSS, and JavaScript. Gained hands-on experience in responsive design and modern web development practices.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <img src="/src/assets/python img.jpeg" alt="Python" />
              </div>
              <div className="timeline-content">
                <h3>Python Programming <span className="timeline-date">2022</span></h3>
                <p>Acquired strong Python fundamentals, focusing on core concepts and problem-solving without relying on external libraries.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <img src="/src/assets/internship.webp" alt="Internship" />
              </div>
              <div className="timeline-content">
                <h3>Internship at CODETECH <span className="timeline-date">June 2024 - July 2024</span></h3>
                <p>Completed a web development internship in Ranchi, working on real-world projects and collaborating with a professional team.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <img src="/src/assets/Communication-Skills.png" alt="Communication Skills" />
              </div>
              <div className="timeline-content">
                <h3>Communication & Problem Solving <span className="timeline-date">Ongoing</span></h3>
                <p>Excel at teamwork, communication, and analytical thinking. Continuously improving these skills for future challenges.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer">
          <div className="footer-first">
            <h2>Gourav's Developer Portfolio</h2>
          </div>
        </div>
        <div className="footer-rights">
          Copyright &#169; gouravsportfolio.com  |  All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Portfolio; 