import { FormEvent, memo } from "react";
import { Fieldset } from "../../form/Fieldset/Fieldset";
import classes from "./CourseForm.module.css";

interface ICourseFormProps {
  addCourse: (data: any) => void;
}

export const CourseForm = memo(({ addCourse }: ICourseFormProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form.entries());

    addCourse(data);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Fieldset
        label="Name of course"
        id="name"
        type="text"
        name="name"
        required
      />
      <Fieldset label="Link" id="url" type="url" name="url" required />
      <Fieldset
        label="When would you like to start?"
        id="startDate"
        type="date"
        name="startDate"
        required
      />
      <Fieldset
        label="When course will be expired?"
        id="expireDate"
        type="date"
        name="expireDate"
        required
      />
      <Fieldset
        label="Duration in hours"
        id="duration"
        type="number"
        name="duration"
        required
      />
      <button className={classes.btn}>Add</button>
    </form>
  );
});
