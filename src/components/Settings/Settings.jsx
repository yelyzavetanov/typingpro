import React from "react";
import s from "./Settings.module.css";
import PreHeader from "../PreHeader/PreHeader";
import ViewSettingsContainer from "./ViewSettings/ViewSettings";

const Settings = () => {
    return (
        <div>
            <PreHeader/>
            <div className={s.settings}>
                <ViewSettingsContainer/>
            </div>
        </div>
    );
}


export default Settings;