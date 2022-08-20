import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCourses } from "../actions/courseActions";
import DisplayCard from "../UI/DisplayCard";

const CourseList = () => {
  const dispatch = useDispatch();
  const courseList = useSelector((state) => state.courseList);
  const { courses } = courseList;

  React.useEffect(() => {
    dispatch(listCourses());
  }, [dispatch]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "1em 0 0.5em 0",
          color: "#343434",
          fontWeight: "normal",
          fontFamily: "Ultra sans-serif",
          fontSize: "36px",
          lineHeight: "42px",
          textTransform: "uppercase",
          textShadow: "0 2px white, 0 3px #777",
        }}
      >
        Course List
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {courses.map((course) => (
          <DisplayCard key={course.idCourse} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
