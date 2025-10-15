
import { Link } from 'react-router-dom'
import type { PropertyType } from '../types'
import './Property.css';

function Property({property}: {property : PropertyType}) {
  return (
    <Link className='col s12 m4'
        key={property.id}
        to={{pathname: `/properties/${property.id}`}}
    >
        <div className='card'>
          <div className='card-image'>
            <img src={property.images[0]} alt="image property here" />
            <div className=' right'>
            {property.sold ? (
            <span className="badge red ">Sold</span>
            ) : (
            <span className="badge green ">Available</span>
            )}
          </div>
        </div>
          
          <div className='card-content'>
            <p>{property.location.address}</p>
            <h3>R{property.price.toLocaleString()}</h3>
          </div>
        
        </div>
    </Link>
  )
}

export default Property