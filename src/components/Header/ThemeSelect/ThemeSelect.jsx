import React from "react";
import s from "./ThemeSelect.module.css";
import {setNewTheme} from "../../../redux/themeReducer";
import {connect} from "react-redux";

class ThemeSelect extends React.Component {
    constructor(props) {
        super(props);
    }

    selectTheme = () => {
        this.props.onSelectTheme(this.props.theme === "light" ? "dark" : "light");
    }

    render() {
        return (
            <div className={s.selectTheme}>
                {this.props.textElements.theme[this.props.language]}
                <div className={this.props.theme === "light" ? s.switchContLight : s.switchContDark}>
                    <div
                        className={this.props.theme === "light" ? s.switchLight : s.switchDark}
                        onClick={this.selectTheme}
                    >
                        <div className={this.props.theme === "light" ? s.switchLightChild : s.switchDarkChild}> </div>
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

const ThemeSelectContainer = connect(mapStateToProps, mapDispatchToProps)(ThemeSelect);

export default ThemeSelectContainer;