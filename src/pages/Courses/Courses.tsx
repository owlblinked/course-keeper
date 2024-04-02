import { useState, useEffect } from "react";
import Api from "../../api/api";
import { CoursesList } from "../../components/courses/CoursesList/CoursesList";

export const Courses = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await Api.get("/courses");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return <CoursesList data={data} loading={loading} />;
};
