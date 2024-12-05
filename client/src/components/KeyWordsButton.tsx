import { NavLink, useOutletContext } from "react-router-dom";
import { SuperHeroData } from "../data/superHeroData";

function KeyWordsButton({ keywordProp }: { keywordProp: string }) {
  const { setSrcHero }: { setSrcHero: (url: string) => void } =
    useOutletContext();
  const findSrcHero = (value: string) => {
    const heroToFind = SuperHeroData.find((hero) => {
      return hero.keyword.includes(value);
    });
    if (heroToFind) {
      setSrcHero(heroToFind.url);
    }
  };
  return (
    <>
      <NavLink to={`/quotes/${keywordProp}`}>
        <button
          type="button"
          value={keywordProp}
          onClick={() => {
            findSrcHero(keywordProp);
          }}
        >
          {keywordProp}
        </button>
      </NavLink>
    </>
  );
}
export default KeyWordsButton;
