import React, { useState } from 'react';

function SandwichChoice({sandwiches}) {
    const sandwichList = sandwiches.map(sandwich => {
      return (
        <ul>
          <li
            key={sandwich._links.sandwich}>
            <img
            src={`images/${sandwich.photoId}.jpeg`}
            alt={sandwich.name}
            />
            {sandwich.name}
          </li>
        </ul>
    )
    })

  return (
    <div>
      <h2>Choose Your Sandwich!</h2>

      {sandwichList}

      {/* <form>
        <input type="image" src={EggMayo} alt="Egg Mayonaise Sandwich"/>
        <label>Egg Mayonaise Sandwich</label>
        <input type="number" id="quantity" name="quantity" min="1" max="10"/>
        <button>Add to basket</button>
      </form>

      <form>
        <input type="image" src={CoronationChicken} alt="Coronation Chicken Sandwich"/>
        <label>Coronation Chicken Sandwich</label>
        <input type="number" id="quantity" name="quantity" min="1" max="10"/>
        <button>Add to basket</button>
      </form>

      <form>
        <input type="image" src={Cheese} alt="Cheese Sandwich"/>
        <label>Cheese Sandwich</label>
        <input type="number" id="quantity" name="quantity" min="1" max="10"/>
        <button>Add to basket</button>
      </form> */}

    </div>

    
    );
    const styles = StyleSheet.create({
      container: {
        marginTop: 50,
      },
      bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
      },
      red: {
        color: 'red',
      },
    });
  };

export default SandwichChoice;