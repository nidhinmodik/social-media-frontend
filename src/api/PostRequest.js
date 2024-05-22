import axios from 'axios'

const API = axios.create({baseURL: "https://social-media-backend-n7pp.onrender.com"})

export const getTimelinePosts = (id)=> API.get(`/posts/${id}/timeline`)
export const likePost = (id, userId)=> API.put(`posts/${id}/like`, {userId: userId})