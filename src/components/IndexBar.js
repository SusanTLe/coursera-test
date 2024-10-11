import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ArticleShape from "./ArticleShape";
import TitlesView from "./TitlesView";
import SectionsView from "./SectionsView";

/*
  IndexBar.js

  This component provides the section and title display that allows the user to 
  browse the available articles and select one for display. 
*/

export default function IndexBar({
  collection,
  setCurrentArticle,
  currentArticle,
}) {
  const [currentSection, setCurrentSection] = useState(null);

  const sections = {};

  collection.forEach((item) => {
    const letter = item.title.charAt(0);
    if (!sections[letter]) {
      sections[letter] = [item];
    } else {
      sections[letter].push(item);
    }
  });

  const givenSec = collection.filter(
    (article) => article.title[0] === currentSection,
  );

  // references callback from sectionsview
  const handleSectionChange = (sectionReturn) => {
    if (sectionReturn !== currentSection) {
      setCurrentSection(sectionReturn);
      setCurrentArticle(null);
    }
  };

  useEffect(() => {
    if (currentArticle) {
      const sectionLetter = currentArticle.title.charAt(0);
      setCurrentSection(sectionLetter);
    }
  }, [currentArticle]);

  // Index Bar
  return (
    <>
      <SectionsView
        sections={Object.keys(sections)}
        setCurrentSection={handleSectionChange}
      />
      {currentSection ? (
        <TitlesView articles={givenSec} setCurrentArticle={setCurrentArticle} />
      ) : (
        <p>Select a section.</p>
      )}
    </>
  );
}

IndexBar.propTypes = {
  collection: PropTypes.arrayOf(ArticleShape).isRequired,
  setCurrentArticle: PropTypes.func.isRequired,
  currentArticle: ArticleShape,
};
