import { useCallback } from "react";
import { CourseForm } from "../../components/courses/CourseForm/CourseForm";
import { INewCourse } from "../../types/courses";
import Api from "../../api/api";

export const NewCourse = () => {
  const addCourse = useCallback(async (data: INewCourse) => {
    console.log("data", data);
    try {
      const response = await Api.post("/courses", data);

      console.log("response", response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  return <CourseForm addCourse={addCourse} />;
};
