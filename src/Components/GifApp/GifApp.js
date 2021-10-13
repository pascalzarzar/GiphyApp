import React, { useState, useEffect } from "react";
import Header from '../Header/Header.js'
import SearchInput from '../SearchInput/SearchInput.js'
import GifList from "../GifList/GifList.js";
import './GifApp.css'

const GifApp = () => {

    //setting state to manage changes between light and dark state.
    const [isDark, setIsDark] = useState(false);
    
    //setting state to manage input changes.
    const [inputValue, setInputValue] = useState('')

    //function to handle light and dark state when clicking the button
    const lightChange = () => {
        setIsDark(!isDark);
    }

    //function to handle input changes.
    const inputChange = (evt) => {
        setInputValue(evt.target.value);
    }

    const [gifs, setGifs] = useState([]);

    //useEffect hook to fetch the initial trending gifs
    useEffect(() => {
        const fetchGifs = () => { 
            const apiKey = 'cFuWCp1hYO4aZJ75qSSAmDYgUP9ePl7q'
            const limit = 10
            fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}`)
            .then(response => response.json())
            .then(data => setGifs(data.data))
        }
        fetchGifs();
    }, []);

    return(
        <main className={isDark ? 'darkMode' : 'lightMode'}>
            <Header 
            handleLightChange={lightChange}
            darkState={isDark}
            />
            <SearchInput
            changeHandler={inputChange}
            value={inputValue}
            />
            <GifList
            gifs={gifs}
            />
        </main>
    );
}

export default GifApp;