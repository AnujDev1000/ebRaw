import React from 'react'
import '../Css/customer.css'
import { FaRegStar, FaStar } from 'react-icons/fa'


const Customer = ({customer},ref) => {

    return (
        <div ref={ref} className='customer' id='customer'>
            <div className="star-box">
                {
                    customer.stars.map(star => {
                        if(star == 1){
                            return(
                                <FaStar />
                            )
                        }
                        else{
                            return(
                                <FaRegStar />
                            ) 
                        }
                    })
                }
            </div>
            <p>{customer.message}</p>
            <div className="customer-details">
                <img src={customer.image} alt=""/>
                <h4>{customer.name}</h4>
            </div>
        </div>
    )
}

const forwardCustomerCardRef = React.forwardRef(Customer)

export default forwardCustomerCardRef
