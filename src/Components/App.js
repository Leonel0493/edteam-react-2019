import { Routes, Route } from "react-router-dom";
import "../Styles/style.scss";
import Form from "./Pages/Form";
import Error_404 from "./Pages/Error_404";
import CourseDetail from "./Pages/CourseDetail";
import Menu from "./Molecules/Menu";
import History from "./Pages/History";
import Home from "./Pages/Home";
import Proffesor from "./Pages/Proffesor";
import Courses from "./Pages/Courses";

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Form />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:id" element={<CourseDetail />} />
        <Route path="history/:name" element={<History />} />
        <Route path="proffesors" element={<Proffesor />} />
        <Route path="*" element={<Error_404 />} />
      </Routes>
    </>
  );
};

export default App;
