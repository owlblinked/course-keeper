import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

  return (
    <>
      <Link to="/courses/new">Add a new course</Link>
      <CoursesList data={data} loading={loading} />
    </>
  );
};
