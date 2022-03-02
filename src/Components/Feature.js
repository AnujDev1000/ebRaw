import React from 'react'
import {features} from '../Data'
import '../Css/feature.css'

const Feature = () => {

    return (
        <div className='feature'>
            {
                features.map(feature => {
                    return(
                        <div key={feature.id} className="feature-box">
                            <div className="feature-icon-box">
                                {
                                    feature.icon
                                }
                            </div>
                            <div className="feature-info">
                                <h2>{feature.name}</h2>
                                <p>{feature.text}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Feature
