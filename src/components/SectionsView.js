import PropTypes from "prop-types";
import styles from "../styles/SectionsView.module.css";

export default function SectionsView({ sections, setCurrentSection }) {
  const sorted = [...sections].sort();

  const items = sorted.map((element) => (
    <li
      key={element}
      onClick={() => setCurrentSection(element)}
      data-testid="section"
    >
      {element}
    </li>
  ));

  // eventually will change w setcurrentsectionx

  return (
    <div className={styles.sectionList}>
      <ul>{items}</ul>
    </div>
  );
}

SectionsView.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCurrentSection: PropTypes.func.isRequired,
};
