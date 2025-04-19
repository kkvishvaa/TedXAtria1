import AboutAtriaIT from "../components/AboutAtriaIT";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer2";
const About = () => {
  return (<>
  <Navbar showSpeakers={false} showPartners={false}/>
  <AboutAtriaIT />
  <Footer/>
  </>);
};

export default About;
