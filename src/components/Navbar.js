import React, {useState} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const[button,setButton] = useState(true)
    const closeMobileMenu = () => setClick(false)
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else{
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton)
    return (
        <>
          <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    SAFRNY <i class="fas fa-plane"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-items'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}> Home </Link>
                    </li>
                    <li className='nav-items'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}> Services </Link>
                    </li>
                    <li className='nav-items'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}> Products </Link>
                    </li>
                    <li className='nav-items'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}> Signup </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                
            </div>
            </nav>  
        </>
    )
}

export default Navbar
