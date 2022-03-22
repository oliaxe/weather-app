import React from "react";

export default function ShowPreviousButton(props){



return (
    <div>
    <h1 className="previous">Previous searches</h1>
    {props.searches.map((arc) => 
    <p className="arc">{arc}</p>
    )}
    </div>

)}