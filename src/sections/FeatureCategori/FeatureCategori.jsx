// import style css
import "./FeatureCategori.scss"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

// import my write datas
import { FeatureCatDatas } from "../../myWriteSiteDatas/Datas";


function FeatureCategori() {
	
  return (
<>
                <section id="featureCatagori">
                <div className="container">
					<div className="feature-header-list">
						<h3>Featured Categories</h3>
						<ul className="feature-page">
          <li><a href="">Cake & Milk</a></li>
				  <li><a href="">Coffes & Teas</a></li>
				  <li><a href="">Pet Foods</a></li>
				  <li><a href="">Vegetables</a></li>
						</ul>
					</div>
          <div className="feature-full-list">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
	    	loop={true}
        pagination={{
          clickable: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 7,
          },
		  1440: {
            slidesPerView: 9,
          },
		  2020: {
            slidesPerView: 10,
          },
        }}
        className="mySwiper"
      >
        
		{
			FeatureCatDatas.map(item => (
              <SwiperSlide key={item.id}>
				<a className="feature-cart" href="">
				<img src={item.img} alt="" />
					<h6>{item.title}</h6>
					<span>{item.count}</span>
				</a>
			  </SwiperSlide>
				
			))
		}
      </Swiper>
      </div>
         </div>
        </section>
      </>
  )
}

export default FeatureCategori
