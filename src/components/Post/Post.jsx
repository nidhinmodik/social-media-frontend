import React, { useState } from 'react'
import './Post.css'
import like from '../../Assets/heart1.png'
import unlike from '../../Assets/unlike1.png'
import comment from '../../Assets/comment.png'
import share from '../../Assets/share.png'
import { useSelector } from 'react-redux'
import { likePost } from '../../api/PostRequest'

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData)

  const [liked, setLiked] = useState(data.likes.includes(user._id))
  const [likes, setLikes] = useState(data.likes.length)

  const handleLike = () => {
    setLiked((prev)=>!prev)
    likePost(data._id, user._id)
    liked? setLikes((prev)=> prev -1) : setLikes((prev)=> prev+1)
  };
  
  return (
    <div className="Post">
      <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="" />

      <div className="postReact">
        <img src={liked ? like : unlike} alt="" style={{cursor:'pointer'}} onClick={handleLike} />
        <img src={comment} alt="" />
        <img src={share} alt="" />
      </div>
      <span style={{ color: 'var(--gray)', fontSize: '12px' }}>{likes} likes</span>
      <div className="details">
        <span><b>{data.name}</b></span>
        <span> {data.desc}</span>
      </div>
    </div>
  )
}

export default Post