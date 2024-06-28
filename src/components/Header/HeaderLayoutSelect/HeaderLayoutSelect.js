import React from "react";
import "../Header.module.css";
import {useLocation, useNavigate} from "react-router-dom";
import s from "./HeaderLayoutSelect.module.css";
// import {useLocation} from "react-router";

const HeaderLayoutSelect = ({textElement, language}) => {
    let navigate = useNavigate();

    const location = useLocation();

    const handleChange = (value) => {
        navigate(`${value}`);
    }

    return (
        <div className={s.headerDiv}>
            {textElement[language]}
            <div className={s.headerSelectCont}>
                <select className={s.headerSelect} onChange={event => handleChange(event.target.value)}>
                    <option value={"/"} selected={
                        !(location.pathname === "/layout_en") && !(location.pathname === "/layout_ua")
                    }>Select</option>
                    <option value={"/layout_en"} selected={location.pathname === "/layout_en"}>English</option>
                    <option value={"/layout_ua"} selected={location.pathname === "/layout_ua"}>Ukrainian</option>
                </select>
            </div>
        </div>
    );
}

export default HeaderLayoutSelect;