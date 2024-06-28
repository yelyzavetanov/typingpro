import React, {useState} from "react";
import s from "./KeyboardAndInput.module.css";
import Input from "./Input/Input";
import Keyboard from "./Keyboard/Keyboard";
import LayoutInfo from "../LayoutInfo/LayoutInfo";

const KeyboardAndInput = (props) => {
    let [typedText, setTypedText] = useState("");
    let [wrongText, setWrongText] = useState("");
    let [remainingText, setRemainingText] = useState(
        props.keyboard.texts[props.currentLevel][props.currentExercise].text
        // props.keyboard.texts[0][0].text
    );

    return (
        <div className={s.keyboardAndInput}>
            <LayoutInfo
                language={props.language} textElements={props.textElements.layoutInfo}
                currentLevel={props.currentLevel} currentExercise={props.currentExercise}
                remainingText={remainingText} typedText={typedText}
                texts={props.keyboard.texts} mistakes={props.mistakes}
            >
                <Input
                    typedText={typedText} setTypedText={setTypedText}
                    keyboard={props.keyboard} currentLevel={props.currentLevel}
                    currentExercise={props.currentExercise} isOnShift={props.isOnShift}
                    toggleIsOnShift={props.toggleIsOfShift} setIsFinalWinow={props.setIsFinalWindow}
                    setStartTime={props.setStartTime} setEndTime={props.setEndTime}
                    setMistakes={props.setMistakes} mistakes={props.mistakes}
                    remainingText={remainingText} setRemainingText={setRemainingText}
                    wrongText={wrongText} setWrongText={setWrongText}
                />
                <Keyboard
                    keyboard={props.keyboard} isOnShift={props.isOnShift}
                    setIsFinalWinow={props.setIsFinalWindow} remainingText={remainingText}
                    wrongText={wrongText} isTypingTest={props.isTypingTest}
                    language={props.language} textElements={props.textElements.keyboardAltText}
                />
            </LayoutInfo>
        </div>
    );
}

export default KeyboardAndInput;