import { useState ,useEffect } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { searchTermSetter } from "../slices/productSlice"
export const Navbar = ()=>{
    const navigate = useNavigate()
   
    const cartClick = ()=>{
        navigate("/cart")
    }
    const dispatch = useDispatch()
    const [inputValue,setInputValue] = useState("")
    
    useEffect(() => {
        
        const timer = setTimeout(() => {
            dispatch(searchTermSetter(inputValue));
        }, 300);
        return () => clearTimeout(timer);
    }, [inputValue, dispatch]);
    const location = useLocation()
    return(
        <>
        <div className="nav-box">
            
            <span className="brand-name"> Guitar Shop </span>
            { location.pathname === "/" &&
            <input type="search" placeholder="Search for Guitar... "
             className="search-bar"
             onChange={(e)=>setInputValue(e.target.value)}
            />
}           
            <div className="btn-section">
                <button className="btn" onClick={()=>alert("This option is not avaliable yet ")}> Sign In</button>
            <button className="btn"  onClick={()=>alert("This option is not avaliable yet ")}> Log In</button>
            <button className="btn cart" onClick={cartClick}> Go To cart </button>
            </div>
            
        </div>
        </>
    )
}