import React, {useEffect} from "react";
import s from "./ViewSettings.module.css";
import {setNewTheme} from "../../../redux/themeReducer.js";
import {connect} from "react-redux";

class ViewSettings extends React.Component {
    constructor(props) {
        super(props);
    }

    selectTheme = () => {
        this.props.onSelectTheme(this.props.theme  === "light" ? "dark" : "light");
    }

    render() {
        return (
            <div>
                <div className={s.header}>{this.props.textElements.header[this.props.language]}</div>
                <div className={s.selectTheme}>
                    {this.props.textElements.theme[this.props.language]}
                    <div className={this.props.theme === "light" ? s.switchLight : s.switchDark}
                         onClick={this.selectTheme}>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        textElements: state.language.textElements.settings.viewSettings,
        language: state.language.currentLanguage,
        theme: state.themes.currentTheme,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectTheme: (theme) => {
            dispatch(setNewTheme(theme));
        }
    }
};

const ViewSettingsContainer = connect(mapStateToProps, mapDispatchToProps)(ViewSettings);

export default ViewSettingsContainer;