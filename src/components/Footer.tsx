import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";
import './Footer.css';


function Footer() {
  return (
    <div className='footer'>
        <div className="row container">
            <ul className="col m4 s12">
                <h4>Navigation</h4>
                <li><a href="#">Home</a></li>
                <li><a href="#">Properties</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Form</a></li>
            </ul>

            <ul className="col m4 s12">
                <h4>Socials</h4>
                <div id='socials'>
                    <li>
                    <a href="https://facebook.com" target="_blank" className="btn blue darken-4 waves-effect waves-light">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/1234567890" target="_blank" className="btn green darken-1 waves-effect waves-light">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </li>
                <li>
                    <a href="mailto:someone@example.com" target="_blank" className="btn red darken-1 waves-effect waves-light">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </li>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Footer