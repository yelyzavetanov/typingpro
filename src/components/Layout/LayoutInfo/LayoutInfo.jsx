import React from "react";
import s from "./LayoutInfo.module.css";

const LayoutInfo = (props) => {
    return (
        <div>
            <div className={s.layoutInfo}>
                <div className={s.infoCont}>
                    <div className={s.value}>{props.currentLevel + 1}</div>
                    <div className={s.valueInfo}>{props.textElements.values.level[props.language]}</div>
                </div>
                <div className={s.infoCont}>
                    <div className={s.value}>{props.currentExercise + 1}</div>
                    <div className={s.valueInfo}>{props.textElements.values.exercise[props.language]}</div>
                </div>
                <div className={s.infoCont}>
                    <div className={s.value}>
                        {props.typedText.length}
                        /
                        {props.texts[props.currentLevel][props.currentExercise].text.length}
                    </div>
                    <div className={s.valueInfo}>{props.textElements.values.progress[props.language]}</div>
                </div>
                <div className={s.infoCont}>
                    <div className={s.value}>{props.mistakes}</div>
                    <div className={s.valueInfo}>{props.textElements.values.mistakes[props.language]}</div>
                </div>
            </div>
            {props.children}
            <div className={s.fingersColors}>
                <div>{props.textElements.fingers.fingersColors[props.language]}</div>
                <div className={s.pinkyFinger}>{props.textElements.fingers.pinkyFinger[props.language]}</div>
                <div className={s.ringFinger}>{props.textElements.fingers.ringFinger[props.language]}</div>
                <div className={s.middleFinger}>{props.textElements.fingers.middleFinger[props.language]}</div>
                <div className={s.leftIndexFinger}>{props.textElements.fingers.leftIndexFinger[props.language]}</div>
                <div className={s.rightIndexFinger}>{props.textElements.fingers.rightIndexFinger[props.language]}</div>
                <div className={s.thumb}>{props.textElements.fingers.thumb[props.language]}</div>
            </div>
        </div>
    );
}

export default LayoutInfo;