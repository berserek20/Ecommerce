import React from 'react'

function Nav() {
  return (
    <div>
        <ul className='grid grid-cols-7 font-normal bg-purple-300'>
            <li className='col-span-3 italic font-light flex justiy-items-start'>
            {/* <svg class="stroke-1 ..."></svg> */}

                Products Company
            </li>
            <li>
                Home
            </li>
            <li>
                Products Company
            </li>
            <li>
                Cart
            </li>
            <li>
                Profile
            </li>
        </ul>
    </div>
  )
}

export default Nav