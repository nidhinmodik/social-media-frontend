import React, { useState } from 'react'
import './Auth.css'
import logo from '../../Assets/foxlogo2.png'
import { useDispatch, useSelector } from 'react-redux';
import { logIn, signUp } from '../../action/AuthAction'


const Auth = () => {
  const dispatch = useDispatch()

  const loading = useSelector((state)=>state.authReducer.loading)

  const [isSignUp, setIsSignUp] = useState(true);
  console.log(loading);


  const [data, setData] = useState({ first: '', lastname: '', password: '', confirmpass: '', username: '' })

  const [confirmPass, setConfirmPass] = useState(true)

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      data.password === data.confirmpass ? dispatch(signUp(data)) : setConfirmPass(false);
    } else {
      dispatch(logIn(data))
    }
  };

  const resetForm = () => {
    setConfirmPass(true);
    setData({ first: '', lastname: '', password: '', confirmpass: '', username: '' })
  }

  return (
    <div className="Auth">
      {/**************  left side ***********************/}
      <div className="a-left">
        <img width={'100px'} src={logo} alt="" />
        <div className="Webname">
          <h1><span style={{ color: 'orange' }}>F</span><span>ox </span><span style={{ color: 'orange' }}>M</span><span>edia</span></h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/************** right side  ***************/}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Login"}</h3>

          {isSignUp && (
            <div>
              <input type="text"
                placeholder='First Name'
                className="infoInput"
                name='firstname'
                onChange={handleChange} value={data.firstname} />

              <input type="text"
                placeholder='Last Name'
                className="infoInput"
                name='lastname'
                onChange={handleChange} value={data.lastname} />
            </div>
          )}

          <div>
            <input type="text" className='infoInput' name="username" placeholder="Username" onChange={handleChange} value={data.username} />
          </div>
          <div>
            <input type="password" className="infoInput" placeholder="Password" name='password' onChange={handleChange} value={data.password} />

            {isSignUp && (<input type="password" className="infoInput" placeholder="Confirm Password" name='confirmpass' onChange={handleChange} />)}
          </div>
          <span style={{ display: confirmPass ? "none" : "block", color: 'red', fontSize: '12px', alignSelf: 'flex-end', marginRight: "2.8rem" }}>* Confirm Password is not same</span>
          <div>
            <span style={{ fontSize: '12px', cursor: 'pointer' }} onClick={() => { setIsSignUp((prev) => !prev); resetForm() }}>{isSignUp ? "Already have an account. Login!" : "Don't have an account ? Sign Up"}</span>
          </div>
          <button className="button infoButton" type='submit' disabled={loading}>{loading? "Loading..." : isSignUp ? "Signup" : "Login"}</button>
        </form>
      </div>
    </div>
  )
}


export default Auth