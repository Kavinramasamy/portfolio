import React, { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AppContext } from "../App";

const Projects = () => {
  const { mode, textMode } = useContext(AppContext);
  return (
    <div className="container-fluid p-5">
      <div
        className="heading pt-5 text-start mb-5"
        style={{ marginLeft: "4%" }}
      >
        Projects
      </div>
      <div className="row justify-content-center" style={{ height: "100%" }}>
        <div className="col-md-4 " data-aos="fade-up" data-aos-duration="500">
          <div class={"card bg-" + mode}>
            <div className="card-img">
              <LazyLoadImage
                effect="blur"
                src="https://drive.google.com/thumbnail?export=view&id=1dAdKziRD2mCmZEFvnQbQIf-JadqkQXfH&sz=w10000"
                class="card-img-top"
                alt="urlshort"
              />
            </div>
            <div class="card-body">
              <h2 class={"card-title text-" + textMode}>FoodToken-Gen App</h2>
              <p class={"card-text text-" + textMode}>
                You can book a table number and get token for your ordered food in TokGen.in.
              </p>
              <div className="btn-row ">
                <a
                  href="https://food-token-generator-frontend-three.vercel.app/"
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
                <a
                  href="https://github.com/Kavinramasamy/food-tkn-gene-frntend"
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code FE
                </a>
                <a
                  href="https://new-project-0xul.onrender.com/"
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code BE
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 " data-aos="fade-up" data-aos-duration="500">
          <div class={"card bg-" + mode}>
            <div className="card-img">
              <LazyLoadImage
                effect="blur"
                src="https://drive.google.com/thumbnail?export=view&id=1UJxsbBbAKxiPzF_DYDvtJKFgjG4_mL-r&sz=w10000"
                class="card-img-top"
                alt="urlshort"
              />
            </div>
            <div class="card-body">
              <h2 class={"card-title text-" + textMode}>Rental products</h2>
              <p class={"card-text text-" + textMode}>
                You can use this website to take and buy a products for rent with affordable price.
              </p>
              <div className="btn-row ">
                <a
                  href="https://frontend-hackton-guvi.vercel.app/"
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
                <a
                  href="https://github.com/Kavinramasamy/frontend-hackton-guvi"
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code FE
                </a>
                <a
                  href="https://github.com/Kavinramasamy/backend--hackathon-project"
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code BE
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4" data-aos="fade-up" data-aos-duration="500">
          <div class={"card bg-" + mode}>
            <div className="card-img">
              <LazyLoadImage
                effect="blur"
                src="https://drive.google.com/thumbnail?export=view&id=1BN26OckfS6H8xbmR3At6A8B4AFL3Evpd&sz=w10000"
                class="card-img-top"
                alt="brewery"
              />
            </div>
            <div class="card-body">
              <h2 class={"card-title text-" + textMode}>Brewery App</h2>
              <p class={"card-text text-" + textMode}>
                You can find the brewery shop address and contact using this
                application.
              </p>
              <div className="btn-row ">
                <a
                  href="https://marvelous-brioche-d91299.netlify.app/"
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
                <a
                  href="https://github.com/Kavinramasamy/brewery-lists"
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code FE
                </a>
                <a
                  href="..."
                  class="btn btn-success mb-3 disabled"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code BE
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 " data-aos="fade-up" data-aos-duration="500">
          <div class={"card bg-" + mode}>
            <div className={"card-text text-" + textMode}>
              <LazyLoadImage
                effect="blur"
                src="https://drive.google.com/thumbnail?export=view&id=1op02MxrjgSxNnpFLDnL6LELw2jEOhJIR&sz=w10000"
                class="card-img-top"
                alt="urlshort"
              />
            </div>
            <div class="card-body">
              <h2 class={"card-title text-" + textMode}>URL Shortener App</h2>
              <p class={"card-text text-" + textMode}>
                You can shorten long url in this page for free. You just have to
                create a account in it.
              </p>
              <div className="btn-row ">
                <a
                  href="https://url-shortner-one-theta.vercel.app/"
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
                <a
                  href=" https://github.com/Kavinramasamy/url_shortner"
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code FE
                </a>
                <a
                  href=" https://github.com/Kavinramasamy/url-shortner-bend
                  "
                  class="btn btn-success mb-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code BE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
