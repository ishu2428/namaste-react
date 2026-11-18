import React from "react";
import ReactDOM from "react-dom/client";


let BodyComponent=()=>{
    return (
        <div>
            
            <h1>React Body</h1>
        </div>
    );
}
let heading=(<h1>
    <BodyComponent/>
    {BodyComponent()}
    welcome React</h1>);
;

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);