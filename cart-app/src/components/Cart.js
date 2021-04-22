
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { productQuantity } from '../actions/productQuantity';
import dress1 from '../images/dress1.jpg';
import dress2 from '../images/dress2.jpg';
import dress3 from '../images/dress3.jpg';


function Cart({ basketProps, productQuantity }) {
  let productsInCart = [];

  Object.keys(basketProps.products).forEach(function(item) {
    if (basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item])
    }
    console.log('productsInCart', productsInCart);
  })


  const productImages = (product) => {
    if (product.tagName === 'dress1') {
      return dress1;
    } else if (product.tagName === 'dress2') {
      return dress2;
    } else if (product.tagName === 'dress3') {
      return dress3;
    }
  }
 
  productsInCart = productsInCart.map((product, index) => {
    return (
      <Fragment key={index}>
        <div className='product'><img src={productImages(product)} alt='dress' />
          <span className='sm-hide'>{product.name}</span>
        </div>
        <div className='price sm-hide'>${product.price}:00</div>
        <div className='quantity'>
          <ion-icon className='decrease' name='arrow-back-circle-outline' onClick={() => productQuantity('decrease', product.tagName)}></ion-icon>
          <span>{product.amount}</span>
          <ion-icon className='increase' name='arrow-forward-circle-outline' onClick={() => productQuantity('increase', product.tagName)}></ion-icon>
        </div>
        <div className='total'>${(product.amount * product.price)}:00</div>
      </Fragment>
    )
  });
  console.log('basketProps', basketProps)
  return (
    <div className='products-container'>
      <div className='product-header'>
        <h5 className='product-title'>Product</h5>
        <h5 className='price'>Price</h5>
        <h5 className='quantity'>Quantity</h5>
        <h5 className='total'>Total</h5>
      </div>
      <div className='products'>
        {productsInCart}
      </div>
      <div className='basketTotalContainer'>
        <h4 className='basketTotalTitle'>Cart Total</h4>
        <h4 className='basketTotal'>$ {basketProps.cartCost}:00</h4>
      </div>
    </div>
  )
}


const mapStateToProps = state => ({
  basketProps: state.basketState
})

export default connect(mapStateToProps, { productQuantity })(Cart);