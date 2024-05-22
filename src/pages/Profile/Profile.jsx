import React from 'react'
import './Profile.css'
import ProfileLeft from '../../components/ProfilePage/ProfileLeft'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import Postside from '../../components/PostSide/Postside'
import RightSide from '../../components/RightSide/RightSide'

const Profile = () => {
  return (
    <div className="profile">
        <ProfileLeft/>
        <div className="Profile-center">
            <ProfileCard location = {"profilePage"} />
            <Postside/>
        </div>
        <RightSide/>
    </div>
  )
}

export default Profile