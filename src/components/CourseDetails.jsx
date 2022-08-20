import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function CourseDetails() {
  const courseList = useSelector((state) => state.courseList);
  const { courses } = courseList;
  const params = useParams();
  const [course, setCourse] = React.useState({});

  React.useEffect(() => {
    const { id } = params;
    const result = courses.find((course) => id === course.idCourse);
    setCourse(result);
  }, [params, courses]);

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
        Course Details
      </div>

      <div
        style={{
          width: "90%",
          height: "100%",
          padding: "5px 16px",
          margin: "50px",
        }}
      >
        <Card
          sx={{
            maxWidth: 350,
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={course.imageUrl}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {course.name}
              </Typography>
              <Typography>{course.info}</Typography>
              <Typography>{`Duration: ${course.duration}`}</Typography>
              <Typography>{`Amount: ${course.amount}`}</Typography>
              <Typography>{`Subject name: ${course.subjectName}`}</Typography>
              <Typography>{`Session Count: ${course.sessionCount}`}</Typography>
              <Typography>{`Amount in USD: $${course.amountUsd}`}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}

export default CourseDetails;
