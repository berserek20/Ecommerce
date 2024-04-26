import React from 'react'

function ButtonEcom({name}) {
  return (
    <button className='bg-sky-500 hover:bg-sky-700' onClick={()=>console.log("first")}>
        {name}
    </button>
  )
}

export default ButtonEcom