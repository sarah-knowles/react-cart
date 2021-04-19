import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';


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
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li className='cart'><a href='#'>Cart <span>{props.basketProps.basketContent}</span></a></li>
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