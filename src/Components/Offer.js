import React from 'react'
import '../Css/offer.css'
import offerImg from '../Assets/offerImg.png'

const Offer = () => {
    return (
        <div className='offer'>
            <div className="offer-background">
                <img src={offerImg} alt=""/>
            </div>
            <div className="offer-box">
                <h4>Super discount for your first purchase</h4>
                <span className="offer-code">FREE 100LUYR#</span>
                <h4>Use discount code in checkout!</h4>
            </div>
        </div>
    )
}

export default Offer
