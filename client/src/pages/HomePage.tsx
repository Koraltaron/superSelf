import KeyWordsButton from "../components/KeyWordsButton";
import { Categories } from "../data/superHeroData";
import "../style/homepage.css";

function HomePage() {
  return (
    <>
      <h1>What's on your mind today?</h1>
      <section id="search-bar">
        <input
          id="search-input"
          type="text"
          placeholder="Enter your feeling..."
        />

        <img alt="Super Hero icon" className="icon-search" />
      </section>
      <section id="key-words-button-container">
        {Categories.map((el) => (
          <li key={el} className="keywordButton">
            <KeyWordsButton keywordProp={el} />{" "}
          </li>
        ))}
      </section>
    </>
  );
}

export default HomePage;
