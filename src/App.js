import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Faqs from "./components/Faqs";
import ChooseSkills from "./components/ChooseSkills";
import OurCourses from "./components/OurCourses";
import CoursesSlider from "./components/CoursesSlider";
import OurRecognition from "./components/OurRecognition";

function App() {
  return (
    <div>
      <Header />
      <OurRecognition />
      <CoursesSlider />
      <OurCourses />
      <ChooseSkills />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
