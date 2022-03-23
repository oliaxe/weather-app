import HeadComponent from "./Components/HeadComponent"
import React from "react";

function App() {

  React.useEffect(function() {
    localStorage.clear()
  }, [])


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
