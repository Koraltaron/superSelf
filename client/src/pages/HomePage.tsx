// import { useState } from "react";
import KeyWordsButton from "../components/KeyWordsButton";
import { Categories } from "../data/superHeroData";
import "../style/homepage.css";
import superHero from "/superHero.png";
// import { SuperHeroData } from "../data/superHeroData";

function HomePage() {
  //   const [value, setValue] = useState('');

  //   function handleChange(e) {
  //    setValue(e.target.value);
  //   }

  //  const filteredArray =
  //      value ? SuperHeroData.filter((el) => el.keyword.includes(value)) : SuperHeroData;

  return (
    <>
      <h1>What's on your mind today?</h1>
      <section id="search-bar">
        <input
          // onChange={handleChange}
          id="search-input"
          type="text"
          placeholder="Enter your feeling..."
        />
        <img src={superHero} alt="Super Hero icon" className="icon-search" />
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
