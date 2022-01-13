import React from 'react'


const Utils = () => {
    
    //const apiKey = 'a4db79b7'
    const searchTerm = 'Serenity'
    const id = 'tt0102573'
let getMoviesBySearchTerm = async (searchTerm) => {
const url = `https://www.omdbapi.com/?apikey=a4db79b7&s=${searchTerm}`;
let response = await fetch(url); // We wait for the data, then assign it to 'response'.
let data = await response.json(); // We convert the JSON data to a regular Javascript object, then assign that to 'data'.
    console.log(data); // We log the data to the console.
    //app.innerHTML = JSON.stringify(data.Title);
    // <h3>{searchTerm}</h3>
    
};

    // getMoviesBySearchTerm(apiKey, searchTerm);

    let getMovieDetailsById = async (id) => {
        const url = `https://www.omdbapi.com/?apikey=a4db79b7&s=${id}`;
        let response = await fetch(url); 
        let data = await response.json();
            console.log(data); 
        };

    return (
        <div>
            <h3>{searchTerm}</h3>
            <button type='button' onClick={getMoviesBySearchTerm}>display using title</button>
            <h3>{id}</h3>
            <button type='button' onClick={getMovieDetailsById}>Display using id</button>
        </div>
    )
}


export default Utils