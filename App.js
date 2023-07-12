import React from "react";
import  ReactDOM  from "react-dom";
const element1 = React.createElement('h1', {id:"txtFname"}, 'Hello React');
const element2 = React.createElement('h2', {id:"txtLname"}, 'Hello Javascript');
const element3 = React.createElement('div',{id:"txtFullname"},[element1,element2]);
//element3.appendchild([element1,element2])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element3);