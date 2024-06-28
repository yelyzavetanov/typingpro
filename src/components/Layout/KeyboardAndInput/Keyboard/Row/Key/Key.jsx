import React from "react";
import "./Key.css";

const Key = (props) => {
    const findKeyShift = () => {
        let keyShift = "";
        for (let i = 0; i < props.rows.length; i++) {
            if (props.rows[i].some(k => k.onShift === props.remainingText[0])) {
                keyShift = props.rows[i].filter(k => k.onShift === props.remainingText[0])[0].shift;
            }
        }
        return keyShift;
    }

    const setKeyStyle = () => {
        if (props.wrongText[props.wrongText.length - 1] === props.keyInfo.key) {
            return {background: "red", color: "white"}
        }
        if (props.remainingText[0].toLowerCase() === props.keyInfo.key) {
            // return {background: "#017fcc", color: "white"}
            return {background: "linear-gradient(to top right, #9d00c6, #00ffed)", color: "white"}
        }

        if (props.remainingText[0].toUpperCase() === props.remainingText[0]) {
            if (findKeyShift() === "right") {
                if (props.keyInfo.code === "ShiftRight") {
                    // return {background: "#017fcc", color: "white"}
                    return {background: "linear-gradient(to top right, #9d00c6, #00ffed)", color: "white"}
                }
            } else if (findKeyShift() === "left") {
                if (props.keyInfo.code === "ShiftLeft") {
                    // return {background: "#017fcc", color: "white"}
                    return {background: "linear-gradient(to top right, #9d00c6, #00ffed)", color: "white"}
                }
            }
        }

        return {};
    }

    const setKeyClassName = () => {
        return (
            `key ${props.keyInfo.className} 
            ${props.keyInfo.isLong ? "long" : ""} 
            ${props.keyInfo.code === "Space" ? "space" : ""}`
        )
    }

    return (
        <div style={setKeyStyle()} className={setKeyClassName()}>
            <div>
                {props.isOnShift
                    ? props.keyInfo.onShift
                        ? props.keyInfo.onShift
                        : props.keyInfo.key
                    : props.keyInfo.key}
            </div>
            <div>{props.keyInfo.text && props.keyInfo.text}</div>
        </div>
    );
}

export default Key;