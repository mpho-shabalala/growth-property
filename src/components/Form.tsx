import './Form.css';
import {collection, addDoc} from 'firebase/firestore';
import {db} from '../utils/firebase/firebase';
import { useEffect, useState } from 'react';
import Status from './status';



function Form() {
  const [form, setForm] = useState({
    firstname:'',
    lastname:'',
    contact:'',
    email:'',
    message:''
  });

  const [ submitStatus, setSubmitStatus] = useState({
    status: false,
    statusText: ''
  })

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setForm({...form, [e.target.name]: e.target.value});
}

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try{
    if(!form.firstname || !form.lastname || !form.contact || !form.email || !form.message){
      setSubmitStatus({status: false, statusText: 'Please fill in all fields'});
      return;
    }
    await addDoc(collection(db, 'enquiries'), {
      firstname: form.firstname,
      lastname: form.lastname,
      contact: form.contact,
      email: form.email,
      message: form.message,
      createdAt: new Date()
    });
    setSubmitStatus({status: true, statusText: 'Form submitted successfully'});
    setForm({
    firstname:'',
    lastname:'',
    contact:'',
    email:'',
    message:''
  })
  }catch(err: any){
    setSubmitStatus({status: false, statusText: err.message || 'Error submitting form'});
  }
}

//clear status after 10 seconds
        useEffect(() => {
            setTimeout(() => {
                setSubmitStatus({status: false, statusText: ''})
            }, 10000);
        }, [submitStatus])




  return (
    <div id="form" className="container">
       {submitStatus.statusText != ''?
        <Status status={submitStatus.status} statusText={submitStatus.statusText}/>
        :
         ''
      }
      <div  className="row">

         <div id="main-img-container" className="col l6 hide-on-small-only">
          <div id="internal-form-container" className="">
            <img
              id="form-img"
              className=""
              src="https://images.pexels.com/photos/8048876/pexels-photo-8048876.jpeg"
              alt="Form illustration"
            />
          </div>
        </div>
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="col s12 l6">
          <h4>Get in Touch</h4>
          <div className="row">
            <div className="input-field col s12">
              <input 
                id="first_name" 
                type="text" 
                className="validate"
                name="firstname"
                onChange={handleChange}
                value={form.firstname}
                />
              <label htmlFor="first_name">First Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input 
                id="last_name" 
                type="text" 
                className="validate"
                name="lastname"
                onChange={handleChange}
                value={form.lastname}
                />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input 
                id="contact" 
                type="text" 
                className="validate"
                name="contact"
                onChange={handleChange}
                value={form.contact}
                />
              <label htmlFor="contact">Contact</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input 
                id="email" 
                type="email" 
                className="validate"
                name="email"
                onChange={handleChange}
                value={form.email}
                />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
        <div className="input-field col s12">
          <textarea 
            id="textarea1" 
            className="materialize-textarea"
            name="message"
            onChange={handleChange}
                value={form.message}
            ></textarea>
          <label htmlFor="textarea1">Message</label>
        </div>
      </div>
          <button type='submit'  className="btn red waves-effect submit">
            Submit
          </button>
        </form>
      </div>
    </div>
    
  )
}

export default Form
