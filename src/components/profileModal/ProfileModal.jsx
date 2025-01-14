import React, { useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
import { FaPen } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {uploadImage} from '../../action/uploadAction'
import { updateUser } from '../../action/userAction';


function ProfileModal({data}) {
    const {password, ...other} = data;
    const [formData,setFormData] = useState(other)
    const [profileImage, setProfileImage] = useState(null)
    const [coverImage, setCoverImage] = useState(null)
    const dispatch = useDispatch()
    const param = useParams()
  const {user} = useSelector((state)=>state.authReducer.authData)
  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

    const [modalOpened, setModalOpened] = useState(false);
    const handleClose = () => setModalOpened(false);
    const handleShow = () => setModalOpened(true);
    console.log(modalOpened);

    const onImageChange = (event) =>{
      if (event.target.files && event.target.files[0]){
        let img = event.target.files[0]
        event.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img)
      }
    }

    const handleSubmit =(e)=>{
      e.preventDefault()
      let UserData = formData
      if(profileImage){
        const data = new FormData()
        const fileName = Date.now() + profileImage.name
        data.append("name", fileName)
        data.append("file", profileImage)
        UserData.profilePicture = fileName
        try {
          dispatch(uploadImage(data))
        } catch (error) {
          console.log(error);
        }
      }
      if(coverImage){
        const data = new FormData()
        const fileName = Date.now() + coverImage.name;
        data.append("name", fileName)
        data.append("file", coverImage)
        UserData.coverPicture = fileName
        try {
          dispatch(uploadImage(data))
        } catch (error) {
          console.log(error);
        }
      }
      dispatch(updateUser(param.id, UserData))
      setModalOpened(false)
    }
    
  return (
    <>
      <FaPen variant="primary" onClick={handleShow} >
        
      </FaPen>

      <MDBModal open={modalOpened} setOpen={setModalOpened} tabIndex='-1' >
        <MDBModalDialog size='lg'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Your Info</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={handleClose}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form className="infoForm">
                <div>
                <input type="text" className='infoInput' name='firstname' placeholder='First Name' onChange={handleChange} value={formData.firstname} />
              <input type="text" className='infoInput' name='lastname' placeholder='Last Name' onChange={handleChange} value={formData.lastname} />
                </div>

                <div>
                <input type="text" className='infoInput' name='worksAt' placeholder='Works at' onChange={handleChange} value={formData.workAt} />
                </div>

                <div>
                <input type="text" className='infoInput' name='livesIn' placeholder='Lives In' onChange={handleChange} value={formData.livesin} />

                <input type="text" className='infoInput' name='country' placeholder='Country' onChange={handleChange} value={formData.country} />
                </div>

                <div>
                <input type="text" className='infoInput' placeholder='RelationShip Status' name='relationship' onChange={handleChange} value={formData.relationship} />
                </div>

                <div>
                  Profile Image 
                  <input type="file" name='profileImage' onChange={onImageChange} />
                  Cover Image
                  <input type="file" name='coverImage' onChange={onImageChange} />
                </div>

              </form>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={handleClose}>
                Close
              </MDBBtn>
              <MDBBtn onClick={handleSubmit} >Update</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}


export default ProfileModal;