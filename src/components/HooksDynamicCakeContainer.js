import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksDynamicCakeContainer() {
  const [numberOfCake, setNumberOfCake] = useState(1);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cake - {numOfCakes}</h2>
      <input
        type="text"
        value={numberOfCake}
        onChange={(e) => setNumberOfCake(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(numberOfCake))}>
        Buy {numberOfCake} Cake
      </button>
    </div>
  );
}

export default HooksDynamicCakeContainer;
