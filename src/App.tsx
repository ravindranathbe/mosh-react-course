import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Button
        label="Button"
        color="primary"
        onClick={() => console.log("Button clicked")}
      />
    </>
  );
}

export default App;
