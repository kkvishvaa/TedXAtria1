import PSK from "../assets/PSK.jpeg";
import GloryBrand from "../assets/GloryBrand.jpeg";
import bondasoup from "../assets/bondasoup.jpeg";
import ExploResearch from "../assets/ExploResearch.jpeg";
import '../styles/Partners.css';

const Partners = () => {
  const sponsors = [
    { id: 1, name: 'Sponsor 1', logo: PSK },
    { id: 2, name: 'Sponsor 2', logo: GloryBrand },
    { id: 3, name: 'Sponsor 3', logo: bondasoup },
    { id: 4, name: 'Sponsor 4', logo: ExploResearch },
    
  ];

  return (
    <section className="partners-section py-5" id="partners">
      <div className="container">
        <h2 className="text-center mb-4">Partnered Brands - 2024</h2>
        <div className="row justify-content-center g-4">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="col-6 col-md-4 col-lg-3">
              <div className="sponsor-card">
             
                  <div className="logo-container">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className="sponsor-logo"
                    />
                  </div>
                  <div className="sponsor-overlay">
                    <span className="sponsor-name">{sponsor.name}</span>
                  </div>
            
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;