import React from 'react';
import PorpTypes from 'prop-types';
import './styles.css';

const Location = ({ city }) => {
    //Destructuring en city
    return (
        <div className = "locationCont">
            <h1>
                {city}
            </h1>
        </div>
    );

};

Location.porpTypes = {
    city: PorpTypes.string.isRequired,

};

export default Location;