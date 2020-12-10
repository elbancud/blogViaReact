import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import db from './firebase';
import firebase from 'firebase';

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
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
       
        setInput('');
    }

    //get db
    useEffect(() => {
        db.collection('Titles').orderBy('timestamp','desc').onSnapshot(snapshot => {
            setTitleInput(snapshot.docs.map(doc => ({id: doc.id, title:doc.data().blog_title})));
        })
    }, [])
    return (
        <form className="container">
            <Link to="/">Go back to homepage</Link>
            <div className="container">
                
                <h1>I am dashboard</h1>

                
                <input value={input}
                    type="text"
                    placeholder="Enter title"
                    onChange={inputHandle} />
                
                <button disabled={!input}
                    onClick={storeInput}>add </button>    
                    
                {titleInput.map((item) => { 
                    return (<h1 key={item.id}> {item.title}</h1>);
                })
                }
            </div>
        </form>
       
    )
}

export default Dashboard;
