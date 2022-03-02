import React from 'react'
import Img1 from './Assets/homeContentImg.jpg'
import Img2 from './Assets/homeContentImg2.jpg'
import Img3 from './Assets/homeContentImg3.jpg'
import productImg1 from './Assets/productImg1.png'
import productImg2 from './Assets/productImg2.png'
import productImg3 from './Assets/productImg3.png'
import productImg4 from './Assets/productImg4.png'
import productImg5 from './Assets/productImg5.png'
import productImg6 from './Assets/productImg6.png'
import blogImg1 from './Assets/blogImg1.jpg'
import blogImg2 from './Assets/blogImg2.jpg'
import blogImg3 from './Assets/blogImg3.jpg'
import customerImg1 from './Assets/customerImg1.png'
import customerImg2 from './Assets/customerImg2.png'
import customerImg3 from './Assets/customerImg3.png'
import customerImg4 from './Assets/customerImg4.png'
import { FaGift, FaTruck } from 'react-icons/fa'
import { MdPayment } from 'react-icons/md'
import { BiSupport } from 'react-icons/bi'


const homeData = [
    {
        id: 1,
        name: 'Man',
        heading: 'Collection 2022',
        info1: 'New Inspiration',
        info2: 'Truly for Men',
        image: Img1
    },
    {
        id: 2,
        name: 'Women',
        heading: 'New Arrival 2022',
        info1: 'New Designs',
        info2: 'Truly for Women',
        image: Img2
    },
    {
        id: 3,
        name: 'Accesories',
        heading: 'New Festive Season 2022',
        info1: 'Trending',
        info2: 'Truly for both Men and Women',
        image: Img3
    },
]

const features = [
    {
        id: 1,
        icon: <FaTruck />,
        name: 'Free Shipping',
        text: 'Order now: 5000'
    },
    {
        id: 2,
        icon: <MdPayment />,
        name: 'Secure Payment',
        text: '100% secure payment'
    },
    {
        id: 3,
        icon: <FaGift />,
        name: 'Gift Certificate',
        text: 'Buy now $500 to $1000'
    },
    {
        id: 4,
        icon: <BiSupport />,
        name: '24/7 Support',
        text: 'Ready Support'
    },
]



const products = [
    {
        id: 1,
        image: productImg1,
        name: 'Man Sweat Hoodie',
        stars: [1, 1, 1, 1, 2],
        cost: '$150.00'
    },
    {
        id: 2,
        image: productImg2,
        name: 'Man Summer Sweat Hoodie',
        stars: [1, 1, 1, 1, 1],
        cost: '$100.00'
    },
    {
        id: 3,
        image: productImg3,
        name: 'Man Sweat Hoodie',
        stars: [1, 1, 2, 2, 2],
        cost: '$150.00'
    },
    {
        id: 4,
        image: productImg4,
        name: 'Women Sweat Hoodie',
        stars: [1, 1, 1, 1, 2],
        cost: '$100.00'
    },
    {
        id: 5,
        image: productImg5,
        name: 'Women Hoodie',
        stars: [1, 1, 1, 1, 1],
        cost: '$150.00'
    },
    {
        id: 6,
        image: productImg6,
        name: 'Man Hoodie',
        stars: [1, 1, 1, 1, 2],
        cost: '$100.00'
    }
]


const blogs = [
    {
        id: 1,
        heading: 'Fashion',
        image: blogImg1,
        date: 'May 11, 2021',
        text: '2021`s Biggest Collection in getting us in purchased in Summer'
    },
    {
        id: 2,
        heading: 'Style',
        image: blogImg2,
        date: 'Apr 21, 2021',
        text: '2021`s Biggest Collection in getting us in purchased in Summer'
    },
    {
        id: 3,
        heading: 'fashion',
        image: blogImg3,
        date: 'Oct 9, 2021',
        text: '2021`s Biggest Collection in getting us in purchased in Summer'
    },
]


const customers = [
    {
        id: 1,
        stars: [1, 1, 2, 2, 2],
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        name: 'John Maxwell',
        image: customerImg1
    },
    {
        id: 2,
        stars: [1, 1, 1, 1, 2],
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        name: 'Harry Mack',
        image: customerImg2
    },
    {
        id: 3,
        stars: [1, 1, 1, 1, 1],
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        name: 'Anthony Mack',
        image: customerImg4
    },
    {
        id: 4,
        stars: [1, 1, 1, 2, 2],
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        name: 'James Rodes',
        image: customerImg3
    },
    {
        id: 5,
        stars: [1, 1, 2, 2, 2],
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        name: 'Chris Evans',
        image: customerImg4
    },
    {
        id: 6,
        stars: [1, 1, 1, 1, 2],
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        name: 'Peter Quill',
        image: customerImg3
    },
    {
        id: 7,
        stars: [1, 1, 1, 1, 1],
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        name: 'Chris Hemsworth',
        image: customerImg2
    },
    {
        id: 8,
        stars: [1, 1, 2, 2, 2],
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        name: 'Scarlet Johansen',
        image: customerImg1
    },
]

export {homeData, features, products, blogs, customers}