import React, { useEffect, useState } from 'react'
import ShopNow from '../../sections/shopNow/ShopNow'
import PopularProducts from '../../sections/popularProducts/PopularProducts'
import MainSlider from '../../sections/mainSlider/MainSlider'
import FeatureCategori from '../../sections/FeatureCategori/FeatureCategori'
import Loading from '../../components/Loading/Loading'

function Home() {

const [isLoading, setIsLoading] = useState(true);
 useEffect(() => {
  const timer = setTimeout(() => {
	setIsLoading(false);
   }, 3000);

  return () => clearTimeout(timer);
}, []);
  return (
	<>
	{
		isLoading ? <Loading/> :
	<>
	  <MainSlider/>
	  <FeatureCategori/>
	  <ShopNow/>
	  <PopularProducts/>
	  </>
	}
	</>
  )
}

export default Home
