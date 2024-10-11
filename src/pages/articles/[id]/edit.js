import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Editor from "../../../components/Editor";
import ArticleShape from "../../../components/ArticleShape";

export default function SimplepediaEditor({
  collection,
  setCollection,
  setCurrentArticle,
  currentArticle,
}) {
  const router = useRouter();

  const complete = (targetArticle) => {
    if (targetArticle) {
      const newCollection = collection.map((a) =>
        a.id === targetArticle.id ? targetArticle : a,
      );
      setCollection(newCollection);
      setCurrentArticle(targetArticle);
      router.push(`/articles/${targetArticle.id}`);
    } else {
      router.back();
    }
  };

  return (
    <div>
      <Editor
        complete={complete}
        key={currentArticle?.id}
        currentArticle={currentArticle}
      />
    </div>
  );
}

SimplepediaEditor.propTypes = {
  collection: PropTypes.arrayOf(ArticleShape).isRequired,
  setCollection: PropTypes.func.isRequired,
  setCurrentArticle: PropTypes.func.isRequired,
  currentArticle: ArticleShape,
};
