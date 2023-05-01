import React from "react";
// : Importing the React library from the "react" module
import './App.css';
//  Importing the CSS file for the App component.
import Header from "./Header";
//  Importing the Header component from the "Header.js" file.
import Footer from "./Footer";
//  Importing the Footer component from the "Footer.js" file.
import Main from "./Main";
//  Importing the Main component from the "Main.js" file.
import data from "./data.json";
// Importing data from the "data.json" file.
import {useState} from "react";
//  Importing the useState hook from the React library.
import SelectedBeast from "./SelectedBeast";
// Importing the SelectedBeast component from the "SelectedBeast.js" file.
import MyForm from "./Form"

function App() {
  //  Defining a function component named "App"
  const [displaySelectedBeast, SetDisplaySelectedBeast] = useState(false)
  // Using the useState hook to declare two variables - displaySelectedBeast and SetDisplaySelectedBeast. displaySelectedBeast is initialized to false and SetDisplaySelectedBeast is a function used to update the value of displaySelectedBeast.
  const [currentSelectedBeast, setCurrentSelectedBeast] = useState(undefined)
  const [filterBeast, setfilterBeast] = useState(null)
  // Using the useState hook to declare two variables - currentSelectedBeast and setCurrentSelectedBeast. currentSelectedBeast is initialized to undefined and setCurrentSelectedBeast is a function used to update the value of currentSelectedBeast.
  //  const [DisplayedHornedBeast, UpdatingDisplayedBeast] = useState(false);

  let SelectedBeastHTML = <SelectedBeast SetDisplaySelectedBeast={SetDisplaySelectedBeast} beast={currentSelectedBeast}/>
  //  Creating a variable named SelectedBeastHTML and initializing it with the SelectedBeast component. This component receives two props - SetDisplaySelectedBeast and beast, which are used to update the value of displaySelectedBeast and currentSelectedBeast respectively.
  if(displaySelectedBeast === false){
    SelectedBeastHTML = <div></div>
  }
  // Checking if displaySelectedBeast is false. If it is, then SelectedBeastHTML is set to an empty div element.
  let FormFilterBeast = <MyForm filterBeast={filterBeast} setfilterBeast={setfilterBeast}/>
  return (
    //  Returning the JSX code that makes up the App component.
    <div className="App">
      {/* Creating a div element with a class name of "App" */}
       <Header/> 
      {/* Rendering the Header component. */}

      {FormFilterBeast}
      {console.log("filterbeast",filterBeast)}
      {console.log("SelectedBeastHTML",SelectedBeastHTML.horns)}
      {SelectedBeastHTML}
      {/* Rendering the SelectedBeastHTML variable, which will be either the SelectedBeast component or an empty div element depending on the value of displaySelectedBeast. */}
      <Main data = {data} updateFunction={SetDisplaySelectedBeast} beastUpdateFunction={setCurrentSelectedBeast} HornsOfHornedBeastThatShouldDisplay={filterBeast}/>
      {/* Rendering the Main component and passing in the data, SetDisplaySelectedBeast, and setCurrentSelectedBeast as props. */}
      <Footer/>
      {/* Rendering the Footer component */}

    </div>
  );
}

export default App;
