import React from 'react'
import '../Css/product.css'
import { FaRegStar, FaStar } from 'react-icons/fa'

const Product = ({product}) => {
    return (
        <div className="product-box">
            <div className="product-img-box">
                <img src={product.image} alt=""/>
            </div>
            <div className="product-content-box">
                <div className="product-content">
                    <h4>{product.name}</h4>
                    <div className="star-box">
                        {
                            product.stars.map(star => {
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
                </div>
                <div className="product-content">
                    <button>Add to cart</button>
                    <h4>{product.cost}</h4>
                </div>
            </div>
        </div>
    )
}

export default Product
