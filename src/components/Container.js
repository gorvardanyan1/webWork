import React from 'react'
import Navigation from './Navigation'
import Section1 from './Section1'
import Section2 from './Section2'

const Container = () => {
    return (
        <div className='container'>
            <Navigation />
            <main>
                <Section1 />
                <Section2 />
            </main>
        </div>
    )
}

export default Container