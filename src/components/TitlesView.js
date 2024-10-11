/*
  TitleList.js

  This module displays a list of titles and reports when a user clicks on one.

  props:
    articles - an array of objects with title and id properties
    setCurrentArticle - a callback that expects an article as an argument

*/
import PropTypes from "prop-types";
import ArticleShape from "./ArticleShape";

export default function TitlesView({ articles, setCurrentArticle }) {
  const articleList = [...articles].sort((a, b) =>
    a.title.localeCompare(b.title),
  );

  const articlesSorted = articleList.map((element) => (
    <li
      key={element.id}
      onClick={() => setCurrentArticle(element)}
      data-testid="title"
    >
      {element.title}
    </li>
  ));

  return (
    <div>
      <ul>{articlesSorted}</ul>
    </div>
  );
}

TitlesView.propTypes = {
  articles: PropTypes.arrayOf(ArticleShape).isRequired,
  setCurrentArticle: PropTypes.func.isRequired,
}
