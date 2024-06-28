import React from "react";
import {NavLink} from "react-router-dom";
import s from "./MenuLayout.module.css";

const MenuLayout = (props) => {
    return (
        <div className={s.layoutLinkCont}>
            <NavLink className={
                props.theme === "light" ? s.layoutLinkLight : s.layoutLinkDark
            } to={"/" + props.path}>{props.name}</NavLink>
        </div>
    );
}

export default MenuLayout;