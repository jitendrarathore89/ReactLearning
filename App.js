import React from "react";
import ReactDom from "react-dom/client";



const Fuctionalcomponent1 = ()=>{
  return (<>
  <p style={{color: "red"}}>this is javascript</p>
  </>)
}

const Fuctionalcomponent2 = () => {
  return <>
    <p style={{color: "green"}}>this is react</p>
  </>
}
const Fuctionalcomponent3 = () => {
  return( 
  <>
  <Fuctionalcomponent1/>
  <Fuctionalcomponent2/>
  </>)
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Fuctionalcomponent3 />);