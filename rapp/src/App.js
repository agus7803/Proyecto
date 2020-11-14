import React from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
    'Montevideo,uy',
    'Washington,us',
    'Bogota,col',
    'Ciudad de Mexico,mx',
    'Madrid,es',
    'Buenos Aires,ar',
]


function App() {
    return ( <
        div className = "App" >
        <LocationList cities={cities}/>
        </div>
    );
}

export default App;