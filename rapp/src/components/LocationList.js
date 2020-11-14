import PropTypes from 'prop-types';
import React from 'react';
import WeatherLocation from './WeatherLocation';

const strToComponents = cities => (
    cities.map( city => <WeatherLocation city={city}/> )
);

const LocationList = ({ cities }) => (
    <div>
        {strToComponents(cities)}
    </div>
);
LocationList.protoTypes = {
    cities: PropTypes.array.isRequired,
}
export default LocationList;