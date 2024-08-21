import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/Shop'
import { IoSearch } from "react-icons/io5";

const Products = () => {
  const { data, setData } = useContext(ShopContext)
  const [search, setSearch] = useState(data)

  const filterData = data.filter((item)=>{
    return item.title.toLowerCase().includes(search)
  });


  return (
    <>
      <div className='container mx-auto w-full flex bg-slate-100 mb-5 border-2 border-black rounded-lg items-center'>
        <input 
        className='w-full bg-transparent outline-none py-2 px-5 rounded-lg ' 
        type="text" 
        placeholder='Search item'  
        onChange={(e)=>setSearch(e.target.value)} />
        <IoSearch className='text-3xl me-5 cursor-pointer' />
        
        
      </div>
      <div className='container mx-auto grid grid-cols-12 gap-5'>
        {
          filterData.map((current) => (
            <div key={current.id} className='col-span-12 md:col-span-3 mx-5 md:mx-0 '>
              <div className='bg-slate-300 flex flex-col justify-center items-center py-3 rounded-lg'>
                <p className='px-3 text-center my-2 bg-black text-white rounded-lg '>{current.price}$</p>
                <Link to={`product/${current.id}`}> <img className='w-[200px] h-[250px] p-5 object-cover' src={current.image} alt="" /></Link>
                <p className='px-3 text-center'>{current.title.slice(0, 12)}...</p>
              </div>
            </div>

          ))
        }

      </div>

    </>
  )
}

export default Products
