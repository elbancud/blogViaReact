import React from 'react';
import './style.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
function Articles({title, id}) {
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
                            fontSize="small" />
                        
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
