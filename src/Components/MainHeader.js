import React from 'react'
import '../Css/mainHeader.css'
import { FaHeart, FaShoppingCart, FaUserPlus } from 'react-icons/fa'

const MainHeader = () => {
    return (
        <div className='main-header'>
            <div className="main-header-logo-box">
                <span className='logo'>ebRaw</span>
            </div>
            <div className='main-header-search-box'>
                <input type="search"/>
                <button>search</button>
            </div>            
            <div className="main-header-user-box">
                <a href="#" className='main-header-icon'>
                    <span className='badge'>5</span>
                    <FaShoppingCart />
                </a>
                <a href="#" className='main-header-icon'><FaHeart /></a>
                <a href="#" className='main-header-icon'><FaUserPlus /></a>
            </div>     
        </div>
    )
}

export default MainHeader
