import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Head from "next/head";
import ArticleShape from "../../components/ArticleShape";
import IndexBar from "../../components/IndexBar";
import Article from "../../components/Article";
import ButtonBar from "../../components/ButtonBar";
import styles from "../../styles/Simplepedia.module.css";

export default function Simplepedia({
  collection,
  setCurrentArticle,
  currentArticle,
}) {
  const router = useRouter();
  const handleClick = (command) => {
    if (command === "add") {
      router.push("/edit");
    } else if (command === "edit" && currentArticle) {
      router.push(`/articles/${currentArticle.id}/edit`);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Simplepedia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Simplepedia</h1>
        <IndexBar
          collection={collection}
          setCurrentArticle={setCurrentArticle}
        />
        {currentArticle && <Article currentArticle={currentArticle} />}
        <ButtonBar allowEdit={!!currentArticle} handleClick={handleClick} />
      </main>

      <footer>CS 312 Assignment 3</footer>
    </div>
  );
}

Simplepedia.propTypes = {
  collection: PropTypes.arrayOf(ArticleShape).isRequired,
  setCurrentArticle: PropTypes.func.isRequired,
  currentArticle: ArticleShape,
};
