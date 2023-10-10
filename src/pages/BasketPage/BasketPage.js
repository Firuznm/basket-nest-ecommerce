import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalState'
// react icons
import { PiStarThin } from 'react-icons/pi';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { BsTrash } from 'react-icons/bs';

// import style
import "./BasketPage.scss"


function BasketPage() {
	const {state,increase,decrease,removeProduct,totalProductCount,totalPraduct}=useContext(GlobalContext);
	// console.log(state.basket);
	if(state.basket.length !== 0){
		return (
			<section id='basket'>
			<div className='container'>
				<div className='pr-basket'>
				<div className='praducts-basket'>
			  {
				state.basket.map( item =>
				   <div className='basket-wrap' key={item.id}>
					   <div className='pr-img'>
						   <img src={item.trueImage}/>
					   </div>
					   <div className='pr-name-star'>    
						<p>{item.popDescription}</p>      
					<span className='star'>	<PiStarThin/><PiStarThin/><PiStarThin/><PiStarThin/><PiStarThin/></span>
					   </div>
					   <span className='prew-price'>${(item.popPiscountedPrice * item.count).toFixed(2)}</span>
		
		
					  <div className='pr-count'>
						<p>{item.count}</p>
						<span className='arrow'>
						     <IoIosArrowUp  onClick={()=>increase(item.id)} className='up' />
						     <IoIosArrowDown onClick={()=>decrease(item.id)}  className='down'/> 
						 </span>
					  </div>
					  <div className='price-delete'>
					  <span className='next-price'>${(item.popPiscountedPrice * item.count).toFixed(2)}</span>
					  <span className='delete-icon'><BsTrash onClick={()=>removeProduct(item.id)} /></span> 
					  </div>
				   </div>
				   
				)
			  }

			    </div>
			        <div className='basket-total' >
                       <span className='pr-count'>Məhsulların sayı : <span className='count'>{totalProductCount}</span></span>
					   <span className='pr-total'>Toplam qiyməti :<span className='total'>{totalPraduct.toFixed(2)} $</span></span>
					</div>
			</div>
			</div>
			  
			</section>
		  )
	}
	else if (state.basket.length === 0){
        return(
          <div className='basket-empty'>Dəyərli Müştərimiz səbətinizdə heç bir məhsul yoxdur</div>
        )
       }
 
}

export default BasketPage
