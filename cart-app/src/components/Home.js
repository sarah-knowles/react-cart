import React from 'react';
import dress1 from '../images/dress1.jpg';
import dress2 from '../images/dress2.jpg';
import dress3 from '../images/dress3.jpg';


function Home() {
  return (
    <div className='container'>
      <div className='image'>
        <img src={dress1} alt='image not loaded' />
        <h3>Item</h3>
        <h4>$00.00</h4>
        <a href='#'>Add to Cart</a>
      </div>
      <div className='image'>
        <img src={dress2} alt='image not loaded' />
        <h3>Item</h3>
        <h4>$00.00</h4>
        <a href='#'>Add to Cart</a>
      </div>
      <div className='image'>
        <img src={dress3} alt='image not loaded' />
        <h3>Item</h3>
        <h4>$00.00</h4>
        <a href='#'>Add to Cart</a>
      </div>

    </div>
  );
}


export default Home;