import { ICourse } from "../../../types/courses";
import placeholder from "./../../../assets/placeholder.webp";
import { Button } from "../../layout/Button/Button";
import classes from "./CourseItem.module.css";

interface ICourseProps {
  item: ICourse;
  handleDeleteCourse: (id: string) => void;
}

export const CourseItem = ({ item, handleDeleteCourse }: ICourseProps) => {
  const handleClick = () => {
    handleDeleteCourse(item.id);
  };

  return (
    <li className={classes.course}>
      <img src={placeholder} className={classes.img} width={150} />
      <div className={classes.container}>
        <p className={classes.title}>{item.name}</p>
        <span>Duration: {item.duration} hours </span>
        <span>Expire date: {item.expireDate}</span>
      </div>
      <Button onClick={handleClick}>Remove</Button>
    </li>
  );
};
