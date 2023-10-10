import React from 'react'
// import style css
import "./ShopNowCart.scss" 
import ShopNowBtn from '../shopNowBnt/ShopNowBtn' 


function ShopNowCart({description , image }) {
  return (
	<>
	  <div className='shop-cart' style={{backgroundImage: `url('${image}')`}}>
		<div className='overlay'>
		<h5>{description}</h5>
		<ShopNowBtn/>
		</div>
	  </div>
	</>
  )
}

export default ShopNowCart
