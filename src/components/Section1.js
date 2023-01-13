import React from 'react'
import img from '../images/percent.png'
import '../style/section1.style.scss'
const Section1 = () => {
    return (
        <section className='section1'>
            <div className='leftDiv'>
                <h1>
                    <span>CYBER MONDAY</span>  means <br />
                    an even <span>bigger sale</span>
                </h1>
                <p>Cyber Monday saves you money,<br />
                    WebWork saves you time.</p>
                <div className='getStartedDiv'>
                    <a href="https://www.webwork-tracker.com/app/dashboard" className='getStartedLink'>Save Big Now</a>
                </div>
                <div className="freeTrial">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.03607 8.79215L9.29863 12.3338L16.5814 4.40039" stroke="#8276FF" strokeWidth="1.13333" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M17.9996 9.5C17.9996 14.1944 14.1942 18 9.49982 18C4.8055 18 1 14.1944 1 9.5C1 4.80558 4.8055 1 9.49982 1C10.5063 1 11.4719 1.17493 12.3679 1.49604" stroke="#8276FF" strokeWidth="1.13333" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>14-day free trial | No credit card required</span>
                </div>
            </div>
            <div className='saleImages'>

                <img className='percent' src={img} alt="50%" />
            </div>
        </section>
    )
}

export default Section1