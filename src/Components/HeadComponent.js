import Search from "./Search";
import BigCities from "./BigCities";
import GetLocalStorage from "./GetLocalStorage";


export default function HeadComponent(){


return (
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

)
}
