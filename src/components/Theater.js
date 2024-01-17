import React from 'react';
import { Card } from 'react-bootstrap';


import SliderImage1 from "../images/Light+Slider.jpg"
import SliderImage2 from "../images/lesmiserables.jpg";
import SliderImage3 from "../images/SHARL.jpg"
import SliderImage4 from "../images/CAIROKEE-CONCERT---Website-slider-(1).jpg"
import SliderImage5 from "../images/FOUAD.jpg"

import SliderImage7 from "../images/Cairo+Steps+Slider.jpg"
import SliderImage8 from "../images/Website+slider.jpg"
import SliderImage9 from "../images/KAMAN.jpg"
import SliderImage10 from "../images/NEW-ZOBIDA.jpg"
import SliderImage11 from "../images/RAZ3-SLIDER.jpg"
import SliderImage12 from "../images/jim-slider.jpg"
import SliderImage13 from "../images/eshtry.jpg"
import SliderImage14 from "../images/Website+Slider_v01.jpg"
import SliderImage15 from "../images/med.jpg"


const theaters = [
  {
    id: 1,
    name: "Sound & Light Show",
    description: "The Great Pyramids of Giza, Giza",
    date:"29/8/2023",
    time:"19:45",
    image: SliderImage1, 
  },
  {
    id: 2,
    name: "Les Miserables",
    description: "Arkan Plaza, Giza",
    date:"30/8/2023",
    time:"20:45",
    image: SliderImage2, 
  },
  {
    id: 3,
    name: "Charlie",
    description: "Movenpick Hotel, Giza",
    date:"8/9/2023",
    time:"23:45",
    image: SliderImage3, 
  },
  {
    id: 4,
    name: "cairokee",
    description: "Al-Ajami Alexandria",
    date:"15/9/2023",
    time:"20:45",
    image: SliderImage4, 
  },
  {
    id: 5,
    name: "Fouad & Mounib at Theatro Arkan",
    description: " Arkan Plaza, Giza",
    date:"7/9/2023",
    time:"15:45",
    image: SliderImage5, 
  },
  {
    id: 6,
    name: "Cairo Steps Concert",
    description: "MUST THEATER, 6th of October",
    date:"18/8/2023",
    time:"20:45",
    image: SliderImage7, 
  },
  {
    id: 7,
    name: "The Elite Standup Comedy Vol. 9",
    description: "Arkan Plaza, Giza",
    date:"26/8/2023",
    time:"18:45",
    image: SliderImage8, 
  },
  {
    id: 8,
    name: "Eshteri Menny",
    description: "Rawabet Art Space, Cairo",
    date:"24/8/2023",
    time:"20:45",
    image: SliderImage9, 
  },
  {
    id: 9,
    name: "Zobaida Behind The Horizon Line",
    description: "Rawabet Art Space, Cairo",
    date:"10/10/2023",
    time:"20:45",
    image: SliderImage10, 
  },
  {
    id: 10,
    name: "Raz3 el-gomhour live",
    description: "Arkan Plaza, Giza",
    date:"20/9/2023",
    time:"20:45",
    image: SliderImage11, 
  },
  {
    id: 11,
    name: "Jim Gaffigan",
    description: "The Marquee-Cairo Festival City.",
    date:"16/11/2023",
    time:"20:45",
    image: SliderImage12, 
  },
  {
    id: 12,
    name: "Eshteri Menny Experience",
    description: "5 Hussein El Memari Street, From Talaat Harb,Cairo Downtown.",
    date:"25/8/2023",
    time:"7:30",
    image: SliderImage13, 
  },
  {
    id: 13,
    name: "Animatex 4th Edition",
    description: "AUC Tahrir Cultural Center Tahrir Square,Cairo Downtown.",
    date:"9/9/2023",
    time:"9:45",
    image: SliderImage14, 
  },
  {
    id: 14,
    name: "Medfest Eg 5th Edition - Stigma from 14th to 17th of Sept",
    description: "AUC Tahrir Cultural Center Tahrir Square,Cairo Downtown.",
    date:"17/9/2023",
    time:"13:45",
    image: SliderImage15, 
  },


 
];

function Theater() {
  

  return (
    <div className="front container mt-5">
      <div className="row">
        {theaters.map(theater => (
          <div className="col-md-12 mb-4" key={theater.id}>
            <div className="card checkered-card row d-flex flex-row align-items-center">
              <div className="checkered-pattern col-md-6  ">
                <Card.Img variant="top" src={theater.image} alt={theater.name} />
              </div>
              <div className="card-body col-md-5 mx-2 ">
                <h5 className="card-title text-warning">{theater.name}</h5>
                <h6 className="card-title">{theater.date}</h6>
                <h6 className="card-title">{theater.time}</h6>
                <p className="card-text">{theater.description}</p>
                <a href={`/theater/${theater.id}`} className="btn btn-dark">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Theater;

