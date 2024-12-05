import "../style/QuoteInfo.css";

function QuoteInfo() {
  return (
    <div className="main-container">
      <div className="info-container">
        <h2 className="quote-title">Daily quotes for a super hero !</h2>
        <div className="quote-container">
          <h3>Happiness</h3>
          <blockquote>
            <p>"The will of a man is his happiness"</p>
            <cite>
              <i>Friedrich Schiller</i>
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
        src="https://www.pngarts.com/files/4/Gamora-PNG-Download-Image.png"
        alt="Gamora des gardiens de la galaxie"
      />
    </div>
  );
}

export default QuoteInfo;
