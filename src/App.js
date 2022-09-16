import { Routes, Route } from "react-router-dom";
import "./Styles/style.scss";
import Banner from "./Banner";
import CourseGrid from "./CourseGrid";
import Form from "./Form";
import Error_404 from "./Error_404";
import CourseDetail from "./CourseDetail";
import Menu from "./Menu";
import History from "./History";

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route
          path="/"
          element={
            <Banner
              bannerTitle="Konoha Academy"
              bannerImage="https://68.media.tumblr.com/5c2f8341d3a3590c0e8834cb8dd9c7f0/tumblr_oi72x7Raym1vgv3yxo6_1280.jpg"
              bannerComment="Konohagakure Village Academy official page"
              linkText="Go!!!!"
            />
          }
        />
        <Route path="form" element={<Form />} />
        <Route path="courses" element={<CourseGrid />} />
        <Route path="courses/:id" element={<CourseDetail />} />
        <Route path="history/:name" element={<History />} />
        <Route path="*" element={<Error_404 />} />
      </Routes>
    </>
  );
};

export default App;
