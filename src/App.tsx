import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);

  const handleClick = () => {
    setTags([...tags, "tag4"]);
  };

  const handleUpdate = () => {
    setTags(tags.map((tag) => (tag === "tag2" ? "tag2-updated" : tag)));
  };

  return (
    <>
      <h1>Tags: {tags.map((tag) => tag + " ")}</h1>
      <button className="btn btn-primary" onClick={handleClick}>
        Add Tag
      </button>
      <br />
      <button className="btn btn-primary" onClick={handleUpdate}>
        Update Tag "tag2" to "tag2-updated"
      </button>
    </>
  );
}

export default App;
