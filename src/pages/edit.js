import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Editor from "../components/Editor";
import ArticleShape from "../components/ArticleShape";

export default function SimplepediaCreator({
  collection,
  setCollection,
  setCurrentArticle,
}) {
  const router = useRouter();
  const complete = (article) => {
    if (article) {
      const articleIds = collection.map((a) => a.id);

      let maxId = articleIds.reduce((initialValue, currentValue) =>
        initialValue < currentValue ? currentValue : initialValue,
      );
      maxId += 1;
      const articleWithId = {
        title: article.title,
        contents: article.contents,
        edited: article.edited,
        id: maxId,
      };
      setCurrentArticle(articleWithId);
      setCollection([...collection, articleWithId]);
      router.push(`/articles/${encodeURIComponent(articleWithId.id)}`);
    } else {
      router.back();
    }
  };

  return (
    <div>
      <Editor complete={complete} />
    </div>
  );
}
SimplepediaCreator.propTypes = {
  collection: PropTypes.arrayOf(ArticleShape).isRequired,
  setCollection: PropTypes.func.isRequired,
  setCurrentArticle: PropTypes.func.isRequired,
};
