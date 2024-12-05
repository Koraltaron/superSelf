import "./App.css";
import { Outlet } from "react-router-dom";
import "./style/globals.css";
import { useEffect, useState } from "react";
import logo from "/logo.png";
import heartPink from "/pinkHeart.png";
import type { quoteFetchDataTypes } from "./types/quote-fetch-types";
import useTheme from "./utils/useTheme";

function App() {
  const [apiQuoteData, setApiQuoteData] = useState<quoteFetchDataTypes>();
  const category = "architecture";
  const options = {
    method: "GET",
    headers: { "x-api-key": `${import.meta.env.VITE_NINJA_API_KEY}` },
  };
  const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setApiQuoteData(data);
      });
  }, [url]);

  console.warn(apiQuoteData);

  const { theme, setTheme } = useTheme();
  console.warn(theme);

  return (
    <>
      <header>
        <img className="logo" src={logo} alt="" />
        <input type="checkbox" onClick={() => setTheme(!theme)} />
      </header>
      <main className={`normal ${theme && "dark"}`}>
        <Outlet />
      </main>
      <footer>
        <section>
          <p>2024 copyright</p>
          <img src={heartPink} alt="" />
          <p>superSelf</p>
        </section>
      </footer>
    </>
  );
}

export default App;
