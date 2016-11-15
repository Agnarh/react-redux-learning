import React from 'react';
import {Link} from 'react-router';

var HomePage = function (props) {
    return (
        <div className="jumbotron">
            <h1>Pluralsight Administration</h1>
            <p>React, Redux and React Router in ES6</p>
            <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
        </div>
    );
};

export default HomePage;