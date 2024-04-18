import { memo } from "react";
import {
  DeepMap,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Fieldset } from "../Fieldset/Fieldset";
import classes from "./Form.module.css";

export interface IFormField<T> {
  label: string;
  id: keyof T;
  type: string;
  errors?: DeepMap<T, FieldValues>;
  validation: any;
}

interface IFormProps<T extends FieldValues> {
  onSubmitData: any;
  fields: IFormField<T>[];
  submitText: string;
}

export const Form = memo(
  <T extends FieldValues>({
    onSubmitData,
    fields,
    submitText,
  }: IFormProps<T>) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<T>();

    const onSubmit: SubmitHandler<T> = (data) => {
      onSubmitData(data);
    };

    return (
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <Fieldset
            key={String(field.id)}
            label={field.label}
            id={String(field.id)}
            type={field.type}
            errors={errors[field.id as string]}
            {...register(String(field.id) as Path<T>, field.validation)}
          />
        ))}
        <button className={classes.btn}>{submitText}</button>
      </form>
    );
  }
);
