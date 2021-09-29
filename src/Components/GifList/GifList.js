import { useState } from "react";
import Header from '../Header/Header.js'
import './GifList.css'

const GifList = () => {

    //setting state to manage changes between light and dark state.
    const [isDark, setIsDark] = useState(false);

    //function to handle light and dark state when clicking the button
    const lightChange = () => {
        setIsDark(!isDark);
    }

    return(
        <main className={isDark ? 'darkMode' : 'lightMode'}>
            <Header 
            handleLightChange={lightChange}
            darkState={isDark}
            />
        </main>
    );
}

export default GifList;