import React from 'react'

function ItemInfoUI({source,title,desc,rating,price,count}) {
  return (
    <div>
         <div className='grid grid-cols-1 md:grid-cols-2' style={{border:"2px solid red"}}>
            <div className='flex justify-evenly' style={{height:"50%",border:"2px solid green"}}><img src={source} alt=''style={{height:"100%", width:"50%", border:"2px solid yellow"}} /></div>
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