
import React,{useState} from "react";
//  imports the React library and the useState hook from the react library. The useState hook allows state to be managed in a functional component. imports the React library and the useState hook from the react library. The useState hook allows state to be managed in a functional component.
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// s import the Card and Button components from the react-bootstrap library.


function HornedBeast(props) {
    // The function HornedBeast is defined, which takes in a props object. The props object contains the necessary information to display the content of the component.
    
       const [timeClicked, setClicks]  = useState(0)
       // Inside the HornedBeast function, a state variable called timeClicked is declared using the useState hook. The useState hook takes an initial value of 0 for timeClicked and returns an array with two elements: the current value of timeClicked and a function called setClicks, which is used to update the value of timeClicked.
        function state(){
            setClicks(timeClicked + 1)
            console.log(timeClicked)
        }
        // A new function called state is defined which updates the state by calling the setClicks function and passing in the current value of timeClicked plus one. The console.log statement is used to log the current value of timeClicked to the console for debugging purposes.
    
    return (
        <Card style = {{width:"20rem"}}>
            <h2>{props.title}</h2>
            <img onClick={()=>{
                props.updateFunction(true)
                props.beastUpdateFunction({"title": props.title, "text": props.text, "imageUrl": props.imageUrl})
            }} src={props.imageUrl} class = "mv-100" height={"200px"}/>
            <p>{props.text} </p>
            {/* The function returns a Card component from the react-bootstrap library. The Card component contains the title, image, text, "Like" button, and the counter for the number of times the "Like" button has been clicked. The onClick event listener is attached to the image and updates the parent component using the updateFunction and beastUpdateFunction props passed down to HornedBeast. */}
            {/* &#9829 creates the heart emoji and the timesClick display the amount of times clicked */}
            <Button onClick={state}>Like</Button>
            <p>&#9829;{timeClicked}</p>
        </Card>
        // When the "Like" button is clicked, the onClick event listener calls the state function, which updates the value of timeClicked. The updated value of timeClicked is then displayed next to the heart emoji on the Card.
    )
}


export default HornedBeast
//  the HornedBeast function is exported as the default export of this module, so it can be used in other modules