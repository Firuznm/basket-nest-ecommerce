import React from 'react'
// import style css
import "./ShopNow.scss"

// import  my write datas shop now
import { shopNowsDatas } from '../../myWriteSiteDatas/Datas'
import ShopNowCart from '../../components/shopNowCart/ShopNowCart'

function ShopNow() {
  return (
	<>
	<section id='shop-nows'>
		<div className="container">
			<div className='shop-now'>
				{
					shopNowsDatas.map(item => (
						<ShopNowCart key={item.id} description ={item.body} image={item.Image}/>
					))
				}
			</div>
		</div>
	</section>
	  
	</>
  )
}

export default ShopNow
