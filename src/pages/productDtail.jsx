import { guitarArray } from "../products/allProducts"
import { Navbar } from "./navbar";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/productSlice";
import { use, useState  } from "react";


export const ProductDetail = ()=>{
    const {id }= useParams()
    const guitar = guitarArray.find(g=> g.id === id )
    const dispatch = useDispatch()
     const onCartClick = (p) =>{
            dispatch(addToCart(p))
            confirm("Added to Cart")
        }
        const [mainImage,setmainImage] =  useState(guitar.images[0])
        const [isActive1,setisActive1] = useState(true)
        const [isActive2,setisActive2] = useState(false)
        const [isActive3,setisActive3] = useState(false)
    return(
        <>
        <Navbar/>
        <div className="main-product-detail" >
            <div className="left-side">
                <div className="main-img-container">
                     <img src={mainImage}/>
                     <div className="horizonatal-scroll-shower">
                        <span className="scroll-tracker"></span>
                        <span className="scroll-tracker"></span>
                        <span className="scroll-tracker"></span>
                     </div>
                </div>
                <div className="small-img-container">
                    <span className={isActive1 ? "img-1 active":"img-1"} onClick={()=>{setmainImage(guitar.images[0]),setisActive1(true),setisActive2(false),setisActive3(false)}}>
                        <img src={guitar.images[0]} />
                    </span>
                    <span className={isActive2 ? "img-2 active":"img-2"} onClick={()=>{setmainImage(guitar.images[1]),setisActive2(true),setisActive1(false),setisActive3(false)}}>
                        <img src={guitar.images[1]}/>
                    </span>
                    <span className={isActive3 ? "img-3 active":"img-3"} onClick={()=>{setmainImage(guitar.images[2]) , setisActive3(true),setisActive1(false) ,setisActive2(false)}}>
                        <img src={guitar.images[2]}/>
                    </span>
                </div>
               
            </div>
            <div className="right-side">
                <div className="productdetail">
               <p className="product-title t-40">{guitar.guitarName}</p>
               <p className="product-description">{guitar.description}</p>
               <div className="price-section">
                <span className="discount" >&#8595;{guitar.discount}%</span>
                <span className="rupees-icon">&#8377;</span>
               <span className="actual-price" >{guitar.actualPrice}</span>
               <span className="product-price-detail" >{guitar.price}</span>
               </div>
               
               </div>
               <div className="button-area">
                <button className="add-to-cart-detail"  onClick={()=>onCartClick(guitar)}>Add To Cart</button>
                <button className="buy-now" onClick={()=>alert("Sorry This Service is Unavaliable  ")}>Buy at &#8377;{guitar.price}</button>
            
               </div>
              
            </div>
            
        </div>
        </>
    )
}

