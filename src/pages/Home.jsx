import React from 'react';
import gear from '../gear.png';
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <img src={gear} className="App-logo" alt="logo" />
      <p>This is the home page content.</p>
    </div>
  );
}

export default Home;
