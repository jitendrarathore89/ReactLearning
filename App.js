import React from "react";
import ReactDom from "react-dom/client";
import data from "./data"
// Create nested React Elements
/*const heading = React.createElement(
  "h1",
  {
    id: "title",
    style: {
      background:"red",
    },
    className:"title"
  },
  "heading"
);
const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "heading1"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading1]
);*/

/*const Fuctionalcomponent1 = ()=>{
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
}*/
const Header = () => {
  return (<div>This is my Header</div>)

}

const ProductitemCards = (props) => {
  return (
    <>
      <div style={{ borderBottom: "1px solid black" }}>
        <h3>Title is : {props.title}</h3>
        <h3>This is : {props.body}</h3>
      </div>
    </>
  );
};

const Body = () => {
  return (
    <>
      {
      data.map((productitemList) => (
        <ProductitemCards title={productitemList.title} body={productitemList.body}/>
      ))
      }
    </>
  );
};
const Footer = () => {
  return (<div>This is my Footer</div>)
}
const App = () => {
  return (
  <>
        <Header />
        <Body />
        <Footer />
  </>
  )

}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);