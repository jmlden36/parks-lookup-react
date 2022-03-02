import React from "react";
import '../App.css';
import Header from "./Header";
import ParkList from "./ParkList";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ParkList />
    </React.Fragment>
  );
}

export default App;