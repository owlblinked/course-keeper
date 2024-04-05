export const Fieldset = ({ ...props }: any) => {
  return (
    <fieldset>
      <label htmlFor={props.name}>{props.label}</label>
      <input {...props} />
    </fieldset>
  );
};
