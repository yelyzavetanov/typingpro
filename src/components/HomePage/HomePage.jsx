import React from "react";
import LayoutsMenu from "./LayoutsMenu/LayoutsMenu";
import {connect} from "react-redux";
import MainBanner from "./MainBanner/MainBanner";
import Article from "./Article/Article";
import s from "./HomePage.module.css";

const HomePage = ({textElements, language, layouts, theme}) => {
    return (
      <div>
          <MainBanner
              textElements={textElements.mainBanner}
              language={language}
              button={textElements.mainBanner.startNow}
              theme={theme}
          />
          <LayoutsMenu
              textElements={textElements.layoutsMenu}
              language={language} theme={theme}
              layouts={layouts}
          />
          <div className={s.articles}>
              <Article
                  fragments={textElements.articles.article1Fragments}
                  language={language}
                  header={textElements.articles.article1Header}
                  button={textElements.mainBanner.startNow}
                  theme={theme}
              />
              <Article
                  fragments={textElements.articles.article2Fragments}
                  language={language}
                  header={textElements.articles.article2Header}
                  fancy={true}
                  button={textElements.mainBanner.startNow}
                  theme={theme}
              />
          </div>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
        textElements: state.language.textElements.homePage,
        language: state.language.currentLanguage,
        layouts: state.layouts.layouts,
        theme: state.themes.currentTheme,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageContainer;