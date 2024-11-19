import logo from './logo.svg';
import './App.css';
import Cities from './components/UsaCitiesList';
import React from "react";

function App() {
    const cities = ['frisco', 'dallas' , 'city 3', 'city 4'] ;
    return (
        <div style={{ padding: "1rem" }}>
            <Cities citylist={cities}/>
            <h1>Weather APP Chrome Extension</h1>
            <button onClick={() => alert("Hello from Chrome Extension!")}>
                Click Me
            </button>
            
        </div>
    );
}

export default App;
