import React from 'react';
import PorpTypes from 'prop-types';

const WeatherExtraInfo = ({ humidity, wind}) => (
    <div> 
        <samp>{ `${humidity} % - ` }</samp>
        <samp>{ `${wind} wind` }</samp>
    </div>

);
WeatherExtraInfo.porpTypes = {
    humidity: PorpTypes.number.isRequired,
    wind: PorpTypes.string.isRequired,

};

export default WeatherExtraInfo;