import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Seatbook() {
  const { seatIds } = useParams();
  const selectedSeatIds = seatIds.split('-').map(id => parseInt(id));
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiration: '',
    cvv: '',
  });
  const [bookingStatus, setBookingStatus] = useState(false);

  const handlePaymentInfoChange = e => {
    const { name, value } = e.target;
    setPaymentInfo(prevPaymentInfo => ({
      ...prevPaymentInfo,
      [name]: value,
    }));
  };

  const handleBooking = () => {
    setBookingStatus(true);
  };

  const calculateTotalCost = () => {
    const baseCost = selectedSeatIds.length * 20;
    return baseCost > 300 ? (baseCost * 0.9).toFixed(2) : baseCost.toFixed(2);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Seat Booking</h2>
      <div className="seat-details">
        <p>Selected Seats: {selectedSeatIds.join(', ')}</p>
        <p>Total Cost: ${calculateTotalCost()}</p>
      </div>
      {bookingStatus ? (
        <div className="booking-success">
          <p>Booking successful! You can proceed to the event.</p>
          <React.Fragment>
            <Link to="/" className="btn btn-primary mb-5">
              Back to Home
            </Link>
          </React.Fragment>
        </div>
      ) : (
        <form className="payment-form">
          <div className="form-group">
            <label>Card Number</label>
            <input
              type="text"
              className="form-control"
              name="cardNumber"
              value={paymentInfo.cardNumber}
              onChange={handlePaymentInfoChange}
            />
          </div>
          <div className="form-group">
            <label>Expiration Date</label>
            <input
              type="text"
              className="form-control"
              name="expiration"
              value={paymentInfo.expiration}
              onChange={handlePaymentInfoChange}
            />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input
              type="text"
              className="form-control"
              name="cvv"
              value={paymentInfo.cvv}
              onChange={handlePaymentInfoChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleBooking}
          >
            Pay and Book
          </button>
          {!bookingStatus && (
            <div className="cancel-buttons">
              <button className="btn btn-danger mt-3">
                <Link
                  className="text-white"
                  to={`/seat-cancellation/${selectedSeatIds.join('-')}`}
                >
                  Cancel Seat
                </Link>
              </button>
            </div>
          )}
        </form>
      )}
    </div>
  );
}

export default Seatbook;
