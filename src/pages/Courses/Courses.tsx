import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../api/api";
import { CoursesList } from "../../components/courses/CoursesList/CoursesList";
import { Button } from "../../components/layout/Button/Button";
import { ICourse } from "../../types/courses";

export const Courses = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<ICourse[] | []>([]);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const { data } = await Api.get("/courses");
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDeleteCourse = async (id: string) => {
    try {
      const response = await Api.delete(`/courses/${id}`);

      if (response.status === 200) {
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <>
      <Button>
        <Link to="/courses/new">Add a new course</Link>
      </Button>
      <CoursesList
        data={data}
        loading={isLoading}
        handleDeleteCourse={handleDeleteCourse}
      />
    </>
  );
};
