import "../../Styles/loader.scss";

function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="loader spin">
        <div className="loader--half loader--left"></div>
        <div className="loader--half loader--right"></div>
      </div>
    </div>
  );
}

export default Loader;
