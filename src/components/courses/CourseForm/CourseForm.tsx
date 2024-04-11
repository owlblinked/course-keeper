import { memo } from "react";
import { useForm } from "react-hook-form";
import { Fieldset } from "../../form/Fieldset/Fieldset";
import { generateBasicValidation } from "../../../helpers/generateValidationError";
import classes from "./CourseForm.module.css";
import { INewCourse } from "../../../types/courses";

const URL_REGEX =
  /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*$/i;

interface ICourseFormProps {
  addCourse: (data: INewCourse) => void;
}

export const CourseForm = memo(({ addCourse }: ICourseFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewCourse>();

  const onSubmit = (data: INewCourse) => {
    addCourse(data);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <Fieldset
        label="Name of course"
        id="name"
        type="text"
        errors={errors.name}
        {...register("name", generateBasicValidation("Name"))}
      />
      <Fieldset
        label="Link"
        id="url"
        type="url"
        errors={errors.url}
        {...register("url", {
          ...generateBasicValidation("Link"),
          pattern: {
            value: URL_REGEX,
            message: "Url is incorrect",
          },
        })}
      />
      <Fieldset
        label="When would you like to start?"
        id="startDate"
        type="date"
        errors={errors.startDate}
        {...register("startDate", generateBasicValidation("Start date"))}
      />
      <Fieldset
        label="When course will be expired?"
        id="expireDate"
        type="date"
        errors={errors.expireDate}
        {...register("expireDate", generateBasicValidation("Expire date"))}
      />
      <Fieldset
        label="Duration in hours"
        id="duration"
        type="number"
        errors={errors.duration}
        {...register("duration", {
          ...generateBasicValidation("Duration"),
          min: {
            value: 1,
            message: "Duration should be more than 0",
          },
        })}
      />
      <button className={classes.btn}>Add</button>
    </form>
  );
});
