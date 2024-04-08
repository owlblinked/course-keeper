import { memo } from "react";
import { CourseItem } from "../CourseItem/CourseItem";
import { ICourse } from "../../../types/courses";
import classes from "./CoursesList.module.css";

interface ICoursesListProps {
  data: ICourse[];
  loading?: boolean;
}

const LOADING_TEXT = "Loading list...";
const ERROR_TEXT = "No course available. Please check back later.";

export const CoursesList = memo(
  ({ data, loading = false }: ICoursesListProps) => {
    if (loading) {
      return <p>{LOADING_TEXT}</p>;
    }

    if (data.length === 0) {
      return <p>{ERROR_TEXT}</p>;
    }

    return (
      <ul className={classes.list}>
        {data.map((item) => (
          <CourseItem key={item.id} item={item} />
        ))}
      </ul>
    );
  }
);
