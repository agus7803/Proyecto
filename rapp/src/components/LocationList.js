import PropTypes from 'prop-types';
import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = ({ cities, onSelectedLocation }) => { 
    const handeleWeatherLocationClick = city => {
        console.log("handeleWeatherLocationClick");
        onSelectedLocation(city);
    }
    const strToComponents = cities => (
        cities.map( city => (
            <WeatherLocation 
                key= {city} 
                city={city}
                onWeatherLocationClick={() => handeleWeatherLocationClick(city)} 
                /> ))
    );

    return (<div>
        {strToComponents(cities)}
    </div>);
};
LocationList.protoTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}
export default LocationList;