import React from "react";
import s from "./Article.module.css";
import ArticleFragment from "./ArticleFragment/ArticleFragment";
import StartTypingNowBtn from "../../common/StartTypingNowBtn/StartTypingNowBtn";

const Article = ({fragments, language, header, fancy, button, theme}) => {
    return (
        <div className={fancy ? s.fancyArticle : s.article} id={"article"}>
            {header && <div className={s.header}>{header[language]}</div>}
            {fragments.map(f => <ArticleFragment key={f.header[language]} fragment={f} language={language}/>)}
            <StartTypingNowBtn language={language} button={button} isMain={false} theme={theme}/>
        </div>
    );
}

export default Article;