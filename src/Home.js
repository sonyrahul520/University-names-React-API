import './mainPage.css';
import React, { Component} from 'react';
import Navbar from './Navbar.js';
import MainPage from './MainPage';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <MainPage />
            </div>
           
            );
    }
}

export default Home;