import React, {useEffect, useState} from "react";
import s from "./Level.module.css";
import Exercise from "./Exercise/Exercise";
import arrowWhite from "../../../../img/icons/11-arrow-up-outline-white.png";
import arrowBlack from "../../../../img/icons/11-arrow-up-outline-back.png";

const Level = (props) => {
    const [display, setDisplay] = useState("none");

    useEffect(() => {
        if (props.currentLevel === props.number) {
            setDisplay("unset");
        }
    },  [props.currentLevel, props.number]);

    return (
        <div className={s.level}>
            <div
                onClick={() => {setDisplay(display === "none" ? "block" : "none")}}
                className={s.levelName}
            >
                <div className={s.levelNameChild}>
                    {props.textElements.level[props.language]} {props.number+1}
                    <div className={display === "none" ? s.hiddenLevelLed : s.levelLed}> </div>
                </div>
                <img alt={""} src={
                    props.theme === "light" ? arrowBlack : arrowWhite
                } className={display === "none" ? s.hiddenArrow : s.arrow}/>
            </div>
            <div
                style={{"display" : display}}
                className={s.exercisesCont}
            >
                {props.exercises.map(
                    e => <Exercise key={props.exercises.indexOf(e)}
                                   language={props.language} theme={props.theme}
                                   textElements={props.textElements} layoutLanguage={props.layoutLanguage}
                                   currentLevel={props.currentLevel} currentExercise={props.currentExercise}
                                   levelIndex={props.number} setIsFinalWindow={props.setIsFinalWindow}
                                   number={props.exercises.indexOf(e)} setIsCustomText={props.setIsCustomText}
                                   setIsMyTexts={props.setIsMyTexts}
                    />
                )}
            </div>
        </div>
    );
}

export default Level;