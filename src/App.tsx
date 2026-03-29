import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [drink, setDrink] = useState({
    title: "Water",
    price: 0,
  });

  return (
    <>
      <h1>Title: {drink.title}</h1>
      <p>Price: ${drink.price}</p>
      <button
        className="btn btn-primary"
        onClick={() => setDrink({ ...drink, price: drink.price + 1 })}
      >
        Increase price
      </button>
    </>
  );
}

export default App;
