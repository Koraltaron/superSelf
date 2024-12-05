import KeyWordsButton from "../components/KeyWordsButton";
import "../style/homepage.css";
import superHero from "/superHero.png";

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
        <img src={superHero} alt="Super Hero icon" className="icon-search" />
      </section>
      <section id="key-words-button-container">
        <KeyWordsButton />
        <KeyWordsButton />
        <KeyWordsButton />
        <KeyWordsButton />
      </section>
    </>
  );
}

export default HomePage;
