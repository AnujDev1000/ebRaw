import React from 'react';
import Blog from './Components/Blog';
import Category from './Components/Category';
import Contacts from './Components/Contacts';
import Customers from './Components/Customers';
import Feature from './Components/Feature';
import Header from './Components/Header';
import Home from './Components/Home';
import Offer from './Components/Offer';
import Products from './Components/Products';
import User from './Components/User';

const App = () => {
    
    return (
        <div className='container'>
            <Header />
            <Home />
            <Feature />
            <Category />
            <Products />
            <Offer />
            <Blog />
            <Customers />
            <User />
            <Contacts />
        </div>
    )
}
export default App;
