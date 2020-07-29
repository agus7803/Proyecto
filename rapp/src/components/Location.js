import React from 'react';
import PorpTypes from 'prop-types';

const Location = ({ city }) => {
    //Destructuring en city
    return (
        <div>
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