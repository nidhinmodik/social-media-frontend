import React, { useState } from 'react'
import './RightSide.css'
import { IoHomeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import TrendCard from '../TrendCard/TrendCard';
import ShareModal from '../ShareModal/ShareModal';
import { Link } from 'react-router-dom';



const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <Link to = '../home'><i style={{ color: 'var(--buttonBg)', fontSize: '25px' }}><IoHomeOutline /></i></Link>
        <i style={{ fontSize: '23px' }}><IoSettingsOutline /></i>
        <i style={{ fontSize: '23px' }}><FaRegBell /></i>
        <i style={{ fontSize: '23px' }}><AiOutlineMessage /></i>
      </div>
      <TrendCard />
      <ShareModal modalOpened={modalOpened}
        setModalOpened={setModalOpened} />
      {/* <button className='button r-button' onClick={() => setModalOpened(true)} ></button> */}
    </div>
  )
}

export default RightSide