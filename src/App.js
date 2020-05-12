import React, { useState } from 'react';
import PostcodeEntry from './components/PostcodeEntry.js';
import SandwichChoice from './components/SandwichChoice.js';
import AddressEntry from './components/AddressEntry.js';

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
      <SandwichChoice/>
      <AddressEntry/>
    </div>
    );
  };

export default App;
