import React from 'react'
import './hero.css'

function Hero() {
  return (
    <div  id='hero'>
       <div className='container' >
            <h1 className='hero-title' >Building For Generations</h1>
            <a className='btn red waves-effect waves-light ' href="/properties">See Properties</a>
       </div>
    </div>
  )
}

export default Hero