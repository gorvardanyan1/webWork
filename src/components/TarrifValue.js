import React from 'react'
import { v4 } from 'uuid'
const TarrifValue = ({ data }) => {
    return (
        <div className='tarifValueDiv'>
            <div className='percentDiv'>
                <div>
                    {data.additionalBonus ? <>
                        <h3>{data.additionalBonus}+</h3> <h1>{data.percent}</h1>
                    </>
                        : <h1>{data.percent}</h1>}
                </div>

            </div>
            <h3>{data.header}</h3>

            <div className='valueDiv'>

                <span className='tarifValue'>
                    <svg width="65" height="24" viewBox="0 0 76 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.07112 21.5821L74.0036 2.00059" stroke="#F354B4" strokeWidth="3.35685" strokeLinecap="round" />
                    </svg>

                    ${data.value}</span>
                <span >${data.saleValue}</span>

                <h5>per user/month</h5>

            </div>
            <div className='advantagesDiv'>
                <ul>
                    {
                        data.advantages.map(elem => <li key={v4()}>{elem}</li>)
                    }
                </ul>
            </div>
            <div className="tarifLink">
                <a href="https://www.webwork-tracker.com/">Get Your Deal</a>
            </div>
            {data.note && <h6 className='note'>{data.note}</h6>}
        </div>
    )
}

export default TarrifValue