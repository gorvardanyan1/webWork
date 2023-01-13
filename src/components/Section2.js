import React from 'react'
import '../style/section2.style.scss'

const fakeData = [{
    percent: '50%',
    header: 'Monthly',
    value: 4.99,
    saleValue: 2.49,
    advantages: ['14-day Free Trial', 'Access to All Features', '24/7 Support'],
    note: '*for 6 months'
}]
const Section2 = () => {
    return (
        <section className='section2'>
            <h1 className='header'> Benefit both ways - monthly or yearly</h1>

        </section>
    )
}

export default Section2