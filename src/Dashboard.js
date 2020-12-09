import React, { useState } from 'react'
import { Link } from 'react-router-dom';
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

        const userInfo = {
            inputText:input, 
            id:Math.random() + 1
        }
        setTitleInput([...titleInput, userInfo]);
        console.log(titleInput);
        setInput('');
    }
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
                    return (<h1 key={item.id}> {item.inputText}</h1>);
                })}
            </div>
        </form>
       
    )
}

export default Dashboard;
