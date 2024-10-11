/*
  Article.js

  The Article displays the contents of an article. 

  props:
    currentArticle - the article to render (required)
*/

import styles from "../styles/Article.module.css";
import ArticleShape from "./ArticleShape";

export default function Article({ currentArticle }) {
  return (
    <div className={styles.article}>
      <h2>{currentArticle.title}</h2>
      <p>{currentArticle.contents}</p>
      <p>{new Date(currentArticle.edited).toLocaleString()}</p>
    </div>
  );
}

Article.propTypes = {
  currentArticle: ArticleShape.isRequired,
};
