import React from 'react';

const WeatherExtraInfo = ({ humidity, wind}) => (
    <div> 
        <samp>{ `${humidity} % - ` }</samp>
        <samp>{ `${wind} wind` }</samp>
    </div>

);

export default WeatherExtraInfo;