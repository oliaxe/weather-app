import React from "react";
import Search from "./Search";
import ShowPreviousButton from "./ShowPreviousButton";

export default function GetLocalStorage(){
    
    const [searches, setSearches] = React.useState([])
    const [show, setShow] = React.useState(true)

    let archive = [],
    keys = Object.keys(localStorage),
    i = 0, key;

  for (; key = keys[i]; i++) {
    archive.push(localStorage.getItem(key));
  }
    console.log(archive);

    React.useEffect(() =>
    setSearches(archive.map((arc) => arc)

    ), [])

    function showPrevious(){
        setShow(prevShow => !prevShow)
       }


  console.log(searches);
    

    return (
        <div>
        <button className="showPrevious" onClick={showPrevious}>Show previous searches</button>
        {show && <ShowPreviousButton
        searches={searches}
        />}

        </div>
    )
}