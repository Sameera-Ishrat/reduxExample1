import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import {FaShoppingCart} from 'react-icons/fa';

const Navbar = () => {

    const item = useSelector((state) => state.cart);
    // const item = useSelector((state) => state.cart.item);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className='navbar container'>
        <span className='reduxStore'>REDUX STORE</span>
        <div className='navigation'>
            <Link to="/">Home</Link>
            {/* <Link to="/cart" style={{position:'relative'}}>Cart</Link> */}
            <Link to='/cart'>
           <FaShoppingCart />
            </Link>
            {/* <span className='cartCount'>{item.length}</span> */}
            <span className='cartCount'>{totalQuantity}</span>
        </div>
        </div>
  )
}

export default Navbar