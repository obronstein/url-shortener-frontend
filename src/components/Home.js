import React, { useState, useEffect } from 'react';

import './Home.css';

function Home(props) {

  const RESTAPIURL = "https://the-shortened-url.herokuapp.com/";

  const [error, setError] = useState(null);
  const [longURL, setLongURL] = useState([]);
  const [shortURL, setShortURL] = useState("");


  const onButtonClick = () => {
    if (longURL !== ""){
      const options = {
        method: 'POST',
        body: JSON.stringify({ longURL: longURL }),
        headers:{
        'Content-Type': 'application/json'
        }
      };
      fetch(RESTAPIURL, options).then(response => response.json()).then(data => {
        setShortURL(RESTAPIURL + data.url.shortURL);
      })
    }
  }

  const handleChange = e => {
    setLongURL(e.target.value);
  }

    return (
      <>
        <h1>Shorten Your URL</h1>
        <p>Enter a url you'd like to shorten and receive a shorten url</p>
        <input type="text" className="input" onChange={handleChange}/>
        <br/>
        <br/>
        <button className="button" onClick={onButtonClick}>Shorten URL</button>
        <h1><a href={shortURL}>{shortURL}</a></h1>
    </>
    );

}

export default Home;
