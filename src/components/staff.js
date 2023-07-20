import React from "react";
import { Link } from 'react-router-dom';
import './staff.css';
import t1 from '../images/p1.jpg';
import t2 from '../images/p2.jpg';
import t3 from '../images/p3.jpg';
import t4 from '../images/p4.jpg';
import t5 from '../images/p5.jpg';
import t6 from '../images/p6.jpg';
import t7 from '../images/p7.jpg';
import t8 from '../images/p8.jpg';

// import Home from "./";

const Staff = () => {
  const cards = [
    {
      id: 1,
      name: 'Jothi',
      description: 'Management',
      image: t1,
    },
    {
      id: 2,
      name: 'Guhan ',
      description: 'Finanace',
      image:  t2,
    },
    {
      id: 3,
      name: 'Jaga',
      description: 'Buisness Consulting',
      image: t3,
    },
    {
      id: 4,
      name: 'Devesh',
      description: 'Information Technology',
      image: t4,
    },
    {
      id: 5,
      name: 'Sathiya',
      description: 'Software Development',
      image:  t5,
    },
    {
      id: 6,
      name: 'Yogesh',
      description: 'Mechanics',
      image: t6,
    },
    {
      id: 7,
      name: 'Ajay',
      description: 'Finanace',
      image: t7,
    },
    {
      id: 8,
      name: 'Deena',
      description: 'entrepreneurship',
      image: t8,
    },
    
  ];

  return (
  
    <div className="topad">
      <div className="topad-header">
        <h1 className="topad-title">Advisor</h1>
        
      </div>
      <div className="topad-cards">
        {cards.map((card) => (
          <div className="topad-card" key={card.id}>
            <div className="card-image">
              <img src={card.image} alt={card.name} />
            </div>
            <div className="card-details">
              <h2 className="card-name">{card.name}</h2>
              <p className="card-description">{card.description}</p>
              <Link to="ad" className="card-link">Select</Link>
            </div>
          
          </div>
        ))}
      </div>
    
                  
      <footer className="homepage-footer">
        
      </footer>
    </div>
       
  );
};

export default Staff;