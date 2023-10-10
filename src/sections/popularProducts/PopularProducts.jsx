import React, { useContext } from 'react'
// import style css
import "./PopularProducts.scss"
// component import
import { GlobalContext } from '../../Context/GlobalState'

import { PiStarThin } from 'react-icons/pi';
import { AiOutlineHeart } from 'react-icons/ai';
import { PiArrowsLeftRight } from 'react-icons/pi';
import { AiOutlineEye } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';


function PopularProducts() {
	const {state,addToCart }=useContext(GlobalContext);
	// console.log(PopularProductDatasBasket.datas);
	// console.log(state.basket);
  return (
	<>
	  <section id='popularProducts'>    
		<div className="container">
			<div className='popular-header'>
				<h3>Popular Products</h3>
				<ul className='popular-product-page'>
					<li><a href="">All</a></li>
					<li><a href="">Milks & Dairies</a></li>
					<li><a href="">Coffes & Teas</a></li>
					<li><a href="">Pet Foods</a></li>
					<li><a href="">Meats</a></li>
					<li><a href="">Vegetables</a></li>
					<li><a href="">Fruits</a></li>
				</ul>
			</div>
			<div className='popular-product-list'>
				{
					state.datas.map(item=>(
						<div className='popular-cart' key={item.id}>
		{/* <div className='different-product'>sale</div> */}
		<a className='true-false-image' href="">
	    <img className='true' src={item.trueImage} alt="" />
    	<img className='false' src={item.falseImage} alt="" />
	     <div className='add-list'>
			<a className='wishlist' href=""><AiOutlineHeart className='heart'/></a> 
			<a className='compare' href=""><PiArrowsLeftRight className='left-right'/></a>  
			<a className='view' href=""><AiOutlineEye className='eye'/></a>
		 </div>
		</a>
		<div className='pop-pro-content'>
		<a href='' className='pop-name'>{item.popName}</a>
		<a href='' className='pop-description'>{item.popDescription}</a>
		<span className='start'>
			<PiStarThin/><PiStarThin/><PiStarThin/><PiStarThin/><PiStarThin/>
		</span>
		<span className='start-value'>({item.startValue})</span>
		<span className='pop-pro-type'>By <a className='pro-type' href="">{item.popProTYPE}</a></span>
		<div className='pop-price'>
			<span className='pop-discounted-price'>${item.popPiscountedPrice}</span>
			<span className='pop-previous-price'>${item.popPreviousPrice}</span>
			<button onClick={()=>addToCart(item)} className='add-btn' href=""><SlBasket className='bascet-add'/> Add </button>
		</div>
		</div>
	</div>
						
					))
				}
          
			</div>
		</div>
	  </section>
	</>
  )
}

export default PopularProducts
