import '../styles/Location.css'; 

const Location = () => {
  return (
    <div className="container">
      
      <h1 className="mt-3">Location</h1>

      <div className="map-container">
        <iframe 
          title="Atria Institute of Technology Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0884380167247!2d77.591333474874!3d13.032388314836342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17635fcbbe0b%3A0xa7d848a52e9f9a40!2sAtria%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1710240333085"
          allowFullScreen
          loading="lazy"
        />
      </div>

      
      <p className="mt-3 text-center locfont">
        Seminar Hall 1, ATRIA INSTITUTE OF TECHNOLOGY, <br />
        Anandnagar, Hebbal, Bengaluru, Karnataka-560024
      </p>
    </div>
  );
};

export default Location;