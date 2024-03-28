import React from 'react'

function ItemInfoUI({source,title,desc,rating,price,count}) {
  return (
    <div >
         <div className='md:grid md:grid-cols-2' >
            <div className='flex justify-evenly' ><img src={source} alt=''style={{height:"100%", width:"50%",}} /></div>
            <div className='grid grid-cols-1'>

              <p> Title: {title}</p>
              <p>Description: {desc}</p>
              <p>Rating: {rating}</p>
              <p>Count: {count}</p>
              <p>Price: ${price}</p>
            </div>
        </div>
    </div>
  )
}

export default ItemInfoUI