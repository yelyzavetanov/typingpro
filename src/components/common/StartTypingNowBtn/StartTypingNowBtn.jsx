import React from "react";
import s from "./StartTypingNow.module.css";

const StartTypingNowBtn = ({button, language, isMain, theme}) => {
    return (
        <div className={isMain ? s.noClass : s.startBtnCont}>
            <a href={"#selectLayout"}>
                <div className={isMain ? s.startBtnMain : theme === "light" ? s.startBtnLight : s.startBtnDark}>
                    {button[language]}
                </div>
            </a>
        </div>
    );
}

export default StartTypingNowBtn;