import React from 'react';
import IsBoiling from './IsBoiling';
import Input  from './Input';
import { useState, useEffect } from 'react';
import { toCelsius, toFahrenheit, tryConvert } from './Convert';

const App = () => {

    const [state, setState] = useState({scale: '' , degrees: ''});

    const celsius = state.scale === "F" ? tryConvert(state.degrees, toCelsius) : state.degrees;
    const fahrenheit = state.scale === "C" ? tryConvert(state.degrees, toFahrenheit) : state.degrees;
    
    return (
        <div>
            <h1>Conversor de Temperatura</h1>
            <Input type = {"C"} temp = {celsius} setTemperature = {setState}/>
            <Input type = {"F"} temp = {fahrenheit} setTemperature = {setState}/>
            <IsBoiling temperature = {state.degrees} />
        </div>
    );
}

export default App