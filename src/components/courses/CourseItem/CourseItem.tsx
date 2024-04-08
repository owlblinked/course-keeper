import { Link } from "react-router-dom";
import { ICourse } from "../../../types/courses";
import classes from "./CourseItem.module.css";

interface ICourseProps {
  item: ICourse;
}

export const CourseItem = ({ item }: ICourseProps) => {
  return (
    <li className={classes.item}>
      <Link to={`/course/${item.id}`} className={classes.course}>
        <p>{item.name}</p>
        <p>{item.startDate}</p>
      </Link>
    </li>
  );
};
