import React, {useEffect, useState} from "react";
import s from './App.module.css';
import HomePageContainer from "./components/HomePage/HomePage";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {connect, Provider} from "react-redux";
import store from "./redux/store";
import HeaderContainer from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";


function App(props) {
    useEffect(() => {
        document.title = "TypingPRO";
    });

    let [isSidebarShown, setIsSidebarShown] = useState(false);


    return (
        <div className={props.state.themes.currentTheme === "light" ? s.appLight : s.appDark}>
            <HeaderContainer isSidebarShown={isSidebarShown} setIsSidebarShown={setIsSidebarShown}/>
            <div className={s.main}>
                <Routes>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/layout_en" element={
                        <Layout
                            language={props.state.language.currentLanguage}
                            textElements={props.state.language.textElements.layout}
                            theme={props.state.themes.currentTheme}
                            layout={props.state.layouts.layouts[0]}
                            layoutLanguage={"EN"}
                            keyboard={props.state.layouts.keyboards.englishQWERTY}
                            levels={props.state.layouts.keyboards.englishQWERTY.texts}
                            currentLevel={props.state.layouts.currentLevelEN}
                            currentExercise={props.state.layouts.currentExerciseEN}
                            isSidebarShown={isSidebarShown}
                        />
                    }/>
                    <Route path="/layout_ua" element={
                        <Layout
                            language={props.state.language.currentLanguage}
                            textElements={props.state.language.textElements.layout}
                            theme={props.state.themes.currentTheme}
                            layout={props.state.layouts.layouts[1]}
                            layoutLanguage={"UA"}
                            keyboard={props.state.layouts.keyboards.ukrainianLayout}
                            levels={props.state.layouts.keyboards.ukrainianLayout.texts}
                            currentLevel={props.state.layouts.currentLevelUA}
                            currentExercise={props.state.layouts.currentExerciseUA}
                            isSidebarShown={isSidebarShown}
                        />}
                    />
                    <Route path="/" element={<HomePageContainer/>}/>
                </Routes>
            </div>
            <Footer language={props.state.language.currentLanguage}
                    textElements={props.state.language.textElements.footer}
            />
        </div>
    );
}

const mapStateToProps = (state) => ({
    state: state,
})

const AppContainer = connect(mapStateToProps, {})(App);

const TypingApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}


export default TypingApp;
