import React from "react";
import "./Wrapper.css";

const Wrapper = props => (
    <div className="container" style= {{width: "800px"}} >
                {props.children}
    </div>
);

export default Wrapper;