import React, { useState } from 'react';
import PostcodeEntry from './components/PostcodeEntry.js';
import './App.css';

function App() {

  const [postcode, setPostcode] = useState('');

  return (
    <div className="App">
      <h1 className="App-header">
     Sandwich Express
      </h1>
      <PostcodeEntry
      setPostcode={setPostcode}
      postcode={postcode}
      />
    </div>
  );
}

export default App;
