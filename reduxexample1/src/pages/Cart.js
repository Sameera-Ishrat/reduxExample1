import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, add } from "../store/cartSlice";
import Card from "../components/Card";
const Cart = () => {
  const dispatch = useDispatch();

  // const products = useSelector((state) => state.cart);
  const products = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  console.log(products);

  const addItemHandler = (product) => {
    dispatch(
      add({
        id:product.id,
        title:product.title,
        price:product.price,
        quantity:product.quantity,
        image:product.image,
        
        // ...product
      })
      // add({...product})
    );
  };

  // const deleteHandler = (productId) => {
  // dispatch(remove(productId));
  // }
  const deleteHandler = (id) => {
    dispatch(remove(id));
  };

  return (
    <>
      <div className="cartWrapper container">
        <h3 style={{textAlign:"center"}}>Items in your cart!</h3>
        {products.map((product) => (
          <>
            <Card>
              <div className="cartCard" key={product.id}>
                <img className="productImg" src={product.image} alt="" />
                {/* <h4 className='productTitle'>{product.title}</h4> */}
                <h4 className="productTitle">{product.name}</h4>
                <span className="quantity">
                  {" "}
                  X <span>{product.quantity}</span>
                </span>
                <div className="actions">
                  <button onClick={() => addItemHandler(product)} className="actionBtn">+</button>
                  <button onClick={() => deleteHandler(product.id)} className="actionBtn">-</button>
                </div>
                <div>
                  <h5 className="productPrice">${product.totalPrice.toFixed(2)}</h5>

                  {/* <button
                    className="btn"
                    onClick={() => deleteHandler(product.id)}
                  >
                    Remove
                  </button> */}
                </div>
              </div>
            </Card>
          </>
        ))}
      </div>
      {/* <Card> */}
      <section className="total">
      <div className="totalAmount">
          <h3 className="totalText">Total Amount:</h3>
          <div className="totalPrice">${totalAmount.toFixed(2)}</div>
        </div>
      </section>
        
      {/* </Card> */}
    </>
  );
};

export default Cart;
