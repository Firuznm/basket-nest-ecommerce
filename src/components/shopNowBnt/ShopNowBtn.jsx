import React from 'react'
// import style scss
import "./ShopNowBtn.scss"
// import react icons
import { GoArrowRight } from 'react-icons/go';	 


function ShopNowBtn() {
  return (
	<>
	  <a className='btn-shop-now'  href="">Shop Now  <span className='icon-right'><GoArrowRight/></span></a>
	</>
  )
}

export default ShopNowBtn
