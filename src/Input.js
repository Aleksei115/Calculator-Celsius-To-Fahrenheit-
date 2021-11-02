import React from "react";
import { useState } from "react";



function Input({type, temp ,setTemperature}){

    
    return (
        <div>
            <h2>Temperatura en °{type}</h2>
            <input 
                type="text"
                value = { temp }
                onChange = { (e) => { setTemperature( {scale:type,degrees:e.target.value} ) } } 
            />
        </div>
    );
}

// (e) => handleChange(e) regresa un objeto que tiene como atributo target,
// que contiene el valor del input

export default Input;