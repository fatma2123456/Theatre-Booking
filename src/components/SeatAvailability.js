import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import seatsData from '../data/seats.json';
import './SeatAvailability.css';
import FoodAndDrink from './FoodAndDrink';
function SeatAvailability() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingStatus, setBookingStatus] = useState(false);
  const seatData = seatsData;


  useEffect(() => {
    const storedSelectedSeats = JSON.parse(localStorage.getItem('selectedSeats')) || [];
    setSelectedSeats(storedSelectedSeats);
  }, []);

  const handleSeatClick = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const getTotalCost = () => {
    const seatCost = 20;
    return selectedSeats.length * seatCost;
  };

  const handleBooking = () => {
    setSelectedSeats([]);
    setBookingStatus(true);

    const bookedSeats = JSON.parse(localStorage.getItem('bookedSeats')) || [];
    selectedSeats.forEach(seatId => {
      if (!bookedSeats.includes(seatId)) {
        bookedSeats.push(seatId);
      }
    });
    localStorage.setItem('bookedSeats', JSON.stringify(bookedSeats));
    localStorage.setItem('selectedSeats', JSON.stringify([])); 
  };
  ///////////////////////////////////////To Foood //////////////////////////////////////
  const foodAndDrinkOptions = [
    { id: 1, name: 'Popcorn', price: 5.0 },
    { id: 2, name: 'Soda', price: 3.0 },
    { id: 3, name: 'Candy', price: 2.5 },
  ];

  const [selectedFoodAndDrink, setSelectedFoodAndDrink] = useState(null);

  const handleSelectOption = (optionId) => {
    const selectedOption = foodAndDrinkOptions.find(option => option.id === optionId);
    setSelectedFoodAndDrink(selectedOption);
  };
///////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="container mt-5 ">
      <h2 className="text-center">Seat Availability</h2>
      <p className="text-center">Total Cost: ${getTotalCost()}</p>
      <div className="row seat-grid">
        {seatData.map(seat => (
          <div
            key={seat.id}
            className={`col-1 seat ${seat.isBooked ? 'booked' : 'available'} ${selectedSeats.includes(seat.id) ? 'selected' : ''}`}
            onClick={() => handleSeatClick(seat.id)}
          >
            <span className={selectedSeats.includes(seat.id) ? 'selected-seat-number' : 'seat-number'}>
              {seat.seatNumber}
            </span>
            
          </div>
        ))}
      </div>
      {/***************************************************************************************************** */}
      <div className="col-md-4">
          <FoodAndDrink
            foodAndDrinkOptions={foodAndDrinkOptions}
            onSelectOption={handleSelectOption}
          />
          {selectedFoodAndDrink && (
            <p className="mt-3">You have selected: {selectedFoodAndDrink.name} - {selectedFoodAndDrink.price} $</p>
          )}
        </div>
     

      {/***************************************************************************************************** */}
      <Link
        to={`/seat-booking/${selectedSeats.join('-')}`}
        className="btn btn-primary mt-3"
        onClick={handleBooking}
      >
        Proceed to Booking
      </Link>
    </div>
  );
}

export default SeatAvailability;







