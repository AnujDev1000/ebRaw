import React from 'react'
import '../Css/products.css'
import { products } from '../Data.js'
import Product from './Product'

const Products = () => {

    return (
        <div  className='products'>
            <h1>Our Featured Products</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam
            </p>
            <div className="product-header">
                <div className="product-heading">
                    <span>Hoodies</span>
                </div>
                <div className="product-heading">
                    <span>Accessories</span>
                </div>
                <div className="product-heading">
                    <span>Man</span>
                </div>
                <div className="product-heading">
                    <span>Women</span>
                </div>
                <div className="product-heading">
                    <span>Trouser</span>
                </div>
                <div className="product-heading">
                    <span>T-Shirt</span>
                </div>
            </div>
            <div className="product-box-group">
                {
                    products.map(product => {
                        return(
                            <Product key={product.id} product={product} />
                        )
                    })
                }
            </div>
            <button>More</button>
        </div>
    )
}

export default Products
