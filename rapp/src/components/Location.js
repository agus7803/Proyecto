import React from 'react';

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

export default Location;