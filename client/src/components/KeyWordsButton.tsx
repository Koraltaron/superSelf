import { NavLink } from "react-router-dom";

function KeyWordsButton({ keywordProp }: { keywordProp: string }) {
  return (
    <>
      <NavLink to={`/quotes/${keywordProp}`}>
        <button type="button" value={keywordProp}>
          {keywordProp}
        </button>
      </NavLink>
    </>
  );
}
export default KeyWordsButton;
