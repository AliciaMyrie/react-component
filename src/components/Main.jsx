// import React { useState } from "react";
import { useState } from "react";

function Main() {
  const [count, setCount] = useState(0);
  const handleClick = () => count + 1;
  return (
    <main>
      <h2>Main section here.. </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
        reprehenderit eveniet iste nisi cupiditate nihil aspernatur cumque enim
        deleniti tempore accusantium, aut eaque voluptatum recusandae alias
        illum possimus voluptate minima?
      </p>
      <h3>Counter: {count}</h3>
      <button onClick={handleClick}></button> <button>Click Me</button>
    </main>
  );
}

export default Main;
