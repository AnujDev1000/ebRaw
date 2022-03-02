import React from 'react'
import MainHeader from './MainHeader'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className='header'>
            <MainHeader />
            <hr/>
            <Navbar />
        </div>
    )
}

export default Header
