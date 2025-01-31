import React from 'react';
import gear from '../gear.png';
function About() {
  return (
    <div>
      <h1>About Us</h1>
      <img src={gear} className="App-logo" alt="logo" />
      <p>This is the about page content.</p>
    </div>
  );
}

export default About;
