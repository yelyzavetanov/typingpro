import React from "react";
import s from "./MyTexts.module.css";
import {connect, useDispatch} from "react-redux";
import {setDeleteCustomText, setNewExercise} from "../../../redux/layoutsReducer";

const MyTexts = (props) => {
    const dispatch = useDispatch();

    const onDeleteText = (number) => {
        const elIndex = Number(number);
        // console.log(Number(props.currentExercise), props.texts.length-1);
        dispatch(setDeleteCustomText(props.keyboard, elIndex));
        if (Number(props.currentExercise) === props.texts.length - 1) {
            console.log("if");
            dispatch(setNewExercise(props.currentLevel, props.currentExercise - 1, props.layoutLanguage));
        }
    }

    const onSelectBtn = (number) => {
        dispatch(setNewExercise(props.currentLevel, Number(number), props.layoutLanguage));
        props.setIsMyTexts(false);
    }

    return (
        <div className={s.myTexts}>
            {props.texts.map(
                t => <div className={s.textCont} key={t.number}>
                    {t.name}
                    <button onClick={() => onSelectBtn(t.number)} className={s.selectBtn}>
                        {props.textElements.select[props.language]}
                    </button>
                    {t.isCustom &&
                    <span className={s.deleteBtnCont}>
                            <button
                                className={s.deleteBtn} onClick={() => onDeleteText(t.number)}
                            >
                            {props.textElements.delete[props.language]}
                        </button>
                        <span className={s.deleteMessage}>
                            {props.textElements.deleteText[props.language]}
                        </span>
                    </span>
                    }
                </div>
            )}
            <button onClick={() => props.setIsMyTexts(false)} className={s.backBtn}>
                {props.textElements.back[props.language]}
            </button>
        </div>
    );
}

export default connect()(MyTexts);