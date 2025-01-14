import axios from 'axios'

const API = axios.create({baseURL: "https://social-media-backend-n7pp.onrender.com"})

export const getUser = (userId)=> API.get(`/user/${userId}`)

export const updateUser = (id, formData)=>API.put(`/user/${id}`, formData)

export const getAllUser = ()=> API.get('/user')

export const followUser = (id, data) => API.put(`/user/${id}/follow`, data)

export const unFollowUser = (id, data) => API.put(`/user/${id}/unfollow`, data)