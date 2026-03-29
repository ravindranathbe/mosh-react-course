import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <ListGroup
        items={["New York", "Los Angeles", "Chicago"]}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
