import React from 'react'
import '../Css/category.css'
import categoryImg1 from '../Assets/categoryImg1.png'
import categoryImg2 from '../Assets/categoryImg2.png'

const Category = () => {
    return (
        <div className='categories'>
            <div className="category-box">
                <div className="category-img">
                    <img src={categoryImg1} alt=""/>
                </div>
                <div className="category-content">
                    <p>Top Collections</p>
                    <h2>Shop Womens</h2>
                    <button>Shop Now</button>
                </div>
            </div>
            <div className="category-box">
                <div className="category-img">
                    <img src={categoryImg2} alt=""/>
                </div>
                <div className="category-content">
                    <p>New Collections</p>
                    <h2>Summer Fashion</h2>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>
    )
}

export default Category
