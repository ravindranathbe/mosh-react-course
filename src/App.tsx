import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Like from "./components/Like";

function App() {
  return (
    <div>
      <Like onClick={() => console.log("Liked")} />
    </div>
  );
}

export default App;
