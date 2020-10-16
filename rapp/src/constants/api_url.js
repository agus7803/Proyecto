const location = "Montevideo,uy";
const api_key = "4c3db25c23237daf46ae05c3ea6a8343";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;