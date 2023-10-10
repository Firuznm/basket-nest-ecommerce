import React, { useContext } from 'react'
// import style css
import "./PopularProductCart.scss"
// import react icons
import { PiStarThin } from 'react-icons/pi';
import { AiOutlineHeart } from 'react-icons/ai';
import { PiArrowsLeftRight } from 'react-icons/pi';
import { AiOutlineEye } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { GlobalContext } from '../../Context/GlobalState';




// components import
// import AddBtn from '../addBtn/AddBtn'

// function PopularProductCart({trImg, flsImg, popName, popDes, popValue, popProType, popPisPrc, popPrevPrc}) {
//     const {addToCart}=useContext(GlobalContext);
// 	console.log(addToCart);
// 	return (
// 	<div className='popular-cart'>
// 		{/* <div className='different-product'>sale</div> */}
// 		<a className='true-false-image' href="">
// 	    <img className='true' src={trImg} alt="" />
//     	<img className='false' src={flsImg} alt="" />
// 	     <div className='add-list'>
// 			<a className='wishlist' href=""><AiOutlineHeart className='heart'/></a> 
// 			<a className='compare' href=""><PiArrowsLeftRight className='left-right'/></a>  
// 			<a className='view' href=""><AiOutlineEye className='eye'/></a>
// 		 </div>
// 		</a>
// 		<div className='pop-pro-content'>
// 		<a href='' className='pop-name'>{popName}</a>
// 		<a href='' className='pop-description'>{popDes}</a>
// 		<span className='start'>
// 			<PiStarThin/><PiStarThin/><PiStarThin/><PiStarThin/><PiStarThin/>
// 		</span>
// 		<span className='start-value'>({popValue})</span>
// 		<span className='pop-pro-type'>By <a className='pro-type' href="">{popProType}</a></span>
// 		<div className='pop-price'>
// 			<span className='pop-discounted-price'>${popPisPrc}</span>
// 			<span className='pop-previous-price'>${popPrevPrc}</span>
// 			<button onClick={()=>addToCart()} className='add-btn' href=""><SlBasket className='bascet-add'/> Add </button>
// 		</div>
// 		</div>
// 	</div>
//   )
// }

// export default PopularProductCart
