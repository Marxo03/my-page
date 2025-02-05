import React from 'react';
import '../styles/styles-components.css';

const Cube = () => {
  return (   
      <div className="cube-container">
        <div className="cube">
          <div className="face front">
            <img 
                src="https://i.pinimg.com/originals/c4/2f/05/c42f0562ba5868acab46f6a1b6aaa303.gif" alt="logo" 
                width="200px" 
                height="auto"/>
          </div>
          <div className="face back">
            <img 
                src="https://i.pinimg.com/originals/c4/2f/05/c42f0562ba5868acab46f6a1b6aaa303.gif" alt="logo" 
                width="200px" 
                height="auto"/>
          </div>
          <div className="face right">
            <img 
                src="https://i.pinimg.com/originals/c4/2f/05/c42f0562ba5868acab46f6a1b6aaa303.gif" alt="logo" 
                width="200px" 
                height="auto"/>
          </div>
          <div className="face left"><img 
                src="https://i.pinimg.com/originals/c4/2f/05/c42f0562ba5868acab46f6a1b6aaa303.gif" alt="logo" 
                width="200px" 
                height="auto"/>
          </div>
          <div className="face top"><img 
                src="https://i.pinimg.com/originals/c4/2f/05/c42f0562ba5868acab46f6a1b6aaa303.gif" alt="logo" 
                width="200px" 
                height="auto"/>
          </div>
          <div className="face bottom"><img 
                src="https://i.pinimg.com/originals/c4/2f/05/c42f0562ba5868acab46f6a1b6aaa303.gif" alt="logo" 
                width="200px" 
                height="auto"/>
          </div>
        </div>
      </div>
  );
}


export default Cube;
