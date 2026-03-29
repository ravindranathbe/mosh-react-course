import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <Alert onClose={() => console.log("Alert closed")}>
        Hello <span>World</span>
      </Alert>
    </>
  );
}

export default App;
