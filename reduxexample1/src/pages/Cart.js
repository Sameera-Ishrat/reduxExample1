import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {

    const dispatch = useDispatch();

    const products = useSelector((state) => state.cart);

const deleteHandler = (productId) => {
dispatch(remove(productId));
}

  return (
    <div className='cartWrapper container'>
    <h3>Items in your cart!</h3>
   {products.map((product) => (
    <div className="cartCard" key={product.id}>
        
        <img  className = "productImg" src={product.image} alt="" />
        <h4 className='productTitle'>{product.title}</h4>
        
        <div>
        <h5 className='productPrice'>${product.price}</h5>
    <button className="btn" onClick={() => deleteHandler(product.id)}>
        Remove
    </button>
        </div>
  
</div>
   ))}
    

    </div>
  )
}

export default Cart