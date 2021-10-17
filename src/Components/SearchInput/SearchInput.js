import React, { useEffect, useState } from 'react'
import darkSearchIcon from './Assets/icon-search-mod-noc.svg'
import illustration from './Assets/ilustra_header.svg'
import './SearchInput.css'

const SearchInput = (props) => {

    //function to handle input changes.
    const inputChange = (evt) => {
        props.setInputValue(evt.target.value);
    }

    const apiKey = 'cFuWCp1hYO4aZJ75qSSAmDYgUP9ePl7q';

    //initializing state to manage autocomplete tags
    const [tags, setTags] = useState([]);

    //useEffect hook to manage autocomplete on input tags.
    useEffect(() => {
        const fetchAutocomplete = () => {
            fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&q=${props.value}&limit=5`)
            .then(response => response.json())
            .then(data => setTags(data.data));
        }
        fetchAutocomplete();
    },[props.value])

    return(
        <div className='SearchInput'>
            <h1>Inspirate y busca los mejores <span>GIFS</span></h1>
            <img className='SearchInput-illustration' src={illustration} alt="Search Illustration"/>
            <form className='SearchInput-container' onSubmit={props.handleSubmit}>
                <input type="text" value={props.value} onChange={inputChange}/>
                <button className='SearchInput-submit'>
                    <img src={darkSearchIcon} alt='Search Icon' />
                </button>
            </form>
        </div>
    )
}

export default SearchInput;