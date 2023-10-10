import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
// import style
import "./MainSlider.scss"
// import my write datas
import { MainSliderDatas } from '../../myWriteSiteDatas/Datas'; 

function MainSlider() {
  return (
	<>
<section id='mainSlider'>
		<div className="container">
	<Swiper
	  spaceBetween={30}
	  effect={'fade'}
	  loop={true}
	  navigation={true}
	  pagination={{
		clickable: true,
	  }}
	  modules={[EffectFade, Navigation, Pagination]}
	  className="mySwiper"
	>
				{
					MainSliderDatas.map(item => (
                 <SwiperSlide key={item.id}>
	            <div className='mainSliderCart' 
				 style={{backgroundImage: `url('${item.bgImg}')`}} >
                 <div className='overlay'>
				  <h2>{item.header}</h2>
			      <p>{item.body}</p>
				  </div>
				</div>
	            </SwiperSlide> 
					))
				}
	</Swiper>
	</div>
	</section>
  </>
  )
}

export default MainSlider
