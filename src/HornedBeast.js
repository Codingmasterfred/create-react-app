import "./App.css";

function HornedBeast(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.imageUrl}/>
            <p>{props.text}</p>
        </div>
    )
}

export default HornedBeast