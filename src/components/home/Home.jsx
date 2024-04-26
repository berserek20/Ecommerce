import React from 'react'
import Banner from './Banner'
import Faltu from '../public/images/Faltu.svg'
import Men from '../public/images/Men.jpg'
import Men_rm_bg from '../public/images/Men_rm_bg.png'
import Women_rm_bg from '../public/images/Women_rm_bg.png'

import Women from '../public/images/Women.jpg'
import jewelery from '../public/images/jewellery.jpg'


function Home() {
  return (
    <div >
        <Banner image={Men_rm_bg} category="Men's Clothing" />
        <Banner image={Women_rm_bg} category="Women's Clothing" />
        <Banner image={jewelery} category="Jwellery" />
        <Banner image={Faltu} category="Electronics" />
    </div>
  )
}

export default Home