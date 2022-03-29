import React, { useState } from "react";

import "../styles/App.css";

const data = {
  "2018": ["Avengers 1", "Now you see me", "Fast and Furious 7"],
  "2019": ["Avengers 2", "Now you see me 2", "Fast and Furious 8"],
  "2020": [
    "Final Avengers Movie(Iron man dies)",
    "Now you finally used Lenskart",
    "Covid Came"
  ],
  "2021": ["Covid Returns"],
  "2022": ["Adventures of Saiman", "Adventures of Shaktiman"]
};
const App = () => {
  const [year, setYear] = useState("");
  const handlechange = (e) => {
    setYear(e.target.value);
  };
  return (
    <div id="main">
      <select onChange={handlechange}>
        <option value={null}></option>
        <option>2018</option>
        <option>2019</option>
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
      </select>
      <div id="selected-year">No year selected {year}</div>
    </div>
  );
};

export default App;
