
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import EventDetails from '../components/EventDetails';
import About from '../components/About';
import Speakers from '../components/Speakers';
import Partners from '../components/Partners';
import Location from '../components/Location';
import Footer from '../components/Footer';
function TedxAtria() {
    return (
      <div className="TedxAtria">
        <Navbar />
        
        <Hero/>
        <EventDetails/>
        <About />
        <Speakers />
        <Partners/>
        <Location/>
        <Footer/>
      </div>
    );
  }
  
  export default TedxAtria;