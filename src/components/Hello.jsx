import React from "react";
 
const Hello = (props) => {

    let result = 'React JSX';
    let isJsx = true;
    return (<div>{ isJsx ? <h2 key={props.name}>Hello {props.name}</h2>: ""}</div>)
}

export default Hello;

