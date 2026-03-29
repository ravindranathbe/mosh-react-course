import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      street: "123 Main St",
      city: "New York",
      zipCode: "12345",
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: "12121" },
    });
  };

  return (
    <>
      <h1>Name: {customer.name}</h1>
      <p>Zip Code: {customer.address.zipCode}</p>
      <button className="btn btn-primary" onClick={handleClick}>
        Update Zip Code to "12121"
      </button>
    </>
  );
}

export default App;
