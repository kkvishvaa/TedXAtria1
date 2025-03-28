import "bootstrap/dist/css/bootstrap.min.css"; 
import "../styles/AtriaIT.css"; 
import atrialogo from "../assets/atrialogo.png"; 
import auglass from "../assets/auglass.avif";
import pldesign from "../assets/Planet.png";
import "../components/TeamSection";
import TeamSection from "../components/TeamSection";
import Footer from "./Footer2";
const AboutAtriaIT = () => {
  return (
    <div className="atria-container">
      {/* Logo */}
      <img src={atrialogo} alt="College Logo" className="atria-logo" />

      {/* Title */}
      <h2 className="atria-title">About Atria IT</h2>

      {/* Content Section */}
      <div className="atria-content">
        <h4 className="atria-subtitle">Atria Institute of Technology (AIT)</h4>
        <ul className="atria-list">
          <li>Atria Institute of Technology was established in the year 2000 and is affiliated to VTU.</li>
          <li>It is located in the heart of Bengaluru with a strong focus on research, alumni engagement, and industry interaction.</li>
          <li>The Institution is autonomous and is accredited with NAAC ‘A++’. Many of the Departments are NBA accredited as well.</li>
          <li>The Institution strives to impart quality education, promoting academic excellence and competence in students to meet the changing needs of society.</li>
        </ul>
      </div>

      {/* About Atria Image */}
      <img src={auglass} alt="About Atria IT" className="atria-about-image" />

      {/* About INFINITE REALMS Section */}
      <div className="infinite-realms-container">
        <h2 className="infinite-realms-title">About INFINITE REALMS</h2>
        <p className="infinite-realms-text">
          The theme <strong>‘INFINITE REALMS’</strong> at <strong>TEDxAtria IT</strong> explores limitless possibilities in fields like science, technology, and media.
          Inspired by Carl Jung’s views, it focuses on the evolution of minds adapting to complex forms.
          <strong>‘INFINITE REALMS UNVEILED’</strong> invites ideas from art, science, and business to inspire transformation,
          sharing thought-provoking stories that drive societal and business change.
        </p>
        <p className="infinite-realms-text">
          <strong>TEDxAtria IT</strong>, part of Atria Institute of Technology, aims to provide a platform for sharing diverse ideas and promoting inclusivity.
          The theme, <strong>‘Infinite Realms Unveiled’</strong>, seeks to inspire a wide audience, including students, teachers, professionals, entrepreneurs, and more,
          with insights from fields such as technology, education, entertainment, media, and society.
        </p>
      </div>

      {/* Planet Design Image */}
      <img src={pldesign} alt="About Atria IT" className="atria-pl-image" />

      {/* TEDx Event Description */}
      <div className="tedx-event-container">
        <p className="tedx-event-text">
          <strong>TEDxAtria</strong> will host a remarkable lineup of speakers on <strong>9th November 2024</strong>,
          sharing stories and insights from diverse fields. These speakers will explore who they are, what they do, and why,
          unlocking different aspects of the human mind. The event aims to inspire wonder, introspection, and personal growth
          through a blend of experiences and profound ideas.
        </p>
      </div>

      <TeamSection/>
    
    </div>
  );
};

export default AboutAtriaIT;
