import React from 'react';
import EggMayo from "../images/EggMayo.jpeg";
import CoronationChicken from "../images/CoronationChicken.jpeg";
import Cheese from "../images/Cheese.jpeg";

function SandwichChoice() {

// const [ a, setA ] = useState('')

  return (
    <div>
      <h2>Choose Your Sandwich!</h2>
      <form>
        <input type="image" src={EggMayo} alt="Egg Mayonaise Sandwich"/>
        <label>Egg Mayonaise Sandwich</label><input type="number" id="quantity" name="quantity" min="1" max="10"/>
        <button>Add to basket</button>
      </form>

      <form>
        <input type="image" src={CoronationChicken} alt="Coronation Chicken Sandwich"/>
        <label>Coronation Chicken Sandwich</label><input type="number" id="quantity" name="quantity" min="1" max="10"/>
        <button>Add to basket</button>
      </form>
      <form>
        <input type="image" src={Cheese} alt="Cheese Sandwich"/>
        <label>Cheese Sandwich</label><input type="number" id="quantity" name="quantity" min="1" max="10"/>
        <button>Add to basket</button>
      </form>
    </div>
    );
  };

export default SandwichChoice;