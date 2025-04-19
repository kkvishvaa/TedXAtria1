import React, { useEffect, useRef } from 'react';
import '../styles/Speakers.css'; 
import { FaYoutube } from "react-icons/fa";
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
        { image: sreenivasaImage, name: "Dr. T N Sreenivasa", frontDesc: "Registrar, VTU", backDesc: "Dr. T N Sreenivasa is an AI expert working on ethical AI development.", youtubeLink:"https://www.youtube.com/watch?v=rtKvNtaiYb4" },
        { image: Kathi, name: "Mr. Kathiravan Pethi", frontDesc: "", backDesc: "Guinness World Record Holder, Storyteller & Public Speaking Coach.", youtubeLink:"https://www.youtube.com/watch?v=swdeo1yit6I" },
        { image: Anucheth, name: "Mr. M N Anucheth", frontDesc: "", backDesc: "Jt. Commissioner of Police, Bangalore Traffic Police", youtubeLink:"https://www.youtube.com/watch?v=6KObrgSlKKg" },
        { image: Suchitra, name: "Dr. Suchitra Kaul Misra", frontDesc: "", backDesc: "Corporate Wellness Specialist", youtubeLink:"https://www.youtube.com/watch?v=ZzTTnKgPaMA" },
        { image: Sapthami, name: "Ms. Sapthami Gowda", frontDesc: "", backDesc: "Actress", youtubeLink:"https://www.youtube.com/watch?v=1UP4FthErWA" },
        { image: Kaushik, name: "Mr. Kaushik Raju", frontDesc: "", backDesc: "Technical Director, Atria Group", youtubeLink:"https://www.youtube.com/watch?v=9dZYFmHMmA4" },
        { image: Sunil, name: "Lt. Col. Sunil Kumar M V", frontDesc: "", backDesc: "Indian Army Veteran", youtubeLink:"https://www.youtube.com/results?search_query=TedxAtria" },
        { image: Raghu, name: "Dr B B Raghunath", frontDesc: "", backDesc: "The Baby shower doctor, Humanist, Kargil Veteran", youtubeLink:"https://www.youtube.com/results?search_query=TedxAtria" },
        { image: Prithvi, name: "RJ Prithvi", frontDesc: "", backDesc: "Radio Jockey, Emcee, Trainer, Actor", youtubeLink:"https://www.youtube.com/watch?v=zTKfGFXfCdI" },
        { image: Yash, name: "Dr. Yashwanth A R", frontDesc: "", backDesc: "Founder, Truerippers Esports", youtubeLink:"https://www.youtube.com/watch?v=-PunCDQejjw" },
        { image: Neetu, name: "Ms. Neetu Mehta", frontDesc: "", backDesc: "DEI Advocate, Talent strategist", youtubeLink:"https://www.youtube.com/watch?v=G1pyHRPuO10" },
        { image: Pranav, name: "Mr. Pranav Savla", frontDesc: "", backDesc: "Student, Coder", youtubeLink:"https://www.youtube.com/watch?v=lpxv1z-Sdu8" },
        { image: Rohit, name: "Mr. Rohit Dey", frontDesc: "", backDesc: "UAV Scientist, Researcher, Innovator & Entrepreneur, Speaker", youtubeLink:"https://www.youtube.com/watch?v=TGFSZlyiTn4" }
    ];

    const cardRefs = useRef([]);

    useEffect(() => {
       
        if (window.innerWidth < 768) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.intersectionRatio >= 0.95) {
                            entry.target.classList.add("flip-on-scroll");
                        } else {
                            entry.target.classList.remove("flip-on-scroll");
                        }
                    });
                },
                { threshold: 0.95 }
            );

            cardRefs.current.forEach(card => {
                if (card) observer.observe(card);
            });

            return () => {
                cardRefs.current.forEach(card => {
                    if (card) observer.unobserve(card);
                });
            };
        }
    }, []);
    return (
        <div className="container py-5" id='speakers'>
            <h2 className="text-center mb-4">Our Honorable Speakers</h2>
            <p className="text-center">Presented by TEDxAtria IT</p>

            <div className="row justify-content-center">
                {speakers.map((speaker, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="flip-card" ref={(el) => (cardRefs.current[index] = el)}>
                            <div className="flip-card-inner">

                                <div className="flip-card-front text-center p-3">
                                    <div className="image-container mb-3 mx-auto">
                                        <img src={speaker.image} alt={speaker.name} className="img-fluid" loading="lazy"/>
                                    </div>
                                    <h4 className="mb-2">{speaker.name}</h4>
                                    {speaker.frontDesc && <p className="m-0">{speaker.frontDesc}</p>}
                                </div>

                                <div className="flip-card-back text-center p-3">
                                    <h4>{speaker.name}</h4>
                                    <p>{speaker.backDesc}</p>
                                    <a href={speaker.youtubeLink} target="_blank" rel="noopener noreferrer" className="youtube-icon">
                                        <FaYoutube size={30} />
                                    </a>
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
