import "./style/globals.css";
import logo from "/logo.png";
import heartPink from "/pinkHeart.png";

function App() {
  return (
    <>
      <header>
        <img className="logo" src={logo} alt="" />
      </header>
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
