import { useState } from "react";
import KeyWordsButton from "../components/KeyWordsButton";
import { Categories } from "../data/superHeroData";
import "../style/homepage.css";
import superHero from "/superHero.png";

function HomePage() {
  const [category, setCategory] = useState(Categories);

  //CATEGORY BUTTONS FILTER
  const sortCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (inputValue) {
      const newCategories = Categories.filter((category) => {
        const categoriesToFind = category.name.includes(
          inputValue.toLowerCase(),
        );
        return categoriesToFind;
      });
      setCategory(newCategories);
    } else {
      setCategory(Categories);
    }
  };

  return (
    <>
      <h1>What's on your mind today?</h1>
      <section id="search-bar">
        <input
          onChange={(event) => sortCategory(event)}
          id="search-input"
          type="text"
          placeholder="Enter your feeling..."
        />
        <img src={superHero} alt="Super Hero icon" className="icon-search" />
      </section>
      <section id="key-words-button-container">
        {category.map((el) => (
          <li key={el.name} className="keywordButton">
            <KeyWordsButton keywordProp={el.name} />
          </li>
        ))}
      </section>
    </>
  );
}

export default HomePage;
