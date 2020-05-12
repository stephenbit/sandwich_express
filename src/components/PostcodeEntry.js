import React, { useState } from 'react';

function PostcodeEntry({setPostcode, postcode}) {

const [ postcodeLocal, setPostcodeLocal ] = useState('')

  function handlePostcodeChange(event) {
    setPostcodeLocal(event.target.value);
    console.log(event.target.value);
  };

  function handleSubmit(event) {
    setPostcode(postcodeLocal)
  };

  return (
    <div>
      <input
      type="text"
      onChange={handlePostcodeChange}
      defaultValue="Enter Postcode"
      >

      </input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
    );
  };

export default PostcodeEntry;