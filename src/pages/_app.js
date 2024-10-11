/* eslint-disable react/jsx-props-no-spreading */
import { useRouter } from "next/router";
import "../styles/globals.css";
import { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import data from "../../data/seed.json";
import styles from "../styles/Simplepedia.module.css";

function MainApp({ Component, pageProps }) {
  const [collection, setCollection] = useState(data);
  const router = useRouter();
  const { id } = router.query;
  let currentArticle;

  if(id){
    currentArticle = collection.find((article) => article.id === +id);
  }

  const setCurrentArticle = (article) =>
    article ? (router.push(`/articles/${article.id}`)) : (router.push(`/articles`)) 
  
  const props = {
    ...pageProps,
    collection,
    setCollection,
    setCurrentArticle,
    currentArticle
  };



  return (
    <div className={styles.container}>
      <Head>
        <title>Simplepedia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">Simplepedia</h1>
        <Component {...props} />
      </main>

      <footer>CS 312 Assignment 3</footer>
    </div>
  );
}
export default MainApp;

MainApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}),
};
