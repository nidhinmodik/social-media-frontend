import React, { useEffect, useState } from 'react'
import './InfoCard.css'
import ProfileModal from '../profileModal/ProfileModal';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as UserApi from '../../api/UserRequest.js'
import { logout } from '../../action/AuthAction.jsx';


const InfoCard = () => {

    const [modalOpened, setModalOpened] = useState(false);

    const dispatch = useDispatch()
    const params = useParams()

    const profileUserId = params.id
    const [profileUser, setProfileUser] = useState({})

    const { user } = useSelector((state) => state.authReducer.authData)

    useEffect(() => {
        const fetchProfileUser = async () => {
            if (profileUserId === user._id) {
                setProfileUser(user)

            }
            else {
                console.log("fetching")
                const profileUser = await UserApi.getUser(profileUserId);
                setProfileUser(profileUser);
                console.log(profileUser)
            }
        }
        fetchProfileUser()
    }, [user])

    const handleLogOut = () => {
        dispatch(logout())
    }



    return (
        <div className="InfoCard">
            <div className="InfoHead">
                <h4>Profile Info</h4>
                {user._id === profileUserId ? (<div>
                    <ProfileModal modalOpened={modalOpened}
                        setModalOpened={setModalOpened}
                        data={user} />
                </div>) : ("")}
            </div>
            <div className="info">
                <span><b>Status </b></span>
                <span>{profileUser.relationship}</span>
            </div>
            <div className="info">
                <span><b>Lives In </b></span>
                <span>{profileUser.livesIn}</span>
            </div>
            <div className="info">
                <span><b>Work At </b></span>
                <span>{profileUser.worksAt}</span>
            </div>
            <button className='button logout-button' onClick={handleLogOut}>Logout</button>
        </div>
    )
}

export default InfoCard