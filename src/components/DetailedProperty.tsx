import React, { useState } from 'react'
import type  {PropertyType}  from '../types'
import './DetailedProperty.css'
interface PropertyCardProps {
  property: PropertyType | null; 
}

const DetailedProperty: React.FC<PropertyCardProps> = ({ property }) => {
  const [isImgOpen, setImgOpen] = useState(false);
  const toggleImg = () => {
    setImgOpen((prev) => !prev);
  };
  return (
    <div className='container detailed-property'>
        <h4>{property?.title} (<span>{property?.sold  ? 'Sold' : 'Available'}</span>)</h4>
        <div className="row">
            <div id="images" className="col s12 m6">
                <div className="row">
                     
                    {
                    property?.images.map((imgLink, i) => 
                        <>
                            <img onClick={toggleImg} key={i} className=' property-img col s12 m6' src={imgLink} />
                            <div className={`scale-transition ${isImgOpen ? ' block' : 'hidden scale-out'}`}>
                                <img onClick={toggleImg} key={i} className=' property-img col s12 m6' src={imgLink} />
                            </div>
                        </>
                    )
                }
                </div>
            </div>
            <div id="characteristics" className="col s12 m6">
                <h4>Characteristics</h4>
                <p>Price : R{property?.price.toLocaleString()}</p>
                <p>Location : {property?.location.address}, {property?.location.suburb}, {property?.location.city}</p>
                <p>Bedrooms: {property?.bedrooms}</p>
                <p>Bathrooms: {property?.bathrooms}</p>
                <p>Size(per Square meter): {property?.sizeSqm}m^2</p>


            </div>
        </div>
        <div className="row">
            <h4>Description</h4>
            <p>{property?.description
            }</p>
        </div>
    </div>
  )
}

export default DetailedProperty