import { Navbar } from "./navbar"
import { useSelector ,useDispatch} from "react-redux"
import { removeFromCart } from "../slices/productSlice"
import { useNavigate } from "react-router-dom"


export const Cart = ()=>{
    const state = useSelector(state=>state.cartProduct.cartProduct )
    const dispatch = useDispatch()
    const navigate = useNavigate()
     const onProductClick = (id)=>{
        navigate(`/productds/${id}`)
    }
    
    let totalPrice = state.reduce((sum,c)=>sum +(c.price *c.quantity),0 )
    let totalActulPrice = state.reduce((sum,c)=>sum +(c.actualPrice*c.quantity),0 )
    let discount = totalActulPrice - totalPrice 
   
    return(<>
     <Navbar/>
     { 
     state?.length > 0 &&state.map((s,i)=>(
      <>
      <div className="cart-product-card" key={i}>
        <div className="cart-image-container">
          
        <img src={s.images[0]}/>
        </div>
        <div className="cart-product-detail">
          <h1 className="product-title t-40" onClick={()=>onProductClick(s.id) } >{s.guitarName}</h1>
        <div className="price-section">
                <span className="discount" >&#8595;{s.discount}%</span>
                <span className="rupees-icon">&#8377;</span>
               <span className="actual-price" >{s.actualPrice}</span>
               <span className="product-price-detail" >{s.price}</span>
               <p className="qyt">Qyt : {s.quantity}</p>
               </div>
        </div>
        <div className="button-section">
          <button className="buy-now" onClick={()=>alert("Sorry This Service is Unavaliable  ")}>Buy Now </button>
          <button className="remove-from-cart" onClick={()=>dispatch(removeFromCart(s))}>Remove From Cart </button>
        </div>
        
      </div>
      </>
     ))
    
      }
      <div className={state.length > 0 ? "cart-total-price" : "hidden"}>
         <p>Total Price :{totalActulPrice}</p>
          <p>Discount : -{discount}</p>
        <p>Amount to be paid  :{totalPrice}</p>
        <button className="proceed-to-buy" onClick={()=>alert("Sorry This Service is Unavaliable  ")}> Proceed To Buy </button>
       
      </div>
     
      
   
   
    </>
    )
}