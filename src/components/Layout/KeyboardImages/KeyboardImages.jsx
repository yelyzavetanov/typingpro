import React from "react";
import s from "./KeyboardImages.module.css";
import img1 from "../../../img/keyboardImg/keyboard.png";
import img2 from "../../../img/keyboardImg/main_keys.png";

const KeyboardImages = (props) => {
    return(
        <div className={s.keyboardImages}>
            <div className={s.header}>
                {props.textElements.fingersPosition[props.language]}
            </div>
            <div className={s.imgCont}>
                <img alt={""} src={img2}/>
                <img alt={""} src={img1}/>
            </div>
        </div>
    );
}

export default KeyboardImages;