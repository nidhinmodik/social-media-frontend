import React from 'react'
import logo from '../../Assets/foxlogo2.png'
import './LogoSearch.css'
import { FaSearch } from "react-icons/fa";

const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
      <img width={'45px'} src={logo} alt="" />
      <div className="Search">
        <input type="text" placeholder='#Explore' />
        <div className="s-icon">
        <FaSearch />
        </div>
      </div>
    </div>
  )
}

export default LogoSearch