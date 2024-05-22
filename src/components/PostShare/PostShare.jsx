import React, { useState, useRef } from 'react'
import './PostShare.css'
import profileImage from '../../Assets/profilepic.avif'
import { CiImageOn } from "react-icons/ci";
import { IoPlayCircleOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { GrScheduleNew } from "react-icons/gr";
import { FaRegTimesCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, uploadPost } from '../../action/uploadAction.js';



const PostShare = () => {
    const loading = useSelector((state)=>state.postReducer.uploading)
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.authReducer.authData)

    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

    const [image, setImage] = useState(null)

    const imageRef = useRef();

    const desc = useRef()

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage(img);
        }
    }

    const reset = () =>{
        setImage(null)
        desc.current.value=""
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        }

        if(image){
            const data = new FormData();
            const fileName = Date.now() + image.name;
            data.append("name", fileName)
            data.append("file", image)
            newPost.image = fileName;
            console.log(newPost);
            try {
                dispatch(uploadImage(data));
                console.log('passed');
            } catch (error) {
                console.log(error);
            }
        }
        dispatch(uploadPost(newPost))
        reset()
    }


    return (
        <div className="PostShare">
            <img src={user.profilePicture? serverPublic + user.profilePicture : serverPublic + "defaultprofile.png"} alt="" />
            <div>
                <input
                    ref={desc}
                    required
                    type="text" placeholder="What's on your mind ?" />
                <div className="postOptions">
                    <div className="option"
                        style={{ color: 'var(--photo)' }}
                        onClick={() => imageRef.current.click()} >
                        <CiImageOn />
                        Photo
                    </div>
                    <div className="option"
                        style={{ color: 'var(--video)' }}
                    >
                        <IoPlayCircleOutline />
                        Video
                    </div>
                    <div className="option"
                        style={{ color: 'var(--location)' }}
                    >
                        <CiLocationOn />
                        Location
                    </div>
                    <div className="option"
                        style={{ color: 'var(--schedule)' }}
                    >
                        <GrScheduleNew />
                        Schedule
                    </div>
                    <button className='button ps-button'
                        onClick={handleSubmit}
                        disabled={loading}
                    >{loading? "Uploading..." : "Share"}</button>
                    <div style={{ display: 'none' }}>
                        <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
                    </div>
                </div>
                {image && (
                    <div className="previewImage">
                        <FaRegTimesCircle onClick={() => setImage(null)} />
                        <img src={URL.createObjectURL(image)} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default PostShare