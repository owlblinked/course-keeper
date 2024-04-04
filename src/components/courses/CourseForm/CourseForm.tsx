import { memo } from "react";
import classes from "./CourseForm.module.css";

export const CourseForm = memo(() => {
  return (
    <form className={classes.form}>
      <fieldset>
        <label htmlFor="title">Name of course</label>
        <input id="title" type="text" name="title" />
      </fieldset>
      <fieldset>
        <label htmlFor="link">Link</label>
        <input id="link" type="url" name="link" />
      </fieldset>
      <fieldset>
        <label htmlFor="startDate">When would you like to start?</label>
        <input id="startDate" type="date" name="startDate" />
      </fieldset>
      <fieldset>
        <label htmlFor="expireDate">When course will be expired?</label>
        <input id="expireDate" type="date" name="expireDate" />
      </fieldset>
      <fieldset>
        <label htmlFor="estimate">Estimate</label>
        <input id="estimate" type="number" name="estimate" />
      </fieldset>
      <button>Add</button>
    </form>
  );
});
