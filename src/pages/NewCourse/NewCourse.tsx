import { useCallback } from "react";
import Api from "../../api/api";
import { ADD_COURSE_FIELDS } from "../../constants/form";
import { Form } from "../../components/form/Form/Form";

export const NewCourse = () => {
  const addCourse = useCallback(async (data: any) => {
    try {
      const response = await Api.post("/courses", data);

      console.log("response", response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  return (
    <Form
      onSubmitData={addCourse}
      fields={ADD_COURSE_FIELDS}
      submitText="Add"
    />
  );
};
