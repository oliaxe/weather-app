import Search from "./Components/Search";
import BigCities from "./Components/BigCities";

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
