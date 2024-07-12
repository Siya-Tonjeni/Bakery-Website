import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/Home';
import AboutPage from './components/About';
import MenuPage from './components/Menu';
import { useState } from 'react';

//Menu objects here (image, title, price) 
const menu = [
  {
    id:1,
    image: "https://i.pinimg.com/564x/84/3b/f0/843bf0ee789530b80ea000596ddbeff7.jpg",
    title: "Cherry Cheese Danish",
    price: 29.99, 
  },
  {
    id:2,
    image: "https://i.pinimg.com/564x/6d/5e/5b/6d5e5b27ec9fcd8c0a7784eea39fd01d.jpg",
    title: "Croissants",
    price: 19.99, 
  },
  {
    id:3,
    image: "https://i.pinimg.com/564x/d0/cd/1e/d0cd1e0c082c8cdbe8920d2654fecd84.jpg",
    title: "Profiteroles",
    price: 34.99, 
  },
  {
    id:4,
    image: "https://i.pinimg.com/564x/8d/e6/6f/8de66f15b79810efc95e8b21f137b036.jpg",
    title: "Churro Cruffins",
    price: 24.99, 
  },
  {
    id:5,
    image: "https://i.pinimg.com/564x/7c/f1/bd/7cf1bd97a6605b78cd52c45913a3e32d.jpg",
    title: "Meringue Tart",
    price: 44.99, 
  },
]

function App() {
  const [menuList, setMenuList] = useState(menu);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/menu" element={<MenuPage menu={menuList}/>}/>
      </Routes>
    </Router>

  );
}

export default App;
