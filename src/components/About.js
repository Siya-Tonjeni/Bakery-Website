import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from "./NavBar";
import Footer from "./Footer";

const About = () => {
    return(
        <div>
        <div className='nav-bar'><NavBar/></div>
        <div className='about-container'>
        <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="https://i.pinimg.com/564x/10/19/52/101952cf3a24edc7909dc6a54a303208.jpg" class="d-block mx-lg-auto img-fluid" alt="Baker -Image" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">About Mood Bakery</h1>
        <p class="lead">We are masters in innovative allergen-safe baking solutions. Our premium mixes have been designed with you, the food service chef in mind. They are foundational tools that have been created to take the guesswork out of allergen-safe baking.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-dark btn-lg px-4 me-md-2"><Link to="/menu">Menu</Link></button>
        </div>
      </div>
    </div>
  </div>
        </div>
        <Footer/>
        </div>
    );
};

export default About;