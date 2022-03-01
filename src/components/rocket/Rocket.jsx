import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket, cancelRocketBooking } from '../../redux/rockets/rockets';
import './rocket.css';

const Rocket = ({ description, image, name, id }) => {
  const dispatch = useDispatch();
  const bookingRocket = (e) => {
   const id = e.target.id;
   dispatch(bookRocket(+id));
  }
  const cancelBookingRocket = (e) => {
   const id = e.target.id;
   dispatch(cancelRocketBooking(+id));
  }
  return (
  <div className="rocket_container">
    <div className="image_container">
      <img src={image} alt="rockect" />
    </div>
    <div className="info_container">
      <h3>{name}</h3>
      <p>{description}</p>
      <button id={id} type="button" onClick={bookingRocket}>Reserve Rocket</button>
      <button id={id} type="button" onClick={cancelBookingRocket}>Cancel Reserve Rocket</button>
    </div>
  </div>
);
}

Rocket.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;
