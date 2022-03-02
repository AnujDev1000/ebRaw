import React from 'react'
import '../Css/homeContent.css'
import homeContentImg from '../Assets/homeContentImg.jpg'

const HomeContent = ({data}) => {
    console.log(data)
    return (
        <div className="home-content">
                <div className="home-content-info">
                    <p>{data.info1}</p>
                    <h1>{data.name}</h1>
                    <h2>{data.heading}</h2>
                    <p>{data.info2}</p>
                    <button>Shop Now</button>
                </div>
                <div className="home-content-img">
                    <img src={data.image} alt=""/>
                </div>
            <div className="home-content-indexer">
                <span className='home-content-index'></span>
                <span className='home-content-index'></span>
                <span className='home-content-index'></span>
            </div>
        </div>
    )
}

export default HomeContent
