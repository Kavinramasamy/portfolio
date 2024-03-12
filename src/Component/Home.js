import React from 'react';
import Typewriter from 'typewriter-effect';
import profile_img from './image/pic4.jpg';

const Home = () => {
  return (
    <div className='home text-center' style={{ height: "100vh", backgroundImage: `url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80")` }}>
      <div className='row'>

        <div className="col-md-4">
          <img
            className="profile-pic "
            src={profile_img}
            alt="profile_img"
          />
        </div>
        <div className='col-md-8 homepagetext'>

          <span className='paragra' style={{}}>
            Hi,I'm
            KAVIN </span>
          <div className='text'>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "Full Stack Developer"
                ],
              }} />
          </div>
        </div>

      </div><br></br>

      <a href="#contact" class="btn btn-warning "> Contact Me! </a>


    </div>

  )
}

export default Home