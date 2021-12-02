import React from "react";


function Inputs(props) {

    return (<div className="myTableStyle">

        <input type={props.text} placeholder={props.placeholder} />

    </div>);
}

export default Inputs;