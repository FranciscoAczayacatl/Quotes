import React from 'react';



const Card = ({author,quote}) => {
  return (
    <div >
      <div className='card-p'>
        <i className="fa-solid fa-quote-left"></i>
        <p>{quote}</p>
      </div>
      <div className='card-b'>
        <h1>{author}</h1> 
      </div>
      
    </div>
  );
};

export default Card;