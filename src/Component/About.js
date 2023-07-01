import React from 'react'

const About = () => {
  return (
    <div style={{ height: "100%", backgroundColor: "black" }}>
      <div className="container">
        <div className="row pt-5">
          <div className="heading p-3 active text-light"><h2>About Me</h2></div>

          <div className="col-md-5" style={{ overflow: "hidden" }}>
            <img
              data-aos="fade-left"
              data-aos-duration="1000"
              style={{ height: "90%", width: "90%" }}
              src="https://e1.pxfuel.com/desktop-wallpaper/358/820/desktop-wallpaper-what-does-a-full-mern-stack.jpg"
              alt="images"
            />
          </div>
          <div
            className="col-md-7 text-start objective"
            style={{ overflow: "hidden" }}>
            <div
              data-aos-duration="3000"
              data-aos="fade-right"> <br></br>
              <p className='active text-light'>  <i class="fa fa-desktop mx-3"></i>
                My name is Kavin. I'm an MERN-Full Stack Developer from Tamilnadu,India
              </p><br></br>
              <p className='active text-light'> <i class="fa fa-desktop mx-3"></i>
                I'm an passinated developer always challenging myself to learn new skills
                 in web developement everyday and I amalso hard worker and team player.</p><br></br>

                 <p className='active text-light'> <i class="fa fa-desktop mx-3"></i>
                  I am looking for a challenging opportunity that will enable me to use 
                 my skills and abilites to achieve a challenging goals.</p>
             

            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default About