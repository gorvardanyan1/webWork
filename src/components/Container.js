import React from 'react'
import Navigation from './Navigation'
import Section1 from './Section1'

const Container = () => {
    return (
        <div className='container'>
            <Navigation />
            <main>
                <Section1 />
            </main>
        </div>
    )
}

export default Container