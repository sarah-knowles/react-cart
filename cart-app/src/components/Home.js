import React from 'react';
import dress1 from '../images/dress1.jpg';
import dress2 from '../images/dress2.jpg';
import dress3 from '../images/dress3.jpg';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';


const Home = (props) => {
  return (
    <div className='container'>
      <div className='image'>
        <img src={dress1} alt='not loaded' />
        <h3>Cue dress</h3>
        <h4>$15.00</h4>
        <a onClick={() => props.addBasket('cueDress1')} className='addToCart cart1' href='#'>Add to Cart</a>
      </div>
      <div className='image'>
        <img src={dress2} alt='not loaded' />
        <h3>Cue dress</h3>
        <h4>$12.00</h4>
        <a onClick={() => props.addBasket('cueDress2')} className='addToCart cart2' href='#'>Add to Cart</a>
      </div>
      <div className='image'>
        <img src={dress3} alt='not loaded' />
        <h3>Cue dress</h3>
        <h4>$12.00</h4>
        <a onClick={() => props.addBasket('cueDress3')} className='addToCart cart3' href='#'>Add to Cart</a>
      </div>
    </div>
  );
}


export default connect(null, { addBasket })(Home);