import React from 'react'
import '../style/section2.style.scss'
import { v4 } from 'uuid'
import TarrifValue from './TarrifValue'
const fakeData = [
    {
        percent: '50%',
        header: 'Monthly',
        value: 4.99,
        saleValue: 2.49,
        advantages: ['14-day Free Trial', 'Access to All Features', '24/7 Support'],
        note: '*for 6 months'
    },
    {
        percent: '50%',
        additionalBonus: '18%',
        header: 'Yearly',
        value: 4.09,
        saleValue: 2.05,
        advantages: ['14-day Free Trial', 'Access to All Features', '24/7 Support'],

    }
]
const Section2 = () => {
    return (
        <section className='section2'>
            <h1 className='header'> Benefit both ways - monthly or yearly</h1>
            <div className='tarifDiv'>
                {fakeData.map(element => <TarrifValue key={v4()} data={element} />)}
            </div>
            <div className='section2ImgDiv'>
                <img src="https://www.webwork-tracker.com/images/time-tracker/home/awards.png" alt="Our Awards" />
            </div>
        </section>
    )
}

export default Section2