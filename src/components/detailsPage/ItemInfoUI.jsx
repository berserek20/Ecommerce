import React from 'react'

function ItemInfoUI({source,title,desc,rating,price,count}) {
  return (
    <div>
         <div className='md:grid md:grid-cols-2'>
            <div className='flex justify-evenly' ><img src={source} alt=''style={{height:"100%", width:"50%",}} /></div>
            <div style={{border:"2px solid blue"}}>

              title:<p>{title}</p>
              description:<p>{desc}</p>
              rating:<p>{rating}</p>
              count:<p>{count}</p>
              price:<p>${price}</p>
            </div>
        </div>
    </div>
  )
}

export default ItemInfoUI