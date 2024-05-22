import axios from 'axios';


const API = axios.create({baseURL: "https://social-media-backend-n7pp.onrender.com"})

export const logIn = (FormData)=> API.post('/auth/login',FormData)
export const signUp = (FormData)=> API.post('/auth/register',FormData)