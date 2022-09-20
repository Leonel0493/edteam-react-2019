import CourseCard from "../Molecules/CourseCard";

const CourseGrid = ({ courses }) => {
  return (
    <div className="ed-grid m-grid-3">
      {courses.map((courses) => {
        return <CourseCard key={courses.idCourse} {...courses} />;
      })}
    </div>
  );
};

export default CourseGrid;
