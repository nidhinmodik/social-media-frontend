import React from 'react'
import './Postside.css'
import PostShare from '../PostShare/PostShare'
import Posts from '../Posts/Posts'

const Postside = () => {
  return (
    <div className="PostSide">
        <PostShare/>
        <Posts/>
    </div>
  )
}

export default Postside