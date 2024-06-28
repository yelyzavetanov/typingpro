import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {setNewLanguage} from "../../redux/languageReducer";
import HeaderLayoutSelect from "./HeaderLayoutSelect/HeaderLayoutSelect";
import ThemeSelectContainer from "./ThemeSelect/ThemeSelect";
import Logo from "../common/Logo/Logo";
import ShowSidebar from "./ShowSidebar/ShowSidebar";


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.select = React.createRef();
        this.state = {
            isHeaderInfShown: false,
        };
    }

    selectLanguage = () => {
        this.props.onSelectLanguage(this.select.current.value);
    }

    hideHeaderInf = () => {
        this.setState({isHeaderInfShown: false});
    }

    toggleShownHeaderInf = () => {
        // console.log("old: ", this.state.isHeaderInfShown);
        if(this.state.isHeaderInfShown) {
            this.setState({isHeaderInfShown: false});
        } else {
            this.setState({isHeaderInfShown: true});
            this.props.setIsSidebarShown(false);
        }
        // console.log("new: ", this.state.isHeaderInfShown);
    }

    render() {
        return (
            <header id="header">
                <Logo/>
                <div className={s.showButtons}>
                    <ShowSidebar
                        hideHeaderInf={this.hideHeaderInf}
                        isSidebarShown={this.props.isSidebarShown}
                        setIsSidebarShown={this.props.setIsSidebarShown}
                        text={this.props.textElements.levels[this.props.currentLanguage]}
                    />
                    <div
                        onClick={this.toggleShownHeaderInf}
                        className={this.state.isHeaderInfShown ? s.shownHeaderBtn : s.hiddenHeaderBtn}
                    >
                        {this.props.textElements.menu[this.props.currentLanguage]}
                    </div>
                </div>
                <div className={this.state.isHeaderInfShown ? s.headerShownInf : s.headerInf}>
                    <div className={s.headerDiv}>
                        <NavLink to="/" className={s.headerLink}>
                            {this.props.textElements.home[this.props.currentLanguage]}
                            <div className={s.linkLed}> </div>
                        </NavLink>
                    </div>
                    <div className={s.headerDiv}>
                        {this.props.textElements.language[this.props.currentLanguage]}
                        <div className={s.headerSelectCont}>
                            <select
                                className={s.headerSelect}
                                ref={this.select}
                                onChange={this.selectLanguage}
                                value={this.props.currentLanguage}
                            >
                                {this.props.languages.map(e => <option key={e}>{e}</option>)}
                            </select>
                        </div>
                    </div>
                    <HeaderLayoutSelect textElement={this.props.textElements.layout}
                                        language={this.props.currentLanguage}/>
                    <ThemeSelectContainer/>
                </div>
            </header>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        textElements: state.language.textElements.header,
        currentLanguage: state.language.currentLanguage,
        languages: state.language.languages,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectLanguage: (newLanguage) => {
            dispatch(setNewLanguage(newLanguage));
        }
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;