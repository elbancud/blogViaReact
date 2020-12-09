import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';

function Home() {
    return (
        <div className="container">
            {/* navigation */}
            <header>
                <nav>
                    <ul className="nav-list">
                        <li className="nav-link"><h2>logo</h2></li>
                    </ul>

                    <ul className="nav-list">
                        <li className="nav-link">
                            About me
                        </li>
                        <li className="nav-link">
                            Contact
                        </li>
                        <li className="nav-link">
                            <Link className= "react-link" to="/dashboard">Dashboard</Link>   

                        </li>
                    </ul>
                    
                
                </nav>
                <div className="banner">
                    <div className="banner-intro">
                        <div>
                            <h1>WELCOME TO MY BLOG</h1>
                            <h3>lorem ipsum</h3>
                        </div>
                    </div>
                    <div className="banner-graphics">
                        <div className="circle"></div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home;
