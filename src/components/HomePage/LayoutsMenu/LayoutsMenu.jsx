import React from "react";
import MenuLayout from "./menuLayout/menuLayout";
import s from "./LayoutsMenu.module.css";

const LayoutsMenu = ({textElements, language, layouts, theme}) => {
    return (
        <div className={s.selectLayout} id={"selectLayout"}>
            <div className={s.header}>{textElements.selectKeyboardLayoutText[language]}</div>
            {layouts.map(e => <MenuLayout
                key={e.name} name={e.name} path={e.path}
                theme={theme}
            />)}
        </div>
    );
}

export default LayoutsMenu;