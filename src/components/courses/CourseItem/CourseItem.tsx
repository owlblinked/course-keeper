import { Link } from "react-router-dom";
import { ICourse } from "../../../types/courses";
import classes from "./CourseItem.module.css";

interface ICourseProps {
  item: ICourse;
}

export const CourseItem = ({ item }: ICourseProps) => {
  return (
    <li>
      <Link to={`/course/${item.id}`} className={classes.course}>
        <p>{item.name}</p>
        <span>Expire date: {item.expireDate}</span>
      </Link>
    </li>
  );
};
