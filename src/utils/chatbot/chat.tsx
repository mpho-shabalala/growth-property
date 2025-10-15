import { getAI, getGenerativeModel, GoogleAIBackend} from 'firebase/ai'
import {app, db} from '../firebase/firebase'
import { collection, getDocs} from 'firebase/firestore';
import type { LocationType } from '../../types';
const ai = getAI(app, {backend: new GoogleAIBackend})

const model = getGenerativeModel(ai, { model: "gemini-2.5-flash" })

export  const getCities = async () => {
  const snapshot = await getDocs(collection(db, "property-data"));
  const citiesSet = new Set<string>();
  snapshot.docs.forEach(doc => {
    const data = doc.data() as { location?: LocationType};
    if (data.location?.city) citiesSet.add(data.location?.city
    );
  });

  const cities = Array.from(citiesSet);
  const citiesText = cities.join(', '); 
  return citiesText;
};
    
export const chat = async (input: string) => {
    const prompt = `
        You are a property website assistant.
        Available locations: ${await getCities()}.
        Agent contact: +27-66-123-4567 or agent@propertysite.com.
        You can help users with:
        - Property availability and locations
        - Booking a one-on-one chat online (9 AM - 6 PM, Mon-Fri)
        - Scheduling a phone call (10 AM - 5 PM, Mon-Sat)
        - Arranging in-person property visits (9 AM - 4 PM, Mon-Sat)
    
        If you do not know the answer, respond with:
        "Let me connect you to an agent." and include HTML links:
        <a href="mailto:agent@propertysite.com">Email Agent</a>
        <a href="https://wa.me/27661234567">Chat on WhatsApp</a>
        <a href="https://propertysite.com/main-form">Fill out main contact form</a>
    
        User: ${input}
        `; 
    try{
        const result = await model.generateContent(prompt)
        const resText = result.response?.text();
        
        return {
            httpCode: 200,
            status: 'success',
            err_message: '',
            statusCode:'SUCCESS',
            data:{
                message: resText
            }
        }
    }catch(err){
        return {
            httpCode: 500,
            status: 'fail',
            err_message: err?.toString(),
            statusCode:'ERROR',
            data:{
                message: null
            }
        }
    }

}
