import React, { useState } from 'react'
import '../Css/home.css'
import homeImg from '../Assets/homeImg.jpg'
import HomeContent from './HomeContent'
import {homeData} from '../Data'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'

const Home = () => {
    const [index, setIndex] = useState(0)
    const [data, setData] = useState(homeData[index])

    const incrementIndex = () => {
        if (index < homeData.length-1)
        {
            setIndex(index+1)
            setData(homeData[index])
        }
    }

    const decrementIndex = () => {
        if (index > 0)
        {
            setIndex(index-1)
            setData(homeData[index])
        }
    }

    return (
        <div className='home'>
            <div className="home-background">
                <div className="home-background-plain"></div>
                <div className="home-background-img">
                    <img src={homeImg} alt=""/>
                </div>
            </div>
            <div className="home-arrow">
                <BsArrowRightSquareFill onClick={incrementIndex} className='home-arrow-icon' />
            </div>
            <div className="home-arrow">
                <BsArrowLeftSquareFill onClick={decrementIndex} className='home-arrow-icon' />
            </div>
            <HomeContent data={data} />
        </div>
    )
}

export default Home
