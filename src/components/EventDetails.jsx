import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import "../styles/EventDetails.css";

const EventDetails = () => {
  return (
    <div className="container">
      <div className="row justify-content-center g-4">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="event-details-container">
            
            <div className="event-details d-flex flex-column align-items-center text-center p-4">
              <FaMapMarkerAlt className="event-icon venue-icon mb-3" />
              <div>
                <p><strong>Venue:</strong> Seminar Hall 1, Atria Institute of Technology</p>
                <p>Anandnagar, Hebbal, Bengaluru, Karnataka 560024</p>
              </div>
            </div>

          
            <div className="event-details d-flex flex-column align-items-center text-center p-4 mt-4">
              <FaCalendarAlt className="event-icon date-icon mb-3" />
              <div>
                <p><strong>Date:</strong> Saturday, 9th Nov 2024 from 9:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;