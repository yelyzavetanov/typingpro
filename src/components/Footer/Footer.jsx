import React from "react";
import s from "./Footer.module.css";
import {NavLink} from "react-router-dom";
import arrow from "../../img/icons/161-trending-flat-outline.gif"

const Footer = ({language, textElements}) => {
    return(
        <footer>
            <div className={s.column}>
                <div className={s.logo}>Typing<span>PRO</span></div>
                <div className={s.year}>2022©</div>
                <div className={s.year}>Yelyzaveta Novikova</div>
            </div>
            <div className={s.column}>
                <div className={s.links}>{textElements.siteLinks[language]}</div>
                <div className={s.footerLink}><NavLink to="/">
                    {textElements.home[language]}
                </NavLink></div>

                {/*<div className={s.footerLink}><NavLink to="/settings">*/}
                {/*    {textElements.settings[language]}*/}
                {/*</NavLink></div>*/}

            </div>
            <div className={s.column}>
                <a className={s.goUp} href={"#header"}>
                    {textElements.goUp[language]}
                    <img className={s.icon} alt={""} src={arrow}/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;