import axios from 'axios';

const API = axios.create({baseURL: "https://social-media-backend-n7pp.onrender.com"})

export const uploadImage = (data)=> API.post('/upload/', data);

export const uploadPost = (data) => API.post("/posts", data);
