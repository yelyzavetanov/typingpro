import React, {useRef, useState} from "react";
import s from "./CustomText.module.css";
import {connect} from "react-redux";
import {setNewCustomText, setNewExercise} from "../../../redux/layoutsReducer";

const CustomText = (props) => {
    const titleInput = useRef();
    const textInput = useRef();
    const [errorMessage, setErrorMessage] = useState("");
    const [isErrorMessageShown, setIsErrorMessageShown] = useState(false);

    const getSymbols = () => {
        const rows = props.textSymbols[0].concat(
            props.textSymbols[1], props.textSymbols[2], props.textSymbols[3], props.textSymbols[4]
        );
        const littleSymbols = rows.map(
            (e) => {
                if(e.key.length > 1) {return ""}
                else {return e.key}
            }
        );
        const shiftSymbols = rows.map(
            (e) => {
                if(e.onShift) {return e.onShift}
                else {return ""}
            }
        )
        return littleSymbols.concat(shiftSymbols).join("").split("");
    }

    const verifySymbols = (text) => {
        const symbols = getSymbols();
        return(
            text.split("").map(
                (e) => {
                    if(symbols.some(s => s === e)) {return "true"}
                    else {return e}
                }
            )
        );
    }

    const verifyTitle = (title) => {
        const verifiedSymbols = verifySymbols(title);
        if(verifiedSymbols.some(s => s !== "true")) {
            const errorMessage = props.textElements.error03[props.language]
                + verifiedSymbols.filter(s => s !== "true").join(", ") + ".";
            setErrorMessage(errorMessage);
            setIsErrorMessageShown(true);
            return false;
        }
        if (title.length === 0) {
            setErrorMessage(props.textElements.error01[props.language]);
            setIsErrorMessageShown(true);
            return false;
        }
        return true;
    }

    const verifyText = (text) => {
        const verifiedSymbols = verifySymbols(text);
        if(verifiedSymbols.some(s => s !== "true")) {
            const errorMessage = props.textElements.error04[props.language]
                + verifiedSymbols.filter(s => s !== "true").join(", ") + ".";
            setErrorMessage(errorMessage);
            setIsErrorMessageShown(true);
            return false;
        }
        if (text.length < 5) {
            setErrorMessage(props.textElements.error02[props.language]);
            setIsErrorMessageShown(true);
            return false;
        }
        return true;
    }

    const onSubmitText = () => {
        const title = titleInput.current.value;
        const text = textInput.current.value;

        const textObj = {
            name: "Custom: " + title,
            number: props.textsLength,
            text: text,
            isCustom: true,
        }

        if (verifyTitle(title) === true && verifyText(text) === true) {
            props.dispatch(setNewCustomText(props.keyboard, textObj));
            props.dispatch(setNewExercise(props.levelNumber, props.textsLength, props.layoutLanguage));
            props.setIsFinalWindow(false);
            props.setIsCustomText(false);
        }
    }

    return (
        <div className={s.customText}>
            <div className={s.titleCont}>
                {props.textElements.textTitle[props.language]}
            </div>
            <div className={s.titleInputCont}>
                <input
                    className={s.titleInput}
                    placeholder={props.textElements.textTitlePlaceholder[props.language]}
                    ref={titleInput}
                />
            </div>
            <div className={s.titleCont}>
                {props.textElements.yourText[props.language]}
            </div>
            <div className={s.textCont}>
                <textarea
                    placeholder={props.textElements.yourTextPlaceholder[props.language]}
                    ref={textInput}
                />
            </div>
            {isErrorMessageShown &&
                <div className={s.errorMessage}>{errorMessage}</div>
            }
            <div>
                <button onClick={() => props.setIsCustomText(false)} className={s.backBtn}>
                    {props.textElements.back[props.language]}
                </button>
                <button onClick={onSubmitText} className={s.submitBtn}>
                    {props.textElements.submit[props.language]}
                </button>
            </div>
        </div>
    );
}

export default connect()(CustomText);