import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/About.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="about-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12" data-aos="fade-up">
            <h1 className="mb-4">
              TEDxAtria IT is an independently organized <br className="d-none d-md-block" /> 
              TEDx event hosted at Atria Institute of <br className="d-none d-md-block" /> 
              Technology, Bengaluru
            </h1>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="300">
              <p>
                Our mission is to inspire and connect individuals through powerful ideas. 
                Join us for a day of thought-provoking talks, engaging discussions, and 
                unforgettable experiences. Discover the latest innovations, explore 
                diverse perspectives, and ignite your passion for learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
