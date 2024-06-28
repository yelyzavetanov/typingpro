import React from "react";
import s from "./LayoutDescription.module.css";

const LayoutDescription = (props) => {
    return (
        <div className={s.layoutDescription}>
            {props.textElements.getStarted[props.language]}
        </div>
    );
}

export default LayoutDescription;