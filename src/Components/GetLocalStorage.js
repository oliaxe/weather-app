import React from "react";
import Search from "./Search";
import ShowPrevious from "./ShowPrevious";
import HeadComponent from "./HeadComponent";

export default function GetLocalStorage(props){
    

    let archive = [],
    keys = Object.keys(localStorage),
    i = 0, key;

  for (; key = keys[i]; i++) {
    archive.push(localStorage.getItem(key));
  }
    console.log(archive);

    React.useEffect(() =>
    props.setSearches(archive.map((arc) => arc)
    ), [])


  console.log(props.searches);
    
    return (
        <div>
        <button className="showPrevious" onClick={props.showPrevious}>Show previous searches</button>
        {props.show && <ShowPrevious
        searches={archive}
        />}

        </div>
    )
}