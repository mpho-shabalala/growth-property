import { Link } from 'react-router-dom'
import './About.css'
function About() {
  return (
    <div className='container'>
       
        <div className='row' id="about-content">
            <div id='about-img-container' className='col s12 m6'>
                <img id='about-img' src="https://architecturebeast.com/wp-content/uploads/2015/05/Contemporary_House_in_Blair_Athol_featured_on_architecture_beast_-6.jpg" alt="" />
            </div>
            <div className='col s12 m6' id='about-text'>
                 <h4>About </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse deleniti nam accusantium amet! Veritatis, 
                aperiam delectus recusandae explicabo maiores totam mollitia eaque sequi error sit reprehenderit blanditiis eligendi
                 eius a fuga nihil facere pariatur cumque temporibus. Ipsam sequi facere dolore repellendus, totam quaerat fugiat 
                 voluptatum laborum minima illo fuga iusto provident illum officia inventore consectetur hic magni commodi eaque accusamus.</p>
                 <Link to="/contact" className="btn blue waves-effect ">Contact us</Link>
            </div>
        </div>
    </div>
  )
}

export default About