import React from "react";
import s from "./ArticleFragment.module.css";
import img1 from "../../../../img/articleImg/main_keys.png";
import img2 from "../../../../img/articleImg/keyboard.png";


const ArticleFragment = ({fragment, language}) => {
    return(
      <div className={s.fragment}>
          <div className={s.header}>{fragment.header[language]}</div>
          {fragment.text && <div className={s.text}>{fragment.text[language].map(
              p => <p key={p}>{p}</p>
          )}</div>}
          {fragment.points && <div className={s.points}><ul>{fragment.points[language].map(
              p => <li key={p}>{p}</li>
          )}</ul></div>}
          {fragment.text2 && <div className={s.text}>{fragment.text2[language]}</div>}
          {fragment.isImg1 && <img alt={""} src={img1}/>}
          {fragment.isImg2 && <img alt={""} src={img2}/>}
      </div>
    );
}

export default ArticleFragment;