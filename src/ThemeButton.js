import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';
import { BsSunFill } from 'react-icons/bs'

function ThemeButtonn() {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    const handleTheme = () => {
        setDarkMode(!darkMode)
    }

    return (
        <button className='btn btn-floating' onClick={handleTheme}><BsSunFill className={darkMode ? "text-primary gg" : "text-light gg"} /></button>
    )
}

export default ThemeButtonn;

{/* <BsSunFill/> */ }