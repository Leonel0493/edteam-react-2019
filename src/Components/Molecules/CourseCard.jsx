import image404 from "../../Images/Svg/404-error.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CourseCard = ({
  idCourse,
  Course,
  Description,
  ImageCourse,
  Proffesor,
  ProfilePic,
  Price,
}) => {
  return (
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <Link to={`/courses/${idCourse}`}>
          <img src={ImageCourse} alt={Course} />
        </Link>
      </div>

      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">{Course}</h3>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img src={ProfilePic} alt={Proffesor} />
              </div>
            </div>
            <span className="small">{Proffesor}</span>
          </div>
        </div>
        <div className="s-main-center">
          <Link
            className="button--ghost-alert button--tiny"
            to={`/courses/${idCourse}`}
          >
            {`$ ${Price} USD`}
          </Link>
        </div>
      </div>
    </article>
  );
};

CourseCard.propTypes = {
  idCourse: PropTypes.number,
  Course: PropTypes.string,
  Description: PropTypes.string,
  ImageCourse: PropTypes.string,
  Proffesor: PropTypes.string,
  ProfilePic: PropTypes.string,
  Price: PropTypes.string,
};

CourseCard.defaultProps = {
  idCourse: 0,
  Course: "Course title not loaded",
  Description: "The information is not loaded",
  ImageCourse: image404,
  Proffesor: "Teacher not loaded",
  ProfilePic: image404,
  Price: "0",
};

export default CourseCard;
