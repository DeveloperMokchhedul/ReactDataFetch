import React, { useContext } from 'react'
import { ShopContext } from '../context/Shop'
import { Link } from 'react-router-dom'

function BestSeller() {
    const {data} = useContext(ShopContext)
  return (
    <>
     <div className='container mx-auto grid grid-cols-12 gap-5'>
      {
        data && data.slice(0,4).map((current)=>(
          <div key={current.id} className='col-span-12 md:col-span-3 mx-5 md:mx-0 '>
            <div className='bg-slate-300 flex flex-col justify-center items-center py-3 rounded-lg'>
            <p className='px-3 text-center my-2 bg-black text-white rounded-lg '>{current.price}$</p>
             <Link to={`product/${current.id}`}> <img className='w-[200px] h-[250px] p-5 object-cover' src={current.image} alt="" /></Link>
              <p className='px-3 text-center'>{current.title.slice(0,12)}...</p>
            </div>
          </div>

        ))
      }

    </div>
      

      
    </>
  )
}

export default BestSeller
