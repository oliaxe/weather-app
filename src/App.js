import Search from "./Components/Search";
import BigCities from "./Components/BigCities";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Search/>
      </header>
      <div className="bigCitiesArea">
      <BigCities
      city="Longyearbyen"/>
      <BigCities
      city="London"/>
      <BigCities
      city="Stockholm"/>
      </div>
    </div>
  );
}

export default App;
