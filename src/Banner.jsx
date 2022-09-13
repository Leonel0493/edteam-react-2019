import PropTypes from "prop-types";
import img404 from "./Images/Svg/404-error.svg";

function Banner({
  bannerImage,
  bannerTitle,
  bannerComment,
  linkText,
  linkUrl,
}) {
  return (
    <div className="main-banner img-container" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img
            className="main-banner__img"
            src={bannerImage}
            alt={bannerTitle}
          />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">{bannerTitle}</p>
            <p>{bannerComment}</p>
            <a href={linkUrl} className="button">
              {linkText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  bannerImage: PropTypes.string,
  bannerTitle: PropTypes.string,
  bannerComment: PropTypes.string,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
};

Banner.defaultProps = {
  bannerImage: img404,
  bannerTitle: "Write some title",
  bannerComment: "Banner component for user in some react pages",
  linkText: "link button",
  linkUrl: "/",
};

export default Banner;
