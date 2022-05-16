 import { createContext,useReducer, useContext, useState,useEffect } from "react"
import { reducer } from './Reducer'
import axios from "axios";
import { productReducer } from "./Reducer";


const url = 'http://127.0.0.1:8000/api/items/'
 const cartContext = createContext();

 const Context = ({ children }) => {
     const [products,setProducts] = useState([])
     const [state,dispatch] = useReducer(reducer,{
         products: products,
         cart: []
     });

     const [productState,productDispatch] = useReducer(productReducer,{
         searchQuery: ''
     })


    useEffect(() =>{
        axios.get(url)
        .then((res) =>{
            setProducts(res.data)
        })
    },[])


   return (
     <cartContext.Provider value={{
         state,
         products,
         dispatch,
         productState,
         productDispatch
     }}>
         {children  }
     </cartContext.Provider>
   )
 } 
 
 export default Context

 export const CartState = () =>{
     return useContext(cartContext)

 }