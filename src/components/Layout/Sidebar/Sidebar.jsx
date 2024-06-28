import React from "react";
import s from "./Sidebar.module.css";
import Level from "./Level/Level";
import {connect} from "react-redux";
import {setNewExercise} from "../../../redux/layoutsReducer";

const Sidebar = (props) => {
    const sidebarLevels = props.levels.slice(0, -1);

    const onTypingTest = () => {
        props.dispatch(setNewExercise(props.levels.length - 1, 0, props.layoutLanguage));
        props.setIsFinalWindow(false);
    }

    return (
        <div className={s.sidebarCont}>
            <div className={props.theme === "light" ? s.sidebarLight : s.sidebarDark}>
                <div className={s.layoutName}>{props.layoutName}</div>
                {sidebarLevels.map(
                    l => <Level
                            key={props.levels.slice(0, -1).indexOf(l)}
                            layoutLanguage={props.layoutLanguage}
                            currentLevel={props.currentLevel}
                            currentExercise={props.currentExercise}
                            exercises={l} theme={props.theme}
                            language={props.language}
                            textElements={props.textElements}
                            setIsFinalWindow={props.setIsFinalWindow}
                            number={props.levels.indexOf(l)}
                            setIsCustomText={props.setIsCustomText}
                            setIsMyTexts={props.setIsMyTexts}
                    />
                )}
                <div className={s.typingTest} onClick={onTypingTest}>{props.textElements.typingTest[props.language]}</div>
            </div>
        </div>
    );
}

export default connect()(Sidebar);