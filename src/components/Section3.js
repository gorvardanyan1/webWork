import React, { useState } from 'react'
import '../style/section3.style.scss'
import Section3Content from './Section3Content'
import Section3Nav from './Section3Nav'
import { BrowserRouter as Router } from 'react-router-dom'
import { section3ContentData } from '../fakeData'
const Section3 = () => {
    const [link, setLink] = useState('')
    function handleClick(code) {
        console.log(section3ContentData[code]);
    }
    return (
        <section className='section3'>
            <h1>Save Big on All Features <br />
                <span>no exceptions</span>
            </h1>
            <Router>
                <div>
                    <Section3Nav handleClick={handleClick} />
                    <Section3Content />
                </div>
            </Router>

        </section>
    )
}

export default Section3