import React from 'react'
import rental_img from './image/pic.png';
import brewery_img from './image/pic2.png';
import tokgen_img from './image/pic3.png';

const Project = () => {
  return (
    <div style={{ backgroundColor: "black" }}> <h4 className='active text-light'>Project</h4>
      <div className='container'>
        <div className='row'>
          <div class="card col-md-4 p-3 mx-3 mb-3 " style={{ width: "18rem" }}>
            <img src={brewery_img} alt='brewery-img' />
            <div class="card-body">
              <h5 class="card-title text-dark">Brewery List</h5>
              <p class="card-text active text-dark">You can find the brewery shop address and contact using this application.</p>
              <a href="https://marvelous-brioche-d91299.netlify.app/" class="btn btn-success mb-2" style={{ width: "100%" }}>Visit</a>
              <a href="https://github.com/Kavinramasamy/brewery-lists" class="btn btn-success mb-2" style={{ width: "100%" }}>Front-end source code</a>
              <a href="" class="btn btn-danger disabled" style={{ width: "100%" }}>Back-end source code</a>
            </div>
          </div>
          <div class="card col-md-4 p-3 mx-3 mb-3" style={{ width: "18rem" }}>
            <img src={rental_img} alt='rental-image' />
            <div class="card-body">
              <h5 class="card-title">Rental products</h5>
              <p class="card-text">You can use this website to take and buy a products for rent with affordable price.</p>
              <a href="https://frontend-hackton-guvi.vercel.app/" class="btn btn-success mb-2" style={{ width: "100%" }}>Visit</a>
              <a href="https://github.com/Kavinramasamy/frontend-hackton-guvi" class="btn btn-success mb-2" style={{ width: "100%" }}>Front-end source code</a>
              <a href="https://github.com/Kavinramasamy/backend--hackathon-project" class="btn btn-danger" style={{ width: "100%" }}>Back-end source code</a>            </div>
          </div>
          <div class="card col-md-4 p-3 mx-3 mb-3" style={{ width: "18rem" }}>
            <img src={tokgen_img} alt='tokgen-image' />
            <div class="card-body">
              <h5 class="card-title">FoodToken-Gen App</h5>
              <p class="card-text">You can book a table number and get token for your ordered food in TokGen.in</p>
              <a href="https://food-token-generator-frontend-three.vercel.app/" class="btn btn-success mb-2" style={{ width: "100%" }}>Visit</a>
              <a href="https://github.com/Kavinramasamy/food-tkn-gene-frntend" class="btn btn-success mb-2" style={{ width: "100%" }}>Front-end source code</a>
              <a href="https://new-project-0xul.onrender.com/" class="btn btn-danger mb-2" style={{ width: "100%" }}>Back-end source code</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Project