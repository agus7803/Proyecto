import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
     SUN,
 } from '../../constants/weathers';
 import './styles.css';

const location = "Montevideo,uy";
const api_key = "4c3db25c23237daf46ae05c3ea6a8343";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
     temperature: 19,
     weatherState: SUN,
     humidity: 10,
     wind: '5 m/s',
}

class WeatherLocation extends Component {

     constructor () {
          super();
          this.state = {
               city: 'Montevideo',
               data: data,
          };
     }
     getWeatherState = weather_data => {
          return SUN;
     }

     getData = weather_data => {
          const { humidity, temp } = weather_data.main;
          const { speed } = weather_data.wind;
          const weatherState = SUN;

          const data = {
               humidity,
               temperature: temp,
               weatherState,
               wind: `${speed} m/s`, 
          }
          return data;
     }

     handleUpdateClick = () => {
          
          fetch(api_weather).then ( resolve => {
               return resolve.json();   
          }).then( data => {
               const newWeather = this.getData(data);
               console.log(newWeather);
               debugger;
               this.setState({
                    data: newWeather
               });
               console.log(data);
          }) ;
     }
     render() {
          const { city, data } = this.state;
          return(
               <div className = "weatherLocationCont"> 
                    <Location city={city}> </Location>
                    <WeatherData data = {data}></WeatherData>
                    <button onClick = {this.handleUpdateClick} > Actualizar </button>
               </div>
          );
     }
}

export default WeatherLocation; 