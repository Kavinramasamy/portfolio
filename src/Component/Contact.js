import React from 'react'

const Contact = () => {
  return (
    <div className='contact' ><h4 className='active text-light'>Contact</h4>
      <div className="container">
        <div className='row'>
          <div class="card col-md-10 " style={{ width: "70rem" }}>
            <div class="card-body">
              < h3 class="card-title text-center mb-5" style={{color:"green"}}>Use this information to contact me</h3>
              <h4 className='mail p-3 pl-3'> <i class="fa fa-envelope" aria-hidden="true"></i>  Email: <span style={{color:"blue"}}>kavinramasamymech@gmail.com</span></h4>
              <h4 className='con-num p-3 pl-3'> <i class="fa fa-phone" aria-hidden="true"></i>  Contact number: <span style={{color:"blue"}}>6379233604</span></h4>
              <h4 className='address p-3 pl-3'> <i class="fa fa-home" aria-hidden="true"></i>  Address:<br></br><span style={{color:"blue"}}>
                144,<br></br>
                Kattur,<br></br>
                Punjai Kalamangalam,<br></br>
                Erode,<br></br>
                Tamil Nadu,<br></br>
                Pin:638153.
              </span></h4>
              <div className="container">
                <div className='row'>
                  <div className='col-md-10 text-start pb-1'>
                    <i class="fa-brands fa-linkedin"></i><span>Linked in</span><br></br>
                    <a href='https://www.linkedin.com/in/kavin-ramasamy-55909822a/' class="text-center" target='blank'>https://www.linkedin.com/in/kavin-ramasamy-55909822a/</a>

                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
        </div>
      </div>
     

      )
}

      export default Contact