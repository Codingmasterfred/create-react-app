import "./App.css"
import React,{useState} from "react";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

// import {Card, Button} from "./index.html";
// useState is a built in function from react that keep track of the state
function HornedBeast(props) {
    
       const [timeClicked, setClicks]  = useState(0)
       // useState is a built-in method that keep track and updates the state 
       //timesClick is the created property, setClicks is a function that increments the times click when its invoked
        function state(){
            setClicks(timeClicked + 1)
            console.log(timeClicked)
        }
    
    return (
        <Card style = {{width:"20rem"}}>
            <h2>{props.title}</h2>
            <img src={props.imageUrl} class = "mv-100" height={"200px"}/>
            <p>{props.text}</p>
            {/* &#9829 creates the heart emoji and the timesClick display the amount of times clicked */}
            <Button onClick={state}>Like</Button>
            <p>&#9829;{timeClicked}</p>
        </Card>
    )
}


export default HornedBeast