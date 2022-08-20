import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default function DisplayCard({ course }) {
  return (
    <div style={{ width: "40%", height: "50%", padding: "5px 16px" }}>
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
            <Typography variant="body2">{course.info}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/courseDetails/${course.idCourse}`}>
            <Button size="small" color="primary">
              View Details
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
