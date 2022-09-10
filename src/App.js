import Curso from "./Curso";
import "./Styles/style.scss";

const App = () => {
  return (
    <>
      <div className="main-banner img-container" id="main-banner">
        <div className="ed-grid lg-grid-6">
          <div className="lg-cols-4 lg-x-2">
            <img
              className="main-banner__img"
              src="https://68.media.tumblr.com/5c2f8341d3a3590c0e8834cb8dd9c7f0/tumblr_oi72x7Raym1vgv3yxo6_1280.jpg"
              alt="Konohagakure village "
            />
            <div className="main-banner__data s-center">
              <p className="t2 s-mb-0">Curso de React</p>
              <p> Curso de react por EdTeam</p>
              <a href="/home/index" className="button">
                Ve por ello!
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="ed-grid m-grid-3">
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
      </div>
    </>
  );
};

export default App;
