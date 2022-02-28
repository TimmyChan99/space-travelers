import React from 'react';
import './rocket.css';

const Rocket = (props) => {
    const { description, image, name } = props;
    return (
        <div className="rocket_container">
            <img src={image} alt="rockect" />
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <button type="button">Reserve Rocket</button>
            </div>
        </div>
    );
}

export default Rocket;