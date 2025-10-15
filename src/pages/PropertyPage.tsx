import  { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Chatbot from '../components/Chatbot'
import {useProperties} from '../contexts/PropertiesContext'
import { useLocation } from 'react-router-dom'
import type { PropertyType } from '../types'
import DetailedProperty from '../components/DetailedProperty'

function PropertyPage() {
 const location = useLocation();
 const propertyID = location.pathname.replace('/properties/', '').toString();
 const {getProperty,} = useProperties();
 const [property, setProperty] = useState<PropertyType | null>(null);

 useEffect(() => {
    const resolveProperty = async () => {
        const prpt = await getProperty(propertyID);
        console.log(prpt)
        setProperty(prpt);
    }

    resolveProperty();
    
 }, [propertyID])

  return (
    <>
    <Header/>
    <Chatbot/>
    <DetailedProperty property={property}/>
    <Footer/>
    </>
  )
}

export default PropertyPage