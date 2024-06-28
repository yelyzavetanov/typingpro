import React, {useEffect, useRef} from "react";
import s from "./TypingTest.module.css";
import {connect} from "react-redux";
import {setNewExercise} from "../../../redux/layoutsReducer";

const TypingTest = (props) => {
    useEffect(() => {
    }, [props.isTypingTest, props.texts.length]);

    const textSelect = useRef(null);

    const onSelectText = () => {
        props.dispatch(setNewExercise(
            props.levelNumber, props.texts.filter(
                t => t.name === textSelect.current.value
            )[0].number, props.layoutLanguage
        ));
        props.setIsFinalWindow(false);
        props.setIsCustomText(false);
        props.setIsMyTexts(false);
    }

    const onCustomTextClick = () => {
        props.setIsCustomText(true);
        props.setIsMyTexts(false);
        props.setIsFinalWindow(false);
    }
    const onMyTextsClick = () => {
        props.setIsMyTexts(true);
        props.setIsCustomText(false);
        props.setIsFinalWindow(false);
    }

    return (
        <div>
            {props.isTypingTest &&
                <div className={s.cont}>
                    <select
                        ref={textSelect} onChange={onSelectText} className={s.typingTest}
                        value={props.texts[props.currentExercise].name}
                    >
                        {props.texts.map(t => <option key={t.number}>{t.name}</option>)}
                    </select>
                    <div className={s.blankCont}> </div>
                    <button onClick={onCustomTextClick} className={s.customText}>
                        {props.textElements.customText[props.language]}
                    </button>
                    <div className={s.blankCont}> </div>
                    <button onClick={onMyTextsClick} className={s.myTexts}>
                        {props.textElements.myTexts[props.language]}
                    </button>
                </div>
            }
        </div>
    );
}

export default connect()(TypingTest);