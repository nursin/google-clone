import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HomeStyles.css'

function Home() {
    return (
        <div className='home'>
            <h1>Homepage</h1>
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to='about'>About</Link>
                    <Link to='about'>Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to='about'>Gmail</Link>
                    <Link to='about'>Images</Link>
                </div>
            </div>
            <div className="home__body">

            </div>
        </div>
    )
}

export default Home
