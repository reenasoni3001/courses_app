import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseList from "./components/CourseList";
import CourseDetails from "./components/CourseDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/courseDetails/:id" element={<CourseDetails />} />
        <Route path="/" element={<CourseList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
