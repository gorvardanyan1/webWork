import React, { useState } from 'react'
import '../style/section3.style.scss'
import Section3Content from './Section3Content'
import Section3Nav from './Section3Nav'
import { section3ContentData } from '../fakeData'
const Section3 = () => {
    const [link, setLink] = useState('timeTracking')
    function handleContent(data) {
        setLink(data)
    }
    return (
        <section className='section3'>
            <h1>Save Big on All Features <br />
                <span>no exceptions</span>
            </h1>
            <div className='mainDiv'>
                <Section3Nav handleContent={handleContent} />
                <Section3Content data={section3ContentData[link]} />
            </div>
        </section>
    )
}

export default Section3