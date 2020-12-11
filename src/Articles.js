import React, { useState } from 'react';
import './style.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import db from './firebase';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';
function Articles({ title, id }) {
    
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);

    // const open = event => { db.collection('Titles').doc(id).delete() };
    const openModal = () => {
         setDeleteConfirmation(true);   
    }
    const closeModal = () => {
        setDeleteConfirmation(false);
    }
    return (
        
        <div className="box" key={id}>
            
            <div className="box-content">
            
                <div className="box-content-title">
                    <div>
                        <h2>{title}</h2>
                    </div>
                    <div className="icons-config">
                        <EditIcon 
                            className="icon"
                            fontSize="small"/>
                        <DeleteIcon
                            className="icon"
                            fontSize="small"
                            onClick={openModal} />
                        
                        <Modal
                            className="modal"
                            open={deleteConfirmation}
                            onClose={closeModal}
                            closeAfterTransition
                            
                            BackdropProps={{
                            timeout: 500,
                            }}
                            >
                            <div className="modal-content">
                                <div className="delete-message border-bottom">
                                    <p>Delete article:<h2>{title}</h2></p>
                                </div>
                                <div className="delete-message">
                                    <p>Are you sure you want to delete this article?</p>
                                </div>
                                <div className="confirmation-btn">
                                    <Button className="btn-confirm" size='small' variant="outlined" color="default" onClick={closeModal}>Cancel</Button>
                                    <Button className="btn-confirm" size='small' variant="contained" color="secondary"
                                        onClick={ event => {
                                            db.collection('Titles').doc(id).delete();
                                            setDeleteConfirmation(false);
                                        }}>Delete</Button>
                                </div>
                            </div>
                        </Modal>
                           
                    </div>
                </div>
                {/* <div className="box-content-article">
                    <h5>{article}</h5>
                </div> */}
            </div>
        </div>
    )
}

export default Articles
