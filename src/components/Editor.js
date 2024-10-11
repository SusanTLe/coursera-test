/*
  Editor.js

  This provides a basic editor with space for entering a title and a body.

  The interface has two buttons. If "Cancel" is clicked, the `complete` callback
  is called with no arguments. If the "Save" button is clicked, the `complete` callback
  is called with a new article object with `title`, `contents`, and `date`. 

  If the optional `article` prop is set, the `title` and `contents` fields of the component
  are pre-loaded with the values. In addition, all other properties of the object are 
  included in the returned article object. 

  props:
    currentArticle - object with `title` and `contents` properties at minimum
    complete - function to call on completion (required)
*/

import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import ArticleShape from "./ArticleShape";

import styles from "../styles/Editor.module.css";

export default function Editor({ complete, currentArticle }) {
  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  useEffect(() => {
    if (currentArticle) {
      setTitle(currentArticle.title);
      setContent(currentArticle.contents);
    }
  }, [currentArticle]);

  const handleCancel = () => complete();
  const handleSave = () => {
    const someArticle = {
      title,
      contents: content,
      edited: new Date().toISOString(),
      id: currentArticle?.id,
    };
    complete(someArticle);
  };

  return (
    <div className={styles.editor}>
      <input
        type="text"
        placeholder="Enter a title to save."
        value={title}
        onChange={(keyboard) => {
          setTitle(keyboard.target.value);
        }}
      />

      <textarea
        placeholder="Enter some new content to save."
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />

      <button type="button" onClick={handleSave} disabled={!title}>
        {" "}
        Save{" "}
      </button>

      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
}

Editor.propTypes = {
  complete: PropTypes.func.isRequired,
  currentArticle: ArticleShape,
};
