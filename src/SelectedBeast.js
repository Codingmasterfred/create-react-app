// import {useState} from "react";
//This line imports the useState hook from the React library, which is used to manage state in functional components.
import React from "react"
//This line imports the main React library, which is required in all React components.
import Modal from "react-bootstrap/Modal"
//This line imports the Modal component from the React-Bootstrap library, which is a pre-built component for creating modals in React.
import Button from "react-bootstrap/Button"
//This line imports the Button component from the React-Bootstrap library, which is a pre-built component for creating buttons in React.
function SelectedBeast(props){
//This is a functional component named SelectedBeast that takes props as its argument.
 const handleClose = () => props.SetDisplaySelectedBeast(false);
// This line creates a constant named handleClose, which is a function that sets the displaySelectedBeast state to false when called.

return ( 
<Modal id="Modal" show={true} onHide={handleClose}>
{/* This is a Modal component that is displayed when show is set to true, and handleClose is called when the close button is clicked. */}
    <Modal.Header id="ModalHeader" closeButton>
    {/* This is the header section of the Modal, which contains a title and a close button. */}
      <Modal.Title>{props.beast.title}</Modal.Title>
      {/* This line displays the title of the beast passed in as a prop. */}
    </Modal.Header>
    <Modal.Body id="ModalImgDiv"><img id="ModalImg" alt="ImageInbody" src ={props.beast.imageUrl}/>{props.beast.text}</Modal.Body>
    {/* This line displays the imageUrl and text of the beast passed in as a prop. */}
    <Modal.Footer>
        {/* This is the footer section of the Modal, which contains buttons. */}
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      {/*  This line creates a secondary button with the text "Close" that calls handleClose when clicked. */}
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
      {/* This line creates a primary button with the text "Save Changes" that calls handleClose when clicked. */}
    </Modal.Footer>
  </Modal>)
}

export default SelectedBeast
// This line exports the SelectedBeast component as the default export of this module, so that it can be imported and used in other modules.