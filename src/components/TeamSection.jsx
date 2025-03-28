import React from "react";
import Neena from "../assets/Neena.jpeg";
import Rashmi from "../assets/Rashmi.jpeg";
import Anoop from "../assets/Anoop.jpeg";
import Mehul from "../assets/Mehul.jpeg";
import Somdipto from "../assets/Somdipto.jpeg";
import Gaurav from "../assets/Gaurav.png";
import Aadish from "../assets/Aadish.jpeg";
import Arunim from "../assets/Arunim.jpeg";
import Prakash from "../assets/Prakash.jpeg";
import Jitin from "../assets/Jitin.jpeg";
import "../styles/TeamSection.css";

const teamMembers = [
  {
    name: "Dr. Neena Prasad",
    role: "Organiser",
    image: Neena,
  },
  {
    name: "Dr. Rashmi Singh Roy",
    role: "Co-Organiser",
    image: Rashmi,
  },
  {
    name: "Anoop C Kulkarni",
    role: "Executive Producer",
    image: Anoop, 
  },
  {
    name: "Mehul",
    role: "Event Management Lead",
    image: Mehul,
  },
  {
    name: "Somdipto",
    role: "Web & design Lead",
    image: Somdipto,
  },
  {
    name: "Gaurav V Navada",
    role: "Media and Social Media Lead",
    image: Gaurav,
  },
  {
    name: "Aadish",
    role: "Hospitality",
    image: Aadish,
  },
  {
    name: "Arunim",
    role: "Ticketing Lead",
    image: Arunim,
  },
  {
    name: "Jay Prakash",
    role: "Marketing Lead",
    image: Prakash,
  },
  {
    name: "Jitin Raju",
    role: "Design Head",
    image: Jitin,
  },
];

const TeamSection = () => {
  return (
    <div className="team-section">
      <h2 className="team-title">Meet the Team</h2>
      <p className="team-subtitle">"The minds behind the magic."</p>

      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
