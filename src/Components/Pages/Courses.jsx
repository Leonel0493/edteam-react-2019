import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Molecules/Loader";
import CourseGrid from "../Organisms/CourseGrid";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [reqState, setReqState] = useState(0); //0 - Pending | 1 - Done | -1 rejected

  useEffect(() => {
    axios
      .get("http://localhost:4000/courses")
      .then((res) => {
        addCourses(res.data);
        reqDone();
      })
      .catch((error) => {
        reqDenied();
      });
  }, []);

  const addCourses = (data) => {
    setCourses(() => {
      return data;
    });
  };

  const reqDone = () => {
    setReqState({ reqState: 1 });
  };

  const reqDenied = () => {
    setReqState({ reqState: -1 });
  };

  return (
    <div>{reqState === 0 ? <Loader /> : <CourseGrid courses={courses} />}</div>
  );
}

export default Courses;
