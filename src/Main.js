import HornedBeast from "./HornedBeast"
import Gallery from "./data.json"
import React from "react"
import "./App.css"

function Main() {
    return (
        <div class = "Div">
            
            <HornedBeast Title={Gallery[0].title} imageUrl={Gallery[0].image_url} text={Gallery[0].description} timeClicked={0} />
            <HornedBeast Title={Gallery[1].title} imageUrl={Gallery[1].image_url} text={Gallery[1].description} timeClicked={0} />
            <HornedBeast Title={Gallery[2].title} imageUrl={Gallery[2].image_url} text={Gallery[2].description} timeClicked={0} />
            <HornedBeast Title={Gallery[3].title} imageUrl={Gallery[3].image_url} text={Gallery[3].description} timeClicked={0} />
            <HornedBeast Title={Gallery[4].title} imageUrl={Gallery[4].image_url} text={Gallery[4].description} timeClicked={0} />
            <HornedBeast Title={Gallery[5].title} imageUrl={Gallery[5].image_url} text={Gallery[5].description} timeClicked={0} />
            <HornedBeast Title={Gallery[6].title} imageUrl={Gallery[6].image_url} text={Gallery[6].description} timeClicked={0} />
            <HornedBeast Title={Gallery[7].title} imageUrl={Gallery[7].image_url} text={Gallery[7].description} timeClicked={0} />
            <HornedBeast Title={Gallery[8].title} imageUrl={Gallery[8].image_url} text={Gallery[8].description} timeClicked={0} />
            <HornedBeast Title={Gallery[9].title} imageUrl={Gallery[9].image_url} text={Gallery[9].description} timeClicked={0} />
            <HornedBeast Title={Gallery[10].title} imageUrl={Gallery[10].image_url} text={Gallery[10].description} timeClicked={0} />
            <HornedBeast Title={Gallery[11].title} imageUrl={Gallery[11].image_url} text={Gallery[11].description} timeClicked={0} />
            <HornedBeast Title={Gallery[12].title} imageUrl={Gallery[12].image_url} text={Gallery[12].description} timeClicked={0} />
            <HornedBeast Title={Gallery[13].title} imageUrl={Gallery[13].image_url} text={Gallery[0].description} timesClicked={0} />
            <HornedBeast Title={Gallery[14].title} imageUrl={Gallery[14].image_url} text={Gallery[0].description} timesClicked={0} />
            <HornedBeast Title={Gallery[15].title} imageUrl={Gallery[15].image_url} text={Gallery[0].description} timesClicked={0} />
            <HornedBeast Title={Gallery[16].title} imageUrl={Gallery[16].image_url} text={Gallery[0].description} timesClicked={0} />
            <HornedBeast Title={Gallery[17].title} imageUrl={Gallery[17].image_url} text={Gallery[0].description} timesClicked={0} />
            <HornedBeast Title={Gallery[18].title} imageUrl={Gallery[18].image_url} text={Gallery[0].description} timesClicked={0} />
            <HornedBeast Title={Gallery[19].title} imageUrl={Gallery[19].image_url} text={Gallery[0].description} timesClicked={0} />
        </div>
    );

};


export default Main;