import React from 'react'
import img from '../images/dashboard.png'
import { v4 } from 'uuid'
const Section3Content = ({ data }) => {
    return (
        <div className='section3content'>
            <div className="contentLeft">
                <h1>{data.header}</h1>
                <ul>
                    {data.advantages.map(elem => <li key={v4()}>{elem}</li>)}
                </ul>
                <a href={data.href}>RESERVE YOUR SEAT</a>
            </div>
            <div className="contentRight" >
                <img src={img} alt="Dashboard" />
            </div>
        </div>
    )
}
export default Section3Content