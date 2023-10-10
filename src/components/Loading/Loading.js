import React from 'react'
// import style css
import "./Loading.scss"
// import loading image
import LoadingImg from "../../assest/images/loading.gif"

function Loading() {
  return (
	<div className='loading'>
	  <img src={LoadingImg}/>
	</div>
  )
}

export default Loading
