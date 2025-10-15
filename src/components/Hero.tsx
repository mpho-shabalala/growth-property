
import { Link } from 'react-router-dom'
import './hero.css'

function Hero() {
  return (
    <div  id='hero'>
       <div className='container' >
            <h1 className='hero-title' >Building For Generations</h1>
            <Link className='btn red waves-effect waves-light ' to="/properties">See Properties</Link>
       </div>
    </div>
  )
}

export default Hero