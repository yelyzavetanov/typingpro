import React from "react";
import s from "./Row.module.css";
import Key from "./Key/Key";
import KeyboardAndInput from "../../KeyboardAndInput";

const   Row = (props) => {
    return (
        <div className={s.row}>
            {props.row.map(
                k => <Key
                    key={k.code}
                    keyInfo={k}
                    isOnShift={props.isOnShift}
                    remainingText={props.remainingText}
                    wrongText={props.wrongText}
                    rows={props.rows}
                />
            )}
        </div>
    );
}

export default Row;