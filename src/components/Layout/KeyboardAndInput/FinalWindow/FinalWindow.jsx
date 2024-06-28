import React from "react";
import s from "./FinalWindow.module.css";
import {connect} from "react-redux";
import {setNewExercise} from "../../../../redux/layoutsReducer";
import arrowWhite from "../../../../img/icons/161-trending-flat-outline.gif";
import arrowBlack from "../../../../img/icons/161-trending-flat-outline-black.gif";

const FinalWindow = (props) => {
    const textLength = props.texts[props.currentLevel][props.currentExercise].text.length;
    let speed = (textLength / (props.time / 1000)) * 60;
    speed = speed.toFixed(1);

    const millisToMinutesAndSeconds = (millis) => {
        let minutes = Math.floor(millis / 60000);
        let seconds = ((millis % 60000) / 1000).toFixed(0);
        return (minutes + ":" + (seconds < 10 ? '0' : '') + seconds);
    }

    const onRepeatBtn = () => {
        console.log("repeat");
        props.dispatch(setNewExercise(props.currentLevel, props.currentExercise, props.layoutLanguage));
        props.setIsFinalWindow(false);
    }
    const onNextBtn = () => {
        console.log("next");
        if (!(props.texts[props.currentLevel].length === props.currentExercise + 1)) {
            props.dispatch(
                setNewExercise(props.currentLevel, props.currentExercise + 1, props.layoutLanguage)
            );

        } else if (props.texts[props.currentLevel].length === props.currentExercise + 1) {
            props.dispatch(
                setNewExercise(props.currentLevel + 1, 0, props.layoutLanguage)
            );

        }
        props.setIsFinalWindow(false);
    }

    return (
        <div className={s.finalWindow}>
            <div className={s.header}>{props.textElements.completedExercise[props.language]}</div>
            <div>
                <span className={s.valueInfo}>{props.textElements.level[props.language]}</span>
                {props.currentLevel + 1}<span className={s.blankSpan}>   </span>
                <span className={s.valueInfo}>{props.textElements.exercise[props.language]}</span>
                {props.currentExercise + 1}</div>
            <div>
                <span className={s.valueInfo}>{props.textElements.time[props.language]}</span>
                {millisToMinutesAndSeconds(props.time)}
            </div>
            <div>
                <span className={s.valueInfo}>{props.textElements.textLength[props.language]}</span>
                {textLength} {props.textElements.symbols[props.language]}
            </div>
            <div>
                <span className={s.valueInfo}>{props.textElements.typingSpeed[props.language]}</span>
                {speed} {props.textElements.symbolsPerMinute[props.language]}
            </div>
            <div>
                <span className={s.valueInfo}>{props.textElements.mistakes[props.language]}</span>
                {props.mistakes} ({(props.mistakes/textLength*100).toFixed(2)}%)
            </div>
            {!(props.levelsLength - 1 === props.currentLevel) &&
            <div>
                <div className={s.finalBtnCont}>
                    <div onClick={onRepeatBtn} className={
                        props.theme === "light" ? s.finalBtnLight : s.finalBtnDark
                    }>
                        {props.textElements.repeat[props.language]}
                    </div>
                </div>
                {
                    props.texts.length === props.currentLevel + 1 &&
                    props.texts[props.currentLevel].length === props.currentExercise + 1
                        ? <div> </div>
                        : <div className={s.finalBtnCont}>
                            <div onClick={onNextBtn} className={
                                props.theme === "light" ? s.finalBtnLight : s.finalBtnDark
                            }>
                                {props.textElements.nextExercise[props.language]}
                                <img className={s.arrow} alt={""} src={props.theme === "light" ? arrowBlack : arrowWhite}/>
                            </div>
                        </div>
                }
            </div>
            }
        </div>
    );
}

export default connect()(FinalWindow);