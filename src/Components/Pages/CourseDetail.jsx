import React from "react";
import { useParams, Link } from "react-router-dom";
import logoNotFound from "../../Images/Svg/404-error.svg";

const courses = [
  {
    idCourse: 1,
    title: "Ninjutsu 101",
    courseImage:
      "https://www.cultture.com/pics/2021/01/naruto-10-de-los-jutsu-mas-dificiles-de-aprender-7.jpg",
    teacher: "Sakura Haruno",
    teacherImage:
      "https://image.winudf.com/v2/image/Y29tLmFuZHJvbW8uZGV2NjYwNjE0LmFwcDcxMjI2NF9zY3JlZW5fMF8xNTEzNTEzMjU4XzA3NA/screen-0.jpg?fakeurl=1&type=.webp",
    price: 35,
  },
  {
    idCourse: 2,
    title: "Hisotria Ninja",
    courseImage:
      "https://www.ecured.cu/images/0/06/Monumento_Hokage_Actual_7.jpg",
    teacher: "Konahamaru Sarutobi",
    teacherImage:
      "https://i.pinimg.com/originals/e0/5b/24/e05b24185a5cee4e0ff9aab53b6822ea.jpg",
    price: 10,
  },
  {
    idCourse: 3,
    title: "Doujutsus basicos",
    courseImage:
      "http://pm1.narvii.com/6208/9a6aaeba9080d2d14544108560982331d8f4d2f7_00.jpg",
    teacher: "Sarada Uchiha",
    teacherImage:
      "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/s/sarada_uchiha_boruto_anime_2.jpg",
    price: 25,
  },
  {
    idCourse: 4,
    title: "Doujutsus Avanzados",
    courseImage:
      "https://i0.wp.com/www.senpai.com.mx/wp-content/uploads/2021/04/Naruto_-Asi%CC%81-se-ven-los-Doujutsu-de-la-serie-en-la-vida-real.jpg?fit=1710%2C900&ssl=1",
    teacher: "Sasuke Uchiha",
    teacherImage:
      "https://areajugones.sport.es/wp-content/uploads/2020/03/sasuke-min.jpg",
    price: 45,
  },
  {
    idCourse: 5,
    title: "Taijutsu desde cero",
    courseImage:
      "https://www.geekmi.news/__export/1602216587890/sites/debate/img/2020/10/08/naruto_taijutsu.jpeg_517723999.jpeg",
    teacher: "Rock Lee",
    teacherImage:
      "https://alfabetajuega.com/hero/2021/11/naruto-fem-cosplay-rock-lee.jpg?width=600&aspect_ratio=1:1",
    price: 39,
  },
];

const CourseDetail = () => {
  let { id } = useParams();

  const foundCourse = courses.filter(
    (course) => course.idCourse === parseInt(id)
  )[0];

  return (
    <div className="ed-grid m-grid-3">
      {foundCourse ? (
        <>
          <div className="m-cols-3">
            <h1>{foundCourse.title}</h1>
          </div>
          <div className="m-cols-1">
            <img src={foundCourse.courseImage} alt={foundCourse.title} />
          </div>
          <div className="m-cols-2">
            <p>{foundCourse.teacher}</p>
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

export default CourseDetail;
