import React from "react";
import "../Header.module.css";
import s from "./ShowSidebar.module.css";
import {useLocation} from "react-router-dom";

const ShowSidebar = (props) => {
    const location = useLocation();

    const toggleIsSidebarShown = () => {
        if(props.isSidebarShown) {
            props.setIsSidebarShown(false);
        } else if (!props.isSidebarShown) {
            props.setIsSidebarShown(true);
            props.hideHeaderInf();
        }
    };

    if(location.pathname === "/layout_en" || location.pathname === "/layout_ua") {
        return (
            <div
                onClick={toggleIsSidebarShown}
                className={props.isSidebarShown ? s.shownSidebarBtn : s.hiddenSidebarBtn}
            >
                {props.text}
            </div>
        );
    }
}

export default ShowSidebar;