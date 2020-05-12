import React from 'react';

function AddressEntry() {

    return (
    <div>
    <h3>Enter Your Address</h3>
        <form>
        <label>Full name:</label>
        <input type="text"></input>

        <label>Address line one:</label>
        <input type="text"></input>

        <label>City:</label>
        <input type="text"></input>

        <label>Postcode:</label>
        <input type="text"></input>

        <button>GO!</button>
        </form>
    </div>
    );
};

export default AddressEntry;