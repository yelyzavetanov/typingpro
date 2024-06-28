import React from "react";
import s from "./MainBanner.module.css";
import StartTypingNowBtn from "../../common/StartTypingNowBtn/StartTypingNowBtn";
import arrow from "../../../img/icons/161-trending-flat-outline.gif";
// import arrow from "../../../img/icons/12-arrow-down-outline.gif";

const MainBanner = ({textElements, language, button, theme}) => {
    return (
        <div className={s.mainBanner}>
            <div className={s.bannerSections}>
                <div className={s.bannerSection}>
                    <div className={s.mainHeader}>{textElements.header[language]}</div>
                    <div> </div>
                    <div className={s.mainInformation}>{textElements.information[language]}</div>
                    <a href={"#article"} className={s.learnMoreCont}>
                        <div className={s.learnMore}>
                            {textElements.learnMore[language]}
                            <img alt={""} src={arrow} className={s.icon}/>
                        </div>
                    </a>
                </div>
                <div className={s.bannerSection}>
                    <StartTypingNowBtn language={language} button={button} isMain={true} theme={theme}/>
                </div>
            </div>
        </div>
    );
}

export default MainBanner;