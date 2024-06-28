import React, {useEffect, useState} from "react";
import s from "./Layout.module.css";
import PreHeader from "../PreHeader/PreHeader";
import KeyboardAndInput from "./KeyboardAndInput/KeyboardAndInput";
import Sidebar from "./Sidebar/Sidebar";
import FinalWindow from "./KeyboardAndInput/FinalWindow/FinalWindow";
import TypingTest from "./TypingTest/TypingTest";
import KeyboardImages from "./KeyboardImages/KeyboardImages";
import LayoutDescription from "./LayoutDescription/LayoutDescrtiption";
import CustomText from "./CustomText/CustomText";
import MyTexts from "./MyTexts/MyTexts";

const Layout = (props) => {
    let [isFinalWindow, setIsFinalWindow] = useState(false);
    let [isCustomText, setIsCustomText] = useState(false);
    let [isMyTexts, setIsMyTexts] = useState(false);
    let [startTime, setStartTime] = useState(0);
    let [endTime, setEndTime] = useState(0);
    let [mistakes, setMistakes] = useState(0);
    let [isOnShift, toggleIsOnShift] = useState(false);
    let [isTypingTest, setIsTypingTest] = useState(
        props.currentLevel === props.levels.length - 1
    );

    useEffect(() => {
        setIsTypingTest(
            props.currentLevel === props.levels.length - 1
        );
    }, [props.currentLevel, props.levels.length]);
    // console.log("layout texts: ", props.levels[props.levels.length - 1]);
    const time = endTime - startTime;

    return (
        <div>
            <PreHeader/>
            <div className={s.layout}>
                <div className={s.keyboardCont}>
                    <div className={s.keyboardContChild}>
                        <LayoutDescription
                            language={props.language} textElements={props.textElements.layoutDescription}
                        />
                    </div>
                    <div className={s.keyboardContChild}>
                        <TypingTest
                            isTypingTest={isTypingTest} texts={props.levels[props.levels.length - 1]}
                            levelNumber={props.levels.length - 1} layoutLanguage={props.layoutLanguage}
                            setIsFinalWindow={setIsFinalWindow} setIsCustomText={setIsCustomText}
                            currentExercise={props.currentExercise} setIsMyTexts={setIsMyTexts}
                            language={props.language} textElements={props.textElements.typingTest}
                        />
                        {isFinalWindow && !isCustomText && !isMyTexts && <FinalWindow
                            levelsLength={props.levels.length} theme={props.theme}
                            layoutLanguage={props.layoutLanguage} currentLevel={props.currentLevel}
                            currentExercise={props.currentExercise} texts={props.keyboard.texts}
                            setIsFinalWindow={setIsFinalWindow} time={time}
                            mistakes={mistakes} language={props.language}
                            textElements={props.textElements.finalWindow}
                        />}
                        {isMyTexts && !isCustomText && <MyTexts
                            texts={props.levels[props.levels.length - 1]}
                            setIsMyTexts={setIsMyTexts} keyboard={props.layout.code}
                            layoutLanguage={props.layoutLanguage} currentExercise={props.currentExercise}
                            currentLevel={props.currentLevel}
                            language={props.language} textElements={props.textElements.myTexts}
                        />}
                        {isCustomText && <CustomText
                            setIsCustomText={setIsCustomText} keyboard={props.layout.code}
                            textsLength={props.levels[props.levels.length-1].length}
                            layoutLanguage={props.layoutLanguage} levelNumber={props.levels.length - 1}
                            setIsFinalWindow={setIsFinalWindow}
                            textSymbols={props.keyboard.rows}
                            language={props.language} textElements={props.textElements.customText}
                        />}
                        {!isFinalWindow && !isCustomText && !isMyTexts && <KeyboardAndInput
                            isTypingTest={isTypingTest} language={props.language}
                            textElements={props.textElements} keyboard={props.keyboard}
                            layoutLanguage={props.layoutLanguage} currentLevel={props.currentLevel}
                            currentExercise={props.currentExercise} isOnShift={isOnShift}
                            toggleIsOfShift={toggleIsOnShift} setIsFinalWindow={setIsFinalWindow}
                            setStartTime={setStartTime} setEndTime={setEndTime}
                            setMistakes={setMistakes} mistakes={mistakes}
                        />}
                    </div>
                    <div className={s.keyboardContChild}>
                        <KeyboardImages
                            language={props.language} textElements={props.textElements.keyboardImages}
                        />
                    </div>
                </div>
                <div className={props.isSidebarShown ? s.sidebarContShown : s.sidebarContHidden}>
                    <Sidebar
                        language={props.language} textElements={props.textElements.sidebar}
                        theme={props.theme} layoutName={props.layout.name}
                        levels={props.levels} layoutLanguage={props.layoutLanguage}
                        currentLevel={props.currentLevel} currentExercise={props.currentExercise}
                        setIsFinalWindow={setIsFinalWindow} setIsCustomText={setIsCustomText}
                        setIsMyTexts={setIsMyTexts}
                    />
                </div>
            </div>
        </div>
    );
}

export default Layout;