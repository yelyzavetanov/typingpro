import React, {useState} from "react";
import s from "./Keyboard.module.css";
import Row from "./Row/Row";
import KeyboardAndInput from "../KeyboardAndInput";

const Keyboard = (props) => {
    return (
        <div>
            {!props.isTypingTest &&
            <div className={s.keyboard}>
                {props.keyboard.rows.map(
                    r => <Row
                        key={props.keyboard.rows.indexOf(r)}
                        row={r}
                        isOnShift={props.isOnShift}
                        remainingText={props.remainingText}
                        wrongText={props.wrongText}
                        rows={props.keyboard.rows}
                    />
                )}
            </div>
            }
            <div className={s.altText}>{props.textElements.altText[props.language]}</div>
        </div>
    );
}

export default Keyboard;