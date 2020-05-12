import React from 'react';

function AddressEntry() {

    return (
    <div>
        <form>
        <label>Full name:</label>
        <input type="text"></input>

        <label>Address line one:</label>
        <input type="text"></input>

        <label>City:</label>
        <input type="text"></input>

        <label>Postcode:</label>
        <input type="text"></input>
        </form>
    </div>
    );
};

export default AddressEntry;