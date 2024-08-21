
import { createContext, useEffect, useState } from "react"

export const ShopContext = createContext();

export const ShopContextProvider = ({children})=>{
    const [data, setData] = useState([])
    const[singleProduct, setSingleProduct] = useState()

  useEffect(() => {
    const fetchData=async()=>{

        const api = await fetch('https://fakestoreapi.com/products')
        const resData = await api.json();
        setData(resData.slice(0, 12))
    }
        fetchData()
  }, [])
    return (
    <ShopContext.Provider value={{data, setData, singleProduct, setSingleProduct}}>
        {children}
    </ShopContext.Provider>
    )}