import React from 'react'
import './Navbar.css'
import Logo from '../../assets/images/logo.png';
import Logo_w from '../../assets/images/logo-small=white.png';
import Search from '../../assets/images/search-b.png'
import Search_w from '../../assets/images/search-w.png' 
import toggle_light from '../../assets/images/night.png'
import toggle_dark from '../../assets/images/day.png';


const Navbar = ({theme,setTheme}) => {
    const toggle_mode = ()=>{
        theme === 'light' ? setTheme("dark") : setTheme("light");
        console.log("Clicked");
    }
  return (
    <div className='navbar'>
        <img src={theme === 'light' ? Logo : Logo_w}  alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Features</li>
        </ul>
        <div className='search-box'>
            <input type="text" placeholder='Search' />
            <img src={theme ==='light' ? Search_w :Search_w } alt=''/>
        </div>
        <img onClick={()=>toggle_mode()} src={theme ==='light' ?  toggle_light : toggle_dark} alt='' className='toggle-icon'/>
    </div>
  )
}

export default Navbar