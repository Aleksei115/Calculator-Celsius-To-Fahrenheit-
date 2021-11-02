// Import react 
import React from 'react';  


// Create a component called IsBoiling  
// It should accept a temperature prop
// If temperature is greater than 100, it should display "Water is boiling"
// Otherwise it should display "Water is not boiling"
const IsBoiling = ({temperature}) => {

    if (temperature >= 100) {
        return <p>Water is boiling</p>
    } else {
        return <p>Water is not boiling</p>
    }
}


// Export the component back for use in other files 
export default IsBoiling;
