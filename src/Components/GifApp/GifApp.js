import React, { useState, useEffect, useRef } from "react";
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

    //setting state to identify when is not showing trending gif's
    const [isTrending, setIsTrending] = useState(true);

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

    //function to handle search from autocomplete tags
    const tagSubmit = (evt) => {
        evt.preventDefault();
        setSearchValue(evt.target.innerText);
        setInputValue('');
    }
    
    //setting states for trending and search gifs
    const [gifs, setGifs] = useState([]);

    //useEffect hook to fetch the initial trending gifs
    useEffect(() => {
        const fetchTrendingGifs = () => { 
            fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}`)
            .then(response => response.json())
            .then(data => setGifs(data.data))
        }
        fetchTrendingGifs();
    }, []);

    //useRef hook to avoid triggering gif search fetch on first rendering
    const notInitialRender = useRef(false);

    //useEffect to fetch gifs according a category search
    useEffect(() => {
        const fetchSearchGifs = () => {
            if(notInitialRender.current){
                fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchValue}&limit=${limit}&offset=0&rating=g&lang=es`)
                .then(response => response.json())
                .then(data => setGifs(data.data));
                setIsTrending(false);
            } else {
                notInitialRender.current = true;
            }
        }
        fetchSearchGifs();
    }, [searchValue]);

    return(
        <div className={isDark ? 'GifApp darkMode' : 'GifApp lightMode'}>
            <Header 
            handleLightChange={lightChange}
            darkState={isDark}
            />
            <SearchInput
            setInputValue={setInputValue}
            handleSubmit={searchSubmit}
            handleTagSubmit={tagSubmit}
            value={inputValue}
            darkState={isDark}
            />
            <GifList
            gifs={gifs}
            searchValue={searchValue}
            darkState={isDark}
            isTrending={isTrending}
            />
        </div>
    );
}

export default GifApp;