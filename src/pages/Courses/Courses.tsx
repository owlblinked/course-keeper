import { Link } from "react-router-dom";
import { CoursesList } from "../../components/courses/CoursesList/CoursesList";
import { useGetCourses } from "../../components/courses/queries";

export const Courses = () => {
  const { data, isPending, error } = useGetCourses();

  return (
    <>
      <Link to="/courses/new">Add a new course</Link>
      <CoursesList data={data} loading={isPending} />
    </>
  );
};
