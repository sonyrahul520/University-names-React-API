import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UniversityName =() => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [price, setPrice] = useState([]);

    useEffect(() => {
        fetch("http://universities.hipolabs.com/search?country=United+States")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setPrice(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }

                )

    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    }
    else {
        return (
            <div className="row">
            <ul>
                {price.map(user => (

                    <li className="col-md-9 list-group-item list-group-item-action" key={user.alpha_two_code}>
                        {user.name}
                        
                    </li>
                    
                ))}
                </ul>
            </div>
            );
    }

}

export default UniversityName;