import React from 'react';
import ReactDOM from 'react-dom';
import './Error.css';
import Button from "../UI/Button";
import Card from "../UI/Card";


const Backdrop = props => {
    return <div className="backdrop" onClick={props.hideError}/>
};

const Overlay = props => {
    return <Card className={props.className}>
        <h2>Invalid Input</h2>
        <label>{props.error}</label>
        <Button className="error-button" onClick={props.hideError}>OK</Button>
    </Card>
};

const Error = props => {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop hideError={props.hideError}/>,
                document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(
                <Overlay className={props.className} error={props.error} hideError={props.hideError}/>,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>

    )
};

export default Error;