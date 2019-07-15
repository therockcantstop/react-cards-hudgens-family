import React from "react";
import ReactDOM from "react-dom";
import EventsList from "./EventsList";
import { eventsData } from "./data";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>The Hudgens Family</h1>
      <EventsList data={eventsData} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
