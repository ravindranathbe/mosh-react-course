import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [drink, setDrink] = useState({
    title: "Water",
    price: 0,
  });

  const handleClick = () => {
    setDrink({ ...drink, price: drink.price + 1 });
  };

  return (
    <>
      <h1>Title: {drink.title}</h1>
      <p>Price: ${drink.price}</p>
      <button className="btn btn-primary" onClick={handleClick}>
        Increase price
      </button>
    </>
  );
}

export default App;
