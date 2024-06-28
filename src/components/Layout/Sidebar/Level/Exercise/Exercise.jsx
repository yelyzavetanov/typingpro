import React from "react";
import s from "./Exercise.module.css";
import {connect} from "react-redux";
import {setNewExercise} from "../../../../../redux/layoutsReducer";

const Exercise = (props) => {
    const onExerciseChange = () => {
        props.dispatch(setNewExercise(props.levelIndex, props.number, props.layoutLanguage));
        props.setIsCustomText(false);
        props.setIsMyTexts(false);
        props.setIsFinalWindow(false);
    }

    const setExerciseStyle = () => {
        if (props.number === props.currentExercise && props.levelIndex === props.currentLevel) {
            if (props.theme === "light") {
                return {
                    color: "#f04579",
                };

            } else if (props.theme === "dark") {
                return {
                    color: "#61dafb",
                };

            }
        }

        return {};
    }

    return (
        <div onClick={onExerciseChange} className={s.exercise} style={setExerciseStyle()}>
            {props.textElements.exercise[props.language]} {props.number+1}
        </div>
    );
}

export default connect()(Exercise);