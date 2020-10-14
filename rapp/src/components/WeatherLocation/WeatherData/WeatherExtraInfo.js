import React from 'react';
import PorpTypes from 'prop-types';
import './styles.css';
const WeatherExtraInfo = ({ humidity, wind}) => (
    <div className= "weatherExtraInfoCont"> 
        <samp className = "extraInfoText">{ `Humedad: ${humidity} % - ` }</samp>
        <samp className = "extraInfoText">{ `Vientos: ${wind}` }</samp>
    </div>

);
WeatherExtraInfo.porpTypes = {
    humidity: PorpTypes.number.isRequired,
    wind: PorpTypes.string.isRequired,

};

export default WeatherExtraInfo;