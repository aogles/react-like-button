import React, { useState } from "react";

function Likes() {
  // Declare a variable to count likes
  const [count, setCount] = useState(0);
  // usestate set to 0, so starts the count= 0 initially then we control th increment
  return (
    <div>
      <p>Click me! </p>
      <button onClick={() => setCount(count + 1)}>Likes {count}</button>
    </div>
  );
}

export default Likes;

// update the current count, we can call setCount
//in order to update count on button use 'this.state.count'
//In a function count can be called directly like in line 10
//use the 'this.state.count +1' in order to increase each by 1
//onClick is linked to the setCount
