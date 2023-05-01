// import { computeHeadingLevel } from "@testing-library/react";
import React from "react"
import Form from 'react-bootstrap/Form';



function MyForm(props) {

    function Onclick (event){
    let value = event.target.value
    props.setfilterBeast(value)
    
        

        console.log("Here", value)
        console.log(event.target.value)
    }
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Pick the Amount OF Horns</Form.Label>
                <Form.Select id="selectFormBlock" onChange={Onclick}>
                    <option value="">--Please choose an option--</option>
                    <option value = "1">1</option>
                    <option value = "2">2</option>
                    <option value = "3">3</option>
                    <option value = "100">100</option>
                </Form.Select>
            </Form.Group>
        </Form>

);

}


export default MyForm;