import React from 'react'
import '../Css/contact.css'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Contacts = () => {
    return (
        <div className='contacts'>
            <div className="contact-company-details">
                <h1>ebRaw</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                </p>
                <div className="contact-social-icons">
                    <FaFacebook className='social-icon' />
                    <FaTwitter className='social-icon' />
                    <FaYoutube className='social-icon' />
                    <FaInstagram className='social-icon' />
                </div>
            </div>
            <div className="contact-links-box">
                <h2>Support Links</h2>
                <a href="#" className="contact-link">Product Guides</a>
                <a href="#" className="contact-link">Terms & Conditions</a>
                <a href="#" className="contact-link">Delivery Policy</a>
                <a href="#" className="contact-link">Privacy Policy</a>
                <a href="#" className="contact-link">Feedback</a>
            </div>
            <div className="contact-links-box">
                <h2>Quick Links</h2>
                <a href="#" className="contact-link">Product Guides</a>
                <a href="#" className="contact-link">Terms & Conditions</a>
                <a href="#" className="contact-link">Delivery Policy</a>
                <a href="#" className="contact-link">Privacy Policy</a>
                <a href="#" className="contact-link">Feedback</a>
            </div>
            <div className="contact-links-box">
                <h2>Company</h2>
                <a href="#" className="contact-link">Product Guides</a>
                <a href="#" className="contact-link">Terms & Conditions</a>
                <a href="#" className="contact-link">Delivery Policy</a>
                <a href="#" className="contact-link">Privacy Policy</a>
                <a href="#" className="contact-link">Feedback</a>
            </div>
            <div className="contact-links-box">
                <h2>Help</h2>
                <a href="#" className="contact-link">Product Guides</a>
                <a href="#" className="contact-link">Terms & Conditions</a>
                <a href="#" className="contact-link">Delivery Policy</a>
                <a href="#" className="contact-link">Privacy Policy</a>
                <a href="#" className="contact-link">Feedback</a>
            </div>
        </div>
    )
}

export default Contacts
