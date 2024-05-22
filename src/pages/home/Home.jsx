import React from 'react'
import './Home.css'
import ProfileSide from '../../components/profileSide/ProfileSide'
import Postside from '../../components/PostSide/Postside'
import RightSide from '../../components/RightSide/RightSide'

const Home = () => {
  return (
    <div className='Home'>
        <ProfileSide/>
        <Postside/>
        <RightSide/>
    </div>
  )
}

export default Home