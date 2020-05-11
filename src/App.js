import React, { useState } from 'react';
import PostcodeEntry from './components/PostcodeEntry.js';
import './App.css';

function App() {

  const [postcode, setPostcode] = useState('');

  return (
    <div className="App">
      <header className="App-header">
     Sandwich Express
      </header>
      <PostcodeEntry
      setPostcode={setPostcode}
      postcode={postcode}
      />
    </div>
  );
}

export default App;
