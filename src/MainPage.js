import './mainPage.css';
import React from 'react';

import UniversityName from './Components/UniversityName';

class MainPage extends React.Component{
    render(){
        return(
            <div className="CryptoPage">
            <header className="cryptoHeader">
                <h1>The University Name</h1>
            </header>
                <h2>List of Universities</h2>
                <UniversityName />


        </div>);
    }
   
}

export default MainPage;