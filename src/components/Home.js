import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from "./NavBar";
import video from "./assets/cover.mp4";
import Footer from "./Footer";

const Home = () => {
    return(
        <div>
        <div className='nav-bar'><NavBar/></div>  
        <div className='home-container'>
            <video src={video} autoPlay muted loop></video>
            <div className='content'>
                <h1>Mood Bakery</h1>
                <p>All your delicate delicious fresh goodness, <br/> from French pastries and more..</p>
                <button className='btn btn-primary'><Link to="/menu">Show Menu</Link></button>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Home;