import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
    { id: 3, title: "Bug 3", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <>
      <h1>Bugs</h1>

      <ul>
        {bugs.map((bug) => (
          <li key={bug.id}>
            {bug.title} {bug.fixed ? "Fixed" : "Not Fixed"}
          </li>
        ))}
      </ul>

      <button className="btn btn-primary" onClick={handleClick}>
        Mark Bug 1 as Fixed
      </button>
    </>
  );
}

export default App;
