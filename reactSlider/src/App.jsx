import Works from "./components/works/Works";
import { useState } from "react";
import "./app.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <div className="sections">
        <Works />
      </div>
    </div>
  );
}

export default App;
