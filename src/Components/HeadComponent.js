import Search from "./Search";
import BigCities from "./BigCities";
import GetLocalStorage from "./GetLocalStorage";
import React from "react";

export default function HeadComponent(){
    const [show, setShow] = React.useState(false)
    const [searches, setSearches] = React.useState([])

    const apiKey = 'M2CnSr9c7j4vgM4jJBRSxt2jsAekQvbS';


    function showPrevious(){
        setShow(prevShow => !prevShow)        
       }



return (
<div className="App">
<div className="left">
<header className="App-header">
<Search
setShow={setShow}
apiKey={apiKey}/>

</header>
<div className="container">
<BigCities
apiKey={apiKey}
city="Longyearbyen"/>
<BigCities
apiKey={apiKey}
city="London"/>
<BigCities
apiKey={apiKey}
city="Stockholm"/>
<BigCities
apiKey={apiKey}
city="Mumbai"/>
<BigCities
apiKey={apiKey}
city="Hanoi"/>
<BigCities
apiKey={apiKey}
city="Rome"/>     
 <BigCities
apiKey={apiKey}
city="Paris"/>
<BigCities
apiKey={apiKey}
city="Berlin"/>
</div>
</div>
<div className="getlocal">
<GetLocalStorage
show={show}
showPrevious={showPrevious}
searches={searches}
setSearches={setSearches}
/>
</div>
</div>

)
}
