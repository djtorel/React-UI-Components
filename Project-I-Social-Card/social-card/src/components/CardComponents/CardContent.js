import React from 'react';
import './Card.css';

const CardContent = () => {
  return (
    <div className="card-content-container">
      <p className="card-content-header">Get started with React</p>
      <p>
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application.
      </p>
      <a href="http://reactjs.org">reactjs.org</a>
    </div>
  );
};

export default CardContent;
