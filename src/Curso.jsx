import image404 from "./Images/Svg/404-error.svg";
import PropTypes from "prop-types";

const Curso = ({ title, courseImage, teacher, teacherImage, price }) => {
  return (
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src={courseImage} alt={title} />
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">{title}</h3>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img src={teacherImage} alt={teacher} />
              </div>
            </div>
            <span className="small">{teacher}</span>
          </div>
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="/home">
            {`$ ${price} USD`}
          </a>
        </div>
      </div>
    </article>
  );
};

Curso.propTypes = {
  title: PropTypes.string,
  courseImage: PropTypes.string,
  teacher: PropTypes.string,
  teacherImage: PropTypes.string,
  price: PropTypes.number,
};

Curso.defaultProps = {
  title: "Title not loaded",
  courseImage: image404,
  teacher: "Teacher nor found",
  teacherImage: image404,
  price: 0,
};

export default Curso;
