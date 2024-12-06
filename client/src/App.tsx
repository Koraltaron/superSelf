import "./App.css";
import { Outlet } from "react-router-dom";
import "./style/globals.css";
import { useState } from "react";
import logo from "/logo.png";
import heartPink from "/pinkHeart.png";
import useTheme from "./utils/useTheme";
 

function App() {
  const [srcHero, setSrcHero] = useState<string>("");

  const { theme, setTheme } = useTheme();
  console.warn(theme);

  return (
    <>
      <header className={`${theme && "dark-theme"}`}>
        <img className="logo" src={logo} alt="" />
      </header>
      <main className={`default-theme ${theme && "dark-theme"}`}>
        <Outlet context={{ srcHero, setSrcHero }} />
      </main>
      <footer>
        <section>
          <p>2024 copyright</p>
          <img src={heartPink} alt="" />
          <p>superSelf</p>
        </section>
        <label className="switch">
          <p className="sun">☼</p>
          <input type="checkbox" onClick={() => setTheme(!theme)} />
          <span className="slider round" />
          <p className="moon">☽</p>
        </label>
      </footer>
    </>
  );
}

export default App;
