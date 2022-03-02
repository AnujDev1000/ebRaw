import React, { useRef, useEffect } from 'react'
import '../Css/customers.css'
import { customers } from '../Data'
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs'
import Customer from './Customer'

const Customers = () => {
    const customerRef = useRef(null)
    const customerSliderRef = useRef(null)
    const customerCardRef = useRef(null)

    const slideLeft = () => {
        customerRef.current.scrollLeft -= customerCardRef.current.offsetWidth
    }

    const slideRight = () => {
        customerRef.current.scrollLeft += customerCardRef.current.offsetWidth
    }
 
    return (
        <div className='customers'>
            <h1>What Say Our Regular Customers</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <div className="customer-change-box">
                <BsArrowLeftSquare className='customer-change-icon' onClick={slideLeft} />
                <BsArrowRightSquare className='customer-change-icon' onClick={slideRight} />
            </div>
            <div ref={customerRef} className="customer-card-container">
                <div ref={customerSliderRef} className="customer-card-slider">
                    {
                        customers.map(customer => {
                            return(
                                <Customer ref={customerCardRef} key={customer.id} customer={customer} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Customers
