import Chatbot from '../components/Chatbot'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Form from '../components/Form'
import AboutAgent from '../components/AboutAgent'
import Footer from '../components/Footer'

function Homepage() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <AboutAgent/>
      <Form/>
      <Chatbot/>
      <Footer/>
    </>
  )
}

export default Homepage