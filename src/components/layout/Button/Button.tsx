import classes from "./Button.module.css";

export const Button = ({ children, onClick }: any) => {
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button className={classes.button} onClick={onClickHandler}>
      {children}
    </button>
  );
};
