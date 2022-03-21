import Search from "./Components/Search";
import BigCities from "./Components/BigCities";
import GetLocalStorage from "./Components/GetLocalStorage";

function App() {
  return (
    <div className="whole">
    <div className="App">
      <div className="left">
      <header className="App-header">
      <Search/>
      </header>
      <div className="container">
      <BigCities
      city="Longyearbyen"/>
      <BigCities
      city="London"/>
      <BigCities
      city="Stockholm"/>
      <BigCities
      city="Mumbai"/>
      <BigCities
      city="Hanoi"/>
      <BigCities
      city="Rome"/>     
       <BigCities
      city="Paris"/>
      <BigCities
      city="Berlin"/>
      </div>
      </div>
      <div className="getlocal">
      <GetLocalStorage/>
      </div>
    </div>
    </div>
  );
}

export default App;
