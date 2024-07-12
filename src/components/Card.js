import React from 'react';

function Card({menus}){
    const [showPrice, setShowPrice] = React.useState(false);

    const handleMouseEnter = () => setShowPrice(true);
    const handleMouseLeave = () => setShowPrice(false);

    return(
        <div className='card' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={menus.image} alt={menus.title}/>
            <p className='card-title'>{menus.title}</p>
            {showPrice && <p className='card-price'>${menus.price.toFixed(2)}</p>}
        </div>
    );
};

export default Card;