import React, { useContext } from 'react'
// import navLogo
import NavLogo from "../../assest/images/logo.svg"
// import style
import "./Header.scss"
// import react icons
import {FaRotate  } from 'react-icons/fa6';
import {AiOutlineHeart  } from 'react-icons/ai';
import {BsCart  } from 'react-icons/bs';
import {GoPerson} from 'react-icons/go';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalState';





function Header() {
	const {state}=useContext(GlobalContext);
	// console.log(totalProductCount);
	console.log(state.basket.length);
  return (
	<section id='header'>
	  <div className="container">
	<div className='nav'>
		<a href='/' className='nav-logo'>
		<img src={NavLogo} alt="" />
		</a>
		<input type="text" name="" id="" />
		<div className='basket-like-acound'>
			<Link className='compare'><FaRotate className='icon'/>Compare</Link>
			<Link ><AiOutlineHeart className='icon'/>Wishlist</Link>
			<Link to="basket"> <BsCart className='icon'/>Cart
			<span className='basket-count'>{state.basket.length}</span>
			</Link>
			<Link className='account'><GoPerson className='icon'/>Account</Link>
		</div>
	</div>
	  </div>
	</section>
  )
}

export default Header
