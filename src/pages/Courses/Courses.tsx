import { useState, useEffect } from "react";
import instance from "../../api/api";
import { CoursesList } from "../../components/courses/CoursesList/CoursesList";

export const Courses = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/courses");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <CoursesList data={data} />;
};
