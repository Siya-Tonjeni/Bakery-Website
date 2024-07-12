import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

function Menu({menu}){
    return(
        <div>
            <div className='nav-bar'><NavBar/></div>
            <div className='menu-container'>
            {menu && (
    <ul className="row" style={{listStyle: "none"}}>
      {menu.map((menus) => (
        <li key={menus.id} className="col-md-4">
          <RecipeCard key={menus.id} menus={menus} />
          
        </li>
      ))}
    </ul>
  )}
            </div>
            <Footer/>
        </div>
    );
};

function RecipeCard({menus}) {
    const myStyle= {
      position: "relative",
      padding: "0",
      margin: "0",
      alignItems: "center",
    }
  
      return (
        <div className="container" style={myStyle}>
        <div className="card" style={{padding: "0px", width: "90%", height: "90%", margin: "0"}}>
          <img src={menus.image} className="card-img-top" alt={menus.title} style={{width: "auto", height: "50vh"}} />
          <div className="card-body">
            <h5 className="card-title">{menus.title}</h5>
            <p className="card-text">{menus.price}</p>
          </div>
        </div>
        </div>
      );
    }

export default Menu;