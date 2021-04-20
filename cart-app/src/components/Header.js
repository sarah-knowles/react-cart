import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';
import { Link } from 'react-router-dom';


function Header(props) {
 
  useEffect(() => {
    getNumbers();
  }, [])

  return (
    <header className='heading'>
      <div className='overlay'>
        <nav className='nav'>
          <h2>Shop</h2>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='about'>About</Link></li>
            <li className='cart'><Link to='cart'>Cart <span>{props.basketProps.basketContent}</span></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

const mapStateToProps = state => ({
  basketProps: state.basketState
})

export default connect(mapStateToProps, { getNumbers })(Header);