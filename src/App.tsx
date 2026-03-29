import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <>
      <ListGroup
        items={["New York", "Los Angeles", "Chicago"]}
        heading="Cities"
      />
    </>
  );
}

export default App;
