import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>Hello World</Alert>
      )}
      <Button
        label="Button"
        color="primary"
        onClick={() => setAlertVisible(true)}
      />
    </>
  );
}

export default App;
