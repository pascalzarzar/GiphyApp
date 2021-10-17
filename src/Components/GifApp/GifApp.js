import React, { useState, useEffect } from "react";
import Header from '../Header/Header.js'
import SearchInput from '../SearchInput/SearchInput.js'
import GifList from "../GifList/GifList.js";
import './GifApp.css'

const GifApp = () => {

    //parameters to use the giphy API.
    const apiKey = 'cFuWCp1hYO4aZJ75qSSAmDYgUP9ePl7q';
    const limit = 15;

    //setting state to manage changes between light and dark state.
    const [isDark, setIsDark] = useState(false);
    
    //setting state to manage input changes and gif search item.
    const [inputValue, setInputValue] = useState('')
    const [searchValue, setSearchValue] = useState('');

    //function to handle light and dark state when clicking the button
    const lightChange = () => {
        setIsDark(!isDark);
    }

    //function to handle search form submit.
    const searchSubmit = (evt) => {
        evt.preventDefault();
        setSearchValue(inputValue);
        setInputValue('');
    }
    
    //setting states for trending and search gifs
    const [trendingGifs, setTrendingGifs] = useState([]);
    const [searchGifs, setSearchGifs] = useState([]);

    //useEffect hook to fetch the initial trending gifs
    useEffect(() => {
        const fetchTrendingGifs = () => { 
            fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}`)
            .then(response => response.json())
            .then(data => setTrendingGifs(data.data))
        }
        fetchTrendingGifs();
        console.log('trending fetching')
    }, []);

    useEffect(() => {
        const fetchSearchGifs = () => {
            fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchValue}&limit=${limit}&offset=0&rating=g&lang=es`)
            .then(response => response.json())
            .then(data => setSearchGifs(data.data));
        }
        fetchSearchGifs();
        console.log('working');
    }, [searchValue]);

    return(
        <main className={isDark ? 'darkMode' : 'lightMode'}>
            <Header 
            handleLightChange={lightChange}
            darkState={isDark}
            />
            <SearchInput
            setInputValue={setInputValue}
            handleSubmit={searchSubmit}
            value={inputValue}
            />
            <GifList
            trendingGifs={trendingGifs}
            searchGifs={searchGifs}
            />
        </main>
    );
}

export default GifApp;