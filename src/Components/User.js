import React from 'react'
import '../Css/user.css'
import offerImg from '../Assets/offerImg.png'
import userSignupImg from '../Assets/homeContentImg2.jpg'

const User = () => {
    return (
        <div className='user'>
            <div className="user-offer-box">
                <div className="user-offer-img">
                    <img src={offerImg} alt=""/>
                </div>
                <h2>SAVE UP TO</h2>
                <h1>50%</h1>
                <h2>OFF</h2>
            </div>
            <div className="user-signup-box">
                <div className="user-signup-img">
                    <img src={userSignupImg} alt=""/>
                </div>
                <h2>Sign Up Now & Get 10% Off</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                <div className="user-input-box">
                    <input type="text" placeholder='Enter your email address' />
                    <button>Subscribe Now</button>
                </div>
            </div>
        </div>
    )
}

export default User
