import React from 'react';
import { useParams } from 'react-router-dom';
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
import { Link } from 'react-router-dom';
const theaters = [
    {
      id: 1,
      name: "Sound & Light Show",
      description: "The Great Pyramids of Giza, Giza",
      date:"29/8/2023",
      time:"19:45",
      image: SliderImage1, 
      more:"Step through a portal to ancient times, with the memorable Pyramids Sound and Light Show. The Sound Light show pyramids will take you on a journey thousands of years back, bringing the Egyptian legacy back to life! Thousands of years have passed since the pharaohs walked on earth, leaving behind a mystery on how the great pyramids were built. And, we can't just skip the enigmatic sphinx, standing prominently as a guard to protect the Great Pyramids."
    },
    {
      id: 2,
      name: "Les Miserables",
      description: "Arkan Plaza, Giza",
      date:"30/8/2023",
      time:"20:45",
      image: SliderImage2, 
      more:"Fabrica is celebrating 10 years of its Arabic translation of the iconic Musical “Les Miserables” by Dr. Sarah Enany. This is a Musical  theatre production, welcoming back two of Fabrica’s celebrity singers Pop Star Nesma Mahgoub & Hany Mustafa in the lead roles, along with the Fabrica Musical Company singers. Music by Claude-Michel Schoenberg, adapted from the novel by Victor Hugo.  Musical Director Dr. Neveen Allouba. Sets by Dr. Ahmed Ismail.  Staged and directed by Omar Warda and Ahmed Amr."
    },
    {
      id: 3,
      name: "Charlie",
      description: "Movenpick Hotel, Giza",
      date:"8/9/2023",
      time:"23:45",
      image: SliderImage3, 
      more:"A musical play that revolves around the life of one of the most famous cinema actors in the world, “Charlie Chaplin” and the extent of his influence on the international film industry. The play tells his story from its human side, and sheds light on the stages and difficulties that he overcame in his journey and artistic career."
    },
    {
      id: 4,
      name: "cairokee",
      description: "Al-Ajami Alexandria",
      date:"15/9/2023",
      time:"20:45",
      image: SliderImage4, 
      more:"Cairokee at Zed Park!"
    },
    {
      id: 5,
      name: "Fouad & Mounib at Theatro Arkan",
      description: " Arkan Plaza, Giza",
      date:"7/9/2023",
      time:"15:45",
      image: SliderImage5, 
      more:"Theatro Arkan"
    },
    {
      id: 6,
      name: "Cairo Steps Concert",
      description: "MUST THEATER, 6th of October",
      date:"18/8/2023",
      time:"20:45",
      image: SliderImage7, 
      more:"We cordially invite you to immerse yourself in a world of extraordinary talent and captivating melodies at the highly anticipated upcoming event on August 30th. Join us at the prestigious MUST OPERA HOUSE, nestled in the heart of 6 October City, Giza, Egypt, as we proudly present the awe-inspiring Basem Darwisch's Cairo Steps ensemble."
    },
    {
      id: 7,
      name: "The Elite Standup Comedy Vol. 9",
      description: "Arkan Plaza, Giza",
      date:"26/8/2023",
      time:"18:45",
      image: SliderImage8, 
      more:"The Elite Stand Up Comedy are coming West! Vol.9, An all-new material show at Theatro Arkan, 26th of August. Hurry up & get your tickets now!"
    },
    {
      id: 8,
      name: "Eshteri Menny",
      description: "Rawabet Art Space, Cairo",
      date:"24/8/2023",
      time:"20:45",
      image: SliderImage9, 
      more:"The 'Eshtry Menny' live podcast episode is like a lively party where we bring the ongoing podcast discussions to life, involving the audience in an interactive way. Each episode focuses on a chosen topic, shared with the audience, often in a humorous and comedic style. We listen to audience stories, share laughs, and exchange our own experiences. Sometimes, we even have a beloved guest joining the festivities, adding to the fun for both the audience and us."
    },
    {
      id: 9,
      name: "Zobaida Behind The Horizon Line",
      description: "Rawabet Art Space, Cairo",
      date:"10/10/2023",
      time:"20:45",
      image: SliderImage10, 
      more:"Get ready for the highly anticipated return of 'Zobaida Beyond the Horizon' at Rawabet Art Space! This sensational musical production, born from a collective workshop, is back for the second time. Join us on a captivating journey that combines design and artistry to celebrate The Choir Project's 13th anniversary. Don't miss out on this extraordinary experience!"
    },
    {
      id: 10,
      name: "Raz3 el-gomhour live",
      description: "Arkan Plaza, Giza",
      date:"20/9/2023",
      time:"20:45",
      image: SliderImage11, 
      more:`For the first time, "Erza3" live x Arkan!
      An open football talk between "Erza3" hosts and football fans.
      Two and a half hours of interactive live-talk on the new season, players transfers, and football from the Egyptian league to the primer League!
       First version of "Erza3" live was the most successful. Tickets were sold out within hours.
      Don't miss the second version at Theatro Arkan!
      A meeting with the real players!`
    },
    {
      id: 11,
      name: "Jim Gaffigan",
      description: "The Marquee-Cairo Festival City.",
      date:"16/11/2023",
      time:"20:45",
      image: SliderImage12, 
      more:"Laugh the night away with the standup American Comedian Jim Gaffigan. Join us with your family and friends for a hilarious show in the Marquee theatre at Cairo Festival city on the 16th of November"
    },
    {
      id: 12,
      name: "Eshteri Menny Experience",
      description: "5 Hussein El Memari Street, From Talaat Harb,Cairo Downtown.",
      date:"25/8/2023",
      time:"7:30",
      image: SliderImage13, 
      more:`The "Eshtry Menny" live podcast episode is like a lively party where we bring the ongoing podcast discussions to life, involving the audience in an interactive way. Each episode focuses on a chosen topic, shared with the audience, often in a humorous and comedic style. We listen to audience stories, share laughs, and exchange our own experiences. Sometimes, we even have a beloved guest joining the festivities, adding to the fun for both the audience and us.`
    },
    {
      id: 13,
      name: "Animatex 4th Edition",
      description: "AUC Tahrir Cultural Center Tahrir Square,Cairo Downtown.",
      date:"9/9/2023",
      time:"9:45",
      image: SliderImage14, 
      more:`Animatex is Egypt’s biggest animation event! A weekend packed with short and feature film screenings from all around the world, intensive professional workshops, competitions, masterclasses from international guest artist, talks and discussions, exhibitions, VR space and game area, lots of networking activities, and a children’s program too.`
    },
    {
      id: 14,
      name: "Medfest Eg 5th Edition - Stigma from 14th to 17th of Sept",
      description: "AUC Tahrir Cultural Center Tahrir Square,Cairo Downtown.",
      date:"17/9/2023",
      time:"13:45",
      image: SliderImage15,
      more:`Festival Description & 4 Day pass ticket benefits:
      STIGMA is the new theme of the 5th Edition of Medfest Eg, happening from 14th to 17th September 23.
      The fear of being judged or discriminated against can prevent individuals from seeking treatment or fear of living normally worried about being stigmatized which can lead to negative health outcomes.` 
    },
  
  
  
   
  ];

function TheaterDetails() {
  const { theaterId } = useParams();

  
  const theater = theaters.find(theater => theater.id === parseInt(theaterId, 10));

  if (!theater) {
    return <div>Theater not found.</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <img src={theater.image} className="img-fluid" alt={theater.name} />
        </div>
        <div className="col-md-12 mt-4">
        <div className='row'>
        <div className="col-md-6 ">
          <img src={theater.image} className="img-fluid shadow-sm p-3 mb-5 bg-white rounded" alt={theater.name} />
        </div>
          <div className='col-md-6'>
            <strong className='col-md-6 text-warning'><h2 >{theater.name}</h2></strong>
          <p>{theater.description}</p>
          <p>{theater.date}</p>
          <p>{theater.time}</p>
          <p><strong>{theater.more}</strong></p>
          <Link to={`/seat-availability/${theater.id}`} className="btn bg-dark text-white my-5">
          Check Seat Availability
        </Link>
          </div> 
          <hr />
           </div>
        </div>
      </div>
    </div>
  );
}

export default TheaterDetails;

