import { guitarArray } from "../products/allProducts"
import { Navbar } from '../pages/navbar'
import { useNavigate } from "react-router-dom"
import { useDispatch,useSelector } from "react-redux"
import { addToCart } from "../slices/productSlice"
export const Home = ()=>{ 
    const searchTerm = useSelector(state=>state.cartProduct.searchTerm) || " ";
    const filteredGuitar = guitarArray.filter((guitar)=>
    guitar.guitarName.toLowerCase().includes(searchTerm.toLowerCase()))

    const navigate = useNavigate()
    const onProductClick = (id)=>{
        navigate(`/productds/${id}`)
    }
    const dispatch = useDispatch() ;
    const onCartClick = (p) =>{
        dispatch(addToCart(p))
        confirm("Added to Cart")
    }
    


    return (
        <>
        <Navbar/>
          <div  className="main">
        { 
        filteredGuitar?.length > 0 && filteredGuitar.map((product)=>(
          
                <div  className="p-card" key={product.id}>
                    <div className="img-container">
                        <img src={product.images[0]}/>
                    </div>
                     
                <p className="product-title" onClick={()=>onProductClick(product.id)}>{product.guitarName}</p>
                <p className="product-price"> &#8377;{product.price}</p>
                <button  className="add-to-cart-btn" onClick={()=>onCartClick(product)}>Add To Cart </button>
            
                </div>
               
            
            
            
        ))
        }
        </div>
        </>
    )
}
