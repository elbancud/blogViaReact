import React, { useState } from 'react';
import './style.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import db from './firebase';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
function Articles({ title, id }) {
    
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [editConfirmation, setEditConfirmation] = useState(false);
    const [input, setInput] = useState('');
    // const open = event => { db.collection('Titles').doc(id).delete() };
    const openModal = () => {
         setDeleteConfirmation(true);   
    }
    const closeModal = () => {
        setDeleteConfirmation(false);
    }
    const openModalEdit = () => {
         setEditConfirmation(true);   
    }
    const closeModalEdit = () => {
        setEditConfirmation(false);
    }
    const inputHandle = (event) => {
        setInput(event.target.value);
    }
    // store inputs
    
    return (
        <form>
        <div className="box" key={id}>
            
            <div className="box-content">
            
                <div className="box-content-title">
                  
                    <div>
                        <h2>{title}</h2>
                    </div>
                    <div className="icons-config">
                    
                        <EditIcon 
                            className="icon"
                            fontSize="small"
                            onClick={openModalEdit}/>
                        <DeleteIcon
                            className="icon"
                            fontSize="small"
                            onClick={openModal} />
                        
                        {/* delete modal */}
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
                                    Delete article:<h2>{title}</h2>
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

                        {/* edit modal */}
                        <Modal
                            className="modal edit_title"
                            open={editConfirmation}
                            onClose={closeModalEdit}
                            closeAfterTransition
                            
                            BackdropProps={{
                            timeout: 500,
                            }}
                            >
                            <div className="modal-content">
                                <div className="delete-message border-bottom">
                                     Article:<h2>{title}</h2>
                                </div>
                                <div className="delete-message">
                                    <div className="input-fields "> 
                                        <TextField
                                            id="standard-basic"
                                            label="Title"
                                            onChange={inputHandle}
                                            value={input}
                                            className="textfield-title small"
                                            
                                        />
                                        <br />
                                        {/* <TextField
                                            id="standard-basic"
                                            label="Content"
                                            
                                            className="textfield-title"
                                        /> */}
                                        <br />    
                                        
                                    </div>
                                </div>
                                <div className="confirmation-btn">
                                    <Button className="btn-confirm" size='small' variant="outlined" color="default" onClick={closeModalEdit}>Cancel</Button>
                                    <Button className="btn-confirm" size='small' variant="contained" color="primary"
                                        onClick={ event => {
                                            db.collection('Titles').doc(id).set({
                                                blog_title: input
                                            }, {merge:true});
                                            setEditConfirmation(false);
                                        }}>Update</Button>
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
            </form>
    )
}

export default Articles
