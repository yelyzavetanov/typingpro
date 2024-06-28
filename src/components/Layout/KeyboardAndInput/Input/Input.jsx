import React, {useEffect, useState} from "react";
import s from "./Input.module.css";

const Input = (props) => {
    let [rerender, setRerender] = useState(false);

    document.addEventListener("keydown", (event) => onWriteText(event), {once: true});

    useEffect(() => {
        props.setMistakes(0);
        props.setTypedText("");
        props.setWrongText("");
        props.setRemainingText(props.keyboard.texts[props.currentLevel][props.currentExercise].text);
        // setRemainingText(props.keyboard.texts[0][1].text);

    }, [props.currentLevel, props.currentExercise]);

    useEffect(() => {}, [rerender]);

    const onWriteText = (event) => {
        if(props.typedText.length === 1) {
            props.setStartTime((new Date()).getTime());
        }
        if(props.remainingText.length === 1) {
            props.setEndTime((new Date()).getTime());
            props.setIsFinalWinow(true);
        }

        if (event.shiftKey === true) {
            props.toggleIsOnShift(true);
            document.addEventListener("keyup", (event) => {
                if (event.key === "Shift") {
                    props.toggleIsOnShift(false);
                }
            });
        }

        if (event.code === "Space") {
            event.preventDefault();

        }

        if (event.key === props.remainingText[0] && props.wrongText.length === 0) {
            props.setTypedText(props.typedText + event.key);
            props.setRemainingText(props.remainingText.slice(1));

        } else if (
            event.key !== props.remainingText[0] &&
            !(props.keyboard.notTypingKeys.some(k => k === event.key))
        ) {
            props.setWrongText(props.wrongText + event.key);
            props.setMistakes(props.mistakes + 1);

        } else if (event.key === "Backspace" && props.wrongText.length > 0) {
            props.setWrongText(props.wrongText.slice(0, -1));

        } else if (event.key === "Shift") {
            setRerender(rerender !== true);

        } else {
            setRerender(rerender !== true);
        }

    };


    return (
        <div className={s.input}>
            <span className={s.typedText}>{props.typedText}</span>
            <span className={s.wrongText}>{props.wrongText}</span>
            <span className={s.remainingText}>{props.remainingText}</span>
        </div>
    );
}

export default Input;