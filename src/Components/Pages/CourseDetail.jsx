import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import withLogin from "../../HOC/withLogin";
import logoNotFound from "../../Images/Svg/404-error.svg";

const CourseDetail = (props) => {
  let { id } = useParams();

  const [currentCourse, setCurrentCourse] = useState();

  useEffect(() => {
    console.log(props);
    axios
      .get(`http://localhost:4000/courses/${id}`)
      .then((res) => fillCourse(res.data));
  }, [id]);

  const fillCourse = (data) => {
    setCurrentCourse(() => {
      return data;
    });
  };

  return (
    <div className="ed-grid m-grid-3">
      {currentCourse ? (
        <>
          <div className="m-cols-3">
            <h1>{currentCourse.Course}</h1>
          </div>
          <div className="m-cols-1">
            <img src={currentCourse.ImageCourse} alt={currentCourse.Course} />
          </div>
          <div className="m-cols-2">
            <p>{currentCourse.Description}</p>
            <Link to="/courses"> go back 🔙</Link>
          </div>
        </>
      ) : (
        <>
          <div className="m-cols-3">
            <h1>Course not foud</h1>
          </div>
          <div className="m-cols-1">
            <img src={logoNotFound} alt="Not found" />
          </div>
          <div className="m-cols-2">
            <p>We don't found this course please </p>{" "}
            <Link to="/courses"> go back</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default withLogin(CourseDetail);
