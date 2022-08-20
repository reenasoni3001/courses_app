import {
  COURSE_LIST_FAIL,
  COURSE_LIST_REQUEST,
  COURSE_LIST_SUCCESS,
} from "../constants/courseConstant";

export const listCourses = () => async (dispatch) => {
  try {
    dispatch({ type: COURSE_LIST_REQUEST });
    const response = await fetch(
      "https://api.bricketc.com/bricketc-backend-php/get_all_courses.php"
    );

    const { body } = await response.json();

    dispatch({ type: COURSE_LIST_SUCCESS, payLoad: body });
  } catch (error) {
    dispatch({ type: COURSE_LIST_FAIL, payLoad: error });
  }
};
