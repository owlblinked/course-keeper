import { PropsWithRef, forwardRef } from "react";

interface InputProps extends PropsWithRef<JSX.IntrinsicElements["input"]> {
  id: string;
  label: string;
  errors: any;
}

export const Fieldset = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, errors, ...rest }, ref) => {
    return (
      <fieldset>
        <label htmlFor={id}>{label}</label>
        <input id={id} ref={ref} {...rest} />
        {errors && <p className="error">{errors.message}</p>}
      </fieldset>
    );
  }
);
