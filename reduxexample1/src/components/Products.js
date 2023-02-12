import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts, STATUS } from '../store/productSlice';

const Products = () => {

    const dispatch = useDispatch();

    // const [products,setProducts] = useState([]);
    const {status, data:products} = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(fetchProducts());
//      const fetchProducts = async() => {
//         try {
//             const response = await fetch("https://fakestoreapi.com/products");
//             const data = await response.json();
//             console.log(data);
//             setProducts(data);
//         }catch {
//           console.log('error')
//         }
   
//      }
//    fetchProducts();
    },[])

    const addHandler = (product) => {
dispatch(add(product));
    }

    if(status === STATUS.LOADING) {
        return <p style={{textAlign:"center"}}>LOADING...</p>
    }
    if(status === STATUS.ERROR) {
        return <p>Something went wrong</p>
    }

  return (
    <>
    <h2 className='container'>Products</h2>
    <div className="productsWrapper container">
        
    {products.map((product) => (
        <div className="card" key={product.id}>
            <img  className = "productImg" src={product.image} alt="" />
            <h4 className='productTitle'>{product.title}</h4>
            <h5 className='productPrice'>${product.price}</h5>
            <button className="btn" onClick={() => addHandler(product)}>
                Add to cart
            </button>
        </div>
                
    ))}  
</div>
</>
  )
}

export default Products