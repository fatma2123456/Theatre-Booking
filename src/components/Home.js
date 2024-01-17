import React, { useState } from 'react';
import "./Home.css"
import { Carousel,Card } from 'react-bootstrap';
import { Link,useParams } from 'react-router-dom';
import SliderImage from "../images/ticket-2974645_1280.jpg"
import SliderImage1 from "../images/Light+Slider.jpg"
import SliderImage2 from "../images/lesmiserables.jpg";
import SliderImage3 from "../images/SHARL.jpg"
import SliderImage4 from "../images/CAIROKEE-CONCERT---Website-slider-(1).jpg"
import SliderImage5 from "../images/FOUAD.jpg"
import SliderImage6 from "../images/movie-theater-4609877_1280.jpg"
import SliderImage7 from "../images/Cairo+Steps+Slider.jpg"
import SliderImage8 from "../images/Website+slider.jpg"
import SliderImage9 from "../images/KAMAN.jpg"
import SliderImage10 from "../images/NEW-ZOBIDA.jpg"
import SliderImage11 from "../images/RAZ3-SLIDER.jpg"
import SliderImage12 from "../images/jim-slider.jpg"

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


 
];
function Home() {
  const { theaterId } = useParams();
  const [selectedTheater, setSelectedTheater] = useState(null);

  const handleCardClick = (theater) => {
    setSelectedTheater(theater);
  };

  const handleCloseModal = () => {
    setSelectedTheater(null);
  };
  return (
   <>
      <div className="container mt-5">
      

      <Carousel interval={3000}>
        <Carousel.Item>
          <img className="d-block w-100" src={SliderImage} alt="img to check" />
        </Carousel.Item>
        <Carousel.Item>
          <Link to={`/theater/${theaters[0].id}`} className="carousel-link">
          <img className="d-block w-100" src={SliderImage1} alt="img to check" />
            <div className="carousel-card bg-dark ">
              <Card>
                <Card.Body>
                  <Card.Title className='text-warning'>Sound & Light Show</Card.Title>
                  <Card.Text>The Great Pyramids of Giza, Giza</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to={`/theater/${theaters[1].id}`} className="carousel-link">
            <img className="d-block w-100" src={SliderImage2} alt="LIgth+slider" />
            <div className="carousel-card bg-dark ">
              <Card>
                <Card.Body>
                  <Card.Title className='text-warning'>Les Miserables</Card.Title>
                  <Card.Text>Arkan Plaza, Giza</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to={`/theater/${theaters[2].id}`} className="carousel-link">
            <img className="d-block w-100" src={SliderImage3} alt="LIgth+slider" />
            <div className="carousel-card bg-dark ">
              <Card>
                <Card.Body>
                  <Card.Title className='text-warning'>Charlie</Card.Title>
                  <Card.Text>Movenpick Hotel, Giza</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to={`/theater/${theaters[3].id}`} className="carousel-link">
            <img className="d-block w-100" src={SliderImage4} alt="LIgth+slider" />
            <div className="carousel-card bg-dark ">
              <Card>
                <Card.Body>
                  <Card.Title className='text-warning'>cairokee</Card.Title>
                  <Card.Text>Al-Ajami Alexandria</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={SliderImage6} alt="img to check" />
        </Carousel.Item>
        <Carousel.Item>
          <Link to={`/theater/${theaters[4].id}`} className="carousel-link">
            <img className="d-block w-100" src={SliderImage5} alt="LIgth+slider" />
            <div className="carousel-card bg-dark ">
              <Card>
                <Card.Body>
                  <Card.Title className='text-warning'>Fouad & Mounib at Theatro Arkan</Card.Title>
                  <Card.Text> Arkan Plaza, Giza</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to={`/theater/${theaters[5].id}`} className="carousel-link">
            <img className="d-block w-100 " src={SliderImage7} alt="LIgth+slider" />
            <div className="carousel-card bg-dark ">
              <Card>
                <Card.Body>
                  <Card.Title className='text-warning'>Cairo Steps Concert</Card.Title>
                  <Card.Text>MUST THEATER, 6th of October</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Link>
        </Carousel.Item>
       
      </Carousel>

     
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
      
      <div className="front container mt-5">
      <div className="row">
        {theaters.map(theater => (
          <div className="col-md-4 mb-4" key={theater.id}>
            <div className="card checkered-card">
              <div className="checkered-pattern face front-face">
                <Card.Img variant="top" src={theater.image} alt={theater.name} />
              </div>
              <div className="card-body face back-face ">
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
    <Link to="/theater" className='text-center text-secondary '>
      <h5>SHOW MORE EVENTS</h5>
    </Link>
    </div>
   </>
  );
}

export default Home;
