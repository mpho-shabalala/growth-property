import React from 'react'
import { useProperties } from '../contexts/PropertiesContext'
import Property from './Property';
import './PropertyList.css'

function PropertyList() {
    const {properties} = useProperties();

  return (
    <div className="properties container">
      <h2 className='title'>Property List</h2>
        <div className="row">
          {properties.map((property) => (
            <Property key={property.id} property={property} />
        ))}
        </div>
        
    </div>
  )
}

export default PropertyList