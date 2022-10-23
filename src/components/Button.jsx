import React from 'react';


const Button = ({button , style}) => {
  let color=style.colorButton;
  console.log(color);
  return (
    <div className='button' >
      <button  style={{backgroundColor: color}} onClick={button}><i className="fa-solid fa-chevron-right"></i></button>
    </div>
  );
};

export default Button;