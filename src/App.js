import React, { useState, useEffect } from 'react';
import PostcodeEntry from './components/PostcodeEntry.js';
import SandwichChoice from './components/SandwichChoice.js';
import AddressEntry from './components/AddressEntry.js';
import Basket from './components/Basket.js';

import './App.css';

function App() {

  const [postcode, setPostcode] = useState('');
  const [sandwiches, setSandwiches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/sandwiches")
      .then(res => res.json())
      .then(data => setSandwiches(data._embedded.sandwiches))      
  }, [])

  return (
    <div className="App">
      <h1 className="App-header">
      Just Sandwich
      </h1>
      <PostcodeEntry
      setPostcode={setPostcode}
      postcode={postcode}
      />
      <SandwichChoice sandwiches={sandwiches}/>
      <AddressEntry/>
      <Basket/>
    </div>
    );
  };

export default App;
