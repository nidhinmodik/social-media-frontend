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
import PostShare from '../PostShare/PostShare';



function ShareModal() {
    
    const [modalOpened, setModalOpened] = useState(false);
    const handleClose = () => setModalOpened(false);
    const handleShow = () => setModalOpened(true);
    console.log(modalOpened);
    
  return (
    <>
      <button className='button r-button' onClick={handleShow} >
        Share
      </button>

      <MDBModal open={modalOpened} setOpen={setModalOpened} tabIndex='-1' >
        <MDBModalDialog size='lg'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Your Info</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={handleClose}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <PostShare/>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={handleClose}>
                Close
              </MDBBtn>
              <MDBBtn>Share</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}


export default ShareModal;