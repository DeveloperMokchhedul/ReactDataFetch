import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { ShopContext } from "../context/Shop";

function Product() {
  const { singleProduct, setSingleProduct } = useContext(ShopContext)
  const { productId } = useParams();
  const fetchData = async () => {
    const api = await fetch(`https://fakestoreapi.com/products/${productId}`)
    const resData = await api.json()
    setSingleProduct(resData)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
    <div className="container mx-auto grid grid-cols-12 justify-center items-center my-20 bg-slate-200 p-10 ">
      <div className="col-span-12 md:col-span-6">
        <img className="w-80 flex mx-auto rounded-3xl" src={singleProduct?.image} alt="" />
      </div>
      <div className="col-span-12 md:col-span-6">
        <h1 className="text-sm md:text-xl"><span className="bg-blue-50 px-5 ">Product title</span> : {singleProduct?.title}</h1>
        <p className="text-sm md:text-xl"><span className="bg-blue-50 px-5 ">Product Category</span> : {singleProduct?.category}</p>
        <p className="text-sm md:text-xl"><span className="bg-blue-50 px-5 ">Rating</span> : {singleProduct?.rating.rate}</p>
        <p className="text-sm md:text-xl"><span className="bg-blue-50 px-5 ">Product Sell </span> : {singleProduct?.rating.count}</p>
        <p className="text-sm md:text-xl"> {singleProduct?.description}</p>
      </div>
    </div>
    </>
  )
}

export default Product
