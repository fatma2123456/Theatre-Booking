import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function SeatCancellation() {
  const { seatIds } = useParams();
  const selectedSeatIds = seatIds.split('-').map(id => parseInt(id));
  const [cancellationStatus, setCancellationStatus] = useState(false);

  useEffect(() => {
    // Implement your seat cancellation logic here
    // You can update the state or perform API calls if needed
    // For demonstration purposes, let's just set the cancellation status to true
    setCancellationStatus(true);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center">Seat Cancellation</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className={`alert ${cancellationStatus ? 'alert-success' : 'alert-danger'}`}>
            {cancellationStatus ? (
              <p>Seat cancellation successful!</p>
            ) : (
              <p>Seat cancellation failed. Please try again.</p>
            )}
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <p className="text-center">
          {cancellationStatus ? (
              <React.Fragment>
                <Link to="/">Back to Home</Link> | <Link to="/seat-availability/:seatIds">Seat Availability</Link>
              </React.Fragment>
            ) : (
              <Link to={`/seat-booking/${selectedSeatIds.join('-')}`}>Retry Cancellation</Link>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SeatCancellation;


