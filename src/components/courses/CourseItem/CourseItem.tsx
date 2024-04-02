import { Link } from "react-router-dom";
import { ICourse } from "../../../types/courses";

interface ICourseProps {
  item: ICourse;
}

export const CourseItem = ({ item }: ICourseProps) => {
  return (
    <li>
      <Link to={`/course/${item.id}`}>
        <p>{item.name}</p>
      </Link>
    </li>
  );
};
