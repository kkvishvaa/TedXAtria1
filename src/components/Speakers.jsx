import React from 'react';
import '../styles/Speakers.css'; 
import sreenivasaImage from "../assets/Mr.Sreenivasa.avif";
import Kaushik from "../assets/Kaushik.avif";
import Neetu from "../assets/Neetu.avif";
import Anucheth from "../assets/Mr Anucheth.avif";
import Kathi from "../assets/Mr.Kathi.avif";
import Pranav from "../assets/Pranav.avif";
import Prithvi from "../assets/Prithvi.avif";
import Raghu from "../assets/Raghunath.avif";
import Sapthami from "../assets/Sapthami.jpg";
import Suchitra from "../assets/Suchitra.jpg";
import Sunil from "../assets/Sunil.jpg";
import Yash from "../assets/Yash.avif";
import Rohit from "../assets/Rohit.avif";

const Speakers = () => {
    const speakers = [
        {
            image: sreenivasaImage,
            name: "Dr. T N Sreenivasa",
            frontDesc: "Registrar, VTU",
            backDesc: "Dr. T N Sreenivasa is an AI expert working on ethical AI development."
        },
        {
            image: Kathi,
            name: "Mr. Kathiravan Pethi",
            frontDesc: "",
            backDesc: "Guinness World Record Holder, Storyteller & Public Speaking Coach."
        },
        {
            image: Anucheth,
            name: "Mr. M N Anucheth",
            frontDesc: "",
            backDesc: "Jt. Commissioner of Police, Bangalore Traffic Police"
        },
        {
            image: Suchitra,
            name: "Dr. Suchitra Kaul Misra",
            frontDesc: "",
            backDesc: "Corporate Wellness Specialist"
        },
        {
            image: Sapthami,
            name: "Ms. Sapthami Gowda",
            frontDesc: "",
            backDesc: "Actress"
        },
        {
            image: Kaushik,
            name: "Mr. Kaushik Raju",
            frontDesc: "",
            backDesc: "Technical Director, Atria Group"
        },
        {
            image: Sunil,
            name: "Lt. Col. Sunil Kumar M V",
            frontDesc: "",
            backDesc: "Indian Army Veteran"
        },
        {
            image: Raghu,
            name: "Dr B B Raghunath",
            frontDesc: "",
            backDesc: "The Baby shower doctor, Humanist, Kargil Veteran"
        },
        {
            image: Prithvi,
            name: "RJ Prithvi",
            frontDesc: "",
            backDesc: "Radio Jockey, Emcee, Trainer, Actor"
        },
        {
            image: Yash,
            name: "Dr. Yashwanth A R",
            frontDesc: "",
            backDesc: "Founder, Truerippers Esports"
        },
        {
            image: Neetu,
            name: "Ms. Neetu Mehta",
            frontDesc: "",
            backDesc: "DEI Advocate, Talent strategist"
        },
        {
            image: Pranav,
            name: "Mr. Pranav Savla",
            frontDesc: "",
            backDesc: "Student, Coder"
        },
        {
            image: Rohit,
            name: "Mr. Rohit Dey",
            frontDesc: "",
            backDesc: "UAV Scientist, Researcher, Innovator & Entrepreneur, Speaker"
        }
    ];

    return (
        <div className="container py-5 " id='speakers'>
            <h2 className="text-center mb-4">Our Honorable Speakers</h2>
            <p className="text-center">Presented by TEDxAtria IT</p>

            <div className="row justify-content-center">
                {speakers.map((speaker, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="flip-card">
                            <div className="flip-card-inner">

                                <div className="flip-card-front text-center p-3">
                                    <div className="image-container mb-3 mx-auto" style={{ width: '150px', height: '150px', overflow: 'hidden' }}>
                                        <img
                                            src={speaker.image}
                                            alt={speaker.name}
                                            className="img-fluid"
                                        />
                                    </div>
                                    <h4 className="mb-2">{speaker.name}</h4>
                                    {speaker.frontDesc && <p className="m-0">{speaker.frontDesc}</p>}
                                </div>

                                <div className="flip-card-back text-center p-3">
                                    <h4>{speaker.name}</h4>
                                    <p>{speaker.backDesc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Speakers;