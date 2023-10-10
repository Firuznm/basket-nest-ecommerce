import React, { useContext } from 'react'
// import style
import "./AddBtn.scss"
import { SlBasket } from 'react-icons/sl';

function AddBtn({cart}) {
  return (
	<div>
	  <button className='add-btn' href=""><SlBasket className='bascet-add'/> Add </button>
	</div>
  )
}  

export default AddBtn
