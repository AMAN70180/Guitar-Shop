import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    cartProduct : [],
    searchTerm:""
}

const productsSlice = createSlice({
    name: "cartProduct",
    initialState,
    reducers :{
        addToCart : (state,action) =>{
            const existingProuduct = state.cartProduct.find((item)=>
            item.id === action.payload.id)
            if(existingProuduct){
                existingProuduct.quantity += 1 
            }else{
            state.cartProduct.push({...action.payload,quantity:1})
            }
        },
        removeFromCart : (state,action)=>{
            const selctedItem =  state.cartProduct.find((item)=>
            item.id === action.payload.id)
            if(selctedItem.quantity === 1  ) state.cartProduct = state.cartProduct.filter((s)=>s.id !== action.payload.id)
            else selctedItem.quantity -= 1
        },
        searchTermSetter : (state,action)=>{
            state.searchTerm = action.payload ;
        }
    },
})

export const  {addToCart,removeFromCart,searchTermSetter} = productsSlice.actions
export default productsSlice.reducer
