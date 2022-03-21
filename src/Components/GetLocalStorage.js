import React from "react";
export default function GetLocalStorage(){
    
    const [searches, setSearches] = React.useState([])

    let archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;

    for (; key = keys[i]; i++) {
        archive.push(localStorage.getItem(key));   
    }
    
    return (
        <div>
        <h1 className="previous">Previous searches</h1>
        {archive.map((arc) => 
        <p className="arc">{arc}</p>
        )}
        </div>
    )

}