import React, { useRef, useState } from 'react'
import '../Css/navbar.css'
import { HiMenu, HiMenuAlt1 } from 'react-icons/hi'

const Navbar = () => {
    const [active, setActive] = useState(0)
    const navbar = useRef(null)

    const navbarOpen = () => {
        alert('Clicked')
        if (active === 0)
        {
            navbar.current.style.transform = 'translateX(0%)'
            setActive(1)
        }
        else
        {
            navbar.current.style.transform = 'translateX(-100%)'
            setActive(0)
        }
    }

    return (
        <div className='container navbar'>
            <div className="navbar-logo-box">
                <a href="#">
                    <HiMenuAlt1 className='navbar-logo' />
                    <span>All Departments</span>
                </a>
            </div>
            <div ref={navbar} className="navbar-menu-box">
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">Categories</a>
                <a href="#">Man</a>
                <a href="#">Women</a>
                <a href="#">Assesories</a>
                <a href="#">Blog</a>
                <a href="#">Page</a>
                <a href="#">Furniture</a>
            </div>
            <div className="navbar-recent">
                <a href="#">Recent Viewed</a>
            </div>
            <div className="navbar-icon-box">
                <a href="#">
                    <HiMenu className='navbar-icon' onClick={navbarOpen} />
                </a>
            </div>
        </div>
    )
}

export default Navbar
