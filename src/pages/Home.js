import React from "react";
import Faqs from "../components/Faqs";
import ChooseSkills from "../components/ChooseSkills";
import OurCourses from "../components/OurCourses";
import CoursesSlider from "../components/CoursesSlider";
import OurRecognition from "../components/OurRecognition";

const Home = () => {
  return (
    <div>
      <OurRecognition />
      <CoursesSlider />
      <OurCourses />
      <ChooseSkills />
      <Faqs />
    </div>
  );
};

export default Home;
