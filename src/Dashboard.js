import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import db from './firebase';
import firebase from 'firebase';
import Articles from './Articles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './style.css';


function Dashboard() {

    const [titleInput, setTitleInput] = useState([]);
    const [input, setInput] = useState('');

    //listen to inputs
    const inputHandle = (event) => {
        setInput(event.target.value);
    }
    // store inputs
    const storeInput = (event) => {
        event.preventDefault();
        db.collection('Titles').add({
            blog_title: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp() //initialize timestamp for descending order
        })
       
        setInput('');
    }
    //get db everytime the page loads
    useEffect(() => {
            db.collection('Titles').orderBy('timestamp','desc').onSnapshot(snapshot => {
            setTitleInput(snapshot.docs.map(doc => ({id: doc.id, title:doc.data().blog_title}))); //the snapshot makes a object and map thru the docs and fetch for target value
        })
    }, [])

    return (
        <form className="container">
            {/* using router link to go back to homepage */}
            <nav>
                <Link to="/">Go back to homepage</Link>
            </nav>
            

            <div className="container">
                <h2>Welcome to your Control panel </h2>

                    <div className="input-fields"> 
                        <TextField
                            id="standard-basic"
                            label="Title"
                            onChange={inputHandle}
                            className="textfield-title"
                        />
                        <br />
                        <TextField
                            id="standard-basic"
                            label="Content"
                            
                            className="textfield-title"
                        />
                        <br />    
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={storeInput}
                            disabled={!input}>
                                Save
                        </Button>
                    </div>
                    <h2>Your articles</h2>
                    <div className="article-container">    
                        { titleInput.map((item) => { 
                            return (<Articles title={item.title} id={item.id} />);
                        })
                            }
                    </div>
                
            </div>
        </form>
       
    )
}

export default Dashboard;
