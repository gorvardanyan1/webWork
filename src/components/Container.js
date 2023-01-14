import React from 'react'
import Navigation from './Navigation'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import SectionPartner from './SectionPartner'

const Container = () => {
    return (
        <div className='container'>
            <Navigation />
            <main>
                <Section1 />
                <Section2 />
                <Section3 />
                <SectionPartner />
            </main>
        </div>
    )
}

export default Container