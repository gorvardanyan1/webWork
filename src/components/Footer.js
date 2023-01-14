import React from 'react'
import img from '../images/footerImg.png'
const Footer = () => {
    return (
        <footer>
            <div>
                <h2>Save 50% Now</h2>
                <div className='linkDiv'>
                    <a href="https://www.webwork-tracker.com/">GET MY DISCOUNT</a>
                </div>
            </div>
            <img src={img} alt="Footer background" />

        </footer>
    )
}

export default Footer