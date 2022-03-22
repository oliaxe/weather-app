import Search from "./Components/Search";
import BigCities from "./Components/BigCities";
import GetLocalStorage from "./Components/GetLocalStorage";
import HeadComponent from "./Components/HeadComponent"
import React from "react";

function App() {

  const [searches, setSearches] = React.useState([])

  let archive = [],
      keys = Object.keys(localStorage),
      i = 0, key;

  for (; key = keys[i]; i++) {
      archive.push(localStorage.getItem(key));   
  }

  return (
    <div className="whole">
      <HeadComponent/>
    </div>
  );
}

export default App;
