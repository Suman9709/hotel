import React from 'react'
import Home from './Home'
import About from './About'
import Events from './Events'
import Rooms from './Rooms'
import Aminities from './Aminities'
import Interior from './Interior'

const HomePage = () => {
    return (
        <div>
            <section id='home'>
                <Home />
            </section>
            <section id='about'>
                <About />
            </section>
            <section id='rooms'>
                <Rooms />
            </section>
            <section id='events'>
                {/* <Events /> */}
            </section>
            <section id='aminities'>
                <Aminities />
            </section>
            <section id='interior'>
                <Interior/>
            </section>
        </div>
    )
}

export default HomePage