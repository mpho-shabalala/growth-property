import './AboutAgent.css'

function AboutAgent() {
  return (
    <div id='about-agent-container' className='container row'>
        
        <div  className='col s12  m8 '>
            <h4>Meet The Agent</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, quod. Dolores fugit facilis est quam nemo, non magnam quo obcaecati reiciendis. Doloribus doloremque asperiores,
                 ex nobis cupiditate minus natus, ullam eligendi repudiandae repellendus ipsa harum!
                  Ullam repellat in animi reprehenderit!
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ratione exercitationem quos iusto necessitatibus placeat molestias enim, ea laudantium odio?</p>
        </div>

        <div  className='col s12 m4 '>
            <div id='about-img-container'>
                <img id='about-agent-img' src="https://th.bing.com/th/id/R.a530435466442516cc1c5e00935caa42?rik=GKJMtO4C14wkQw&pid=ImgRaw&r=0" alt="" />
            </div>
            
        </div>
    </div>
  )
}

export default AboutAgent