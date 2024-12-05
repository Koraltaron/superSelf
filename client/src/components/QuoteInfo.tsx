import "../style/QuoteInfo.css";
import { useLoaderData, useOutletContext } from "react-router-dom";
import type { quoteFetchDataTypes } from "../types/quote-fetch-types";

function QuoteInfo() {
  const data = useLoaderData() as quoteFetchDataTypes[];
  const firstLetterCatName = data[0].category.slice(0, 1).toUpperCase();
  const catLength = data[0].category.length;
  const restOfTheName = data[0].category.slice(1, catLength);
  const categoryName = firstLetterCatName + restOfTheName;

  const { srcHero }: { srcHero: string } = useOutletContext();

  return (
    <div className="main-container">
      <div className="info-container">
        <h2 className="quote-title">Daily quotes for a super hero !</h2>
        <div className="quote-container">
          <h3>{categoryName}</h3>
          <blockquote>
            <p>{data[0].quote}</p>
            <cite>
              <i>{data[0].author}</i>
            </cite>
          </blockquote>
        </div>
        <div className="btn-container">
          <button type="button" className="quote-btn">
            New feeling ?
          </button>
          <button type="button" className="quote-btn">
            More hearts !
          </button>
        </div>
      </div>
      <img
        className="hero-img"
        src={srcHero}
        alt="Gamora des gardiens de la galaxie"
      />
    </div>
  );
}

export default QuoteInfo;
