import React from 'react'
import './Navbar.css'
import logo_light from './day sunny.png';
import logo_dark from './pngwing.com.png';
import search_icon_light from './search-white.png'
import search_icon_dark from './search-icon.png'

const Navbar = ({theme,setTheme}) => {

    const toggle_mode=()=>{
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }
    return (
        <div className='navbar'>
            <img src={""} alt="" className='logo' />

            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Features</li>
                <li>About</li>
            </ul>
            <div className="search-box">
                <input type="text" placeholder='Search' />
                <img src={theme === 'light' ? search_icon_light : search_icon_dark

                } alt="" />
            </div>
            <img onClick={()=>{toggle_mode()}} src={theme === 'light' ? logo_light : logo_dark}  alt="" className='toggle-icon'/>

        </div>
    )
}

export default Navbar