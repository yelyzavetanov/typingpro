import React from "react";
import s from "./Logo.module.css";
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <NavLink to="/">
            <div className={s.logo}>
                <div className={s.logoImgCont}>
                    <div className={s.logoImg}>t</div>
                </div>
                <div className={s.logoName}>Typing<span className={s.logoElement}>PRO</span></div>
            </div>
        </NavLink>
    );
}

export default Logo;