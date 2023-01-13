import React from 'react'

const TarrifValue = ({ data }) => {
    return (
        <div>
            <div className='percentDiv'>{data.percent}</div>
            <h3>{data.header}</h3>

            <div className='valueDiv'>
                <h6>{data.value}</h6>
                <h2>{data.saleValue}</h2>
                <h5>per user/month</h5>
            </div>
        </div>
    )
}

export default TarrifValue