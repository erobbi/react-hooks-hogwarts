import React from "react";
import Nav from "./Nav";
import TileData from "./TileData";
import hogs from "../porkers_data";

function App() {
  return (
    <div className="App">
      <Nav />
      <TileData hogsData = {hogs} />
     </div>
  );
}

export default App;
