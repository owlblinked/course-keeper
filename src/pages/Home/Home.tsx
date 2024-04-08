import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const Home = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <>
      <p>Tasks for today</p>
      <Calendar
        onChange={onChange}
        value={value}
        next2Label={null}
        prev2Label={null}
      />
    </>
  );
};
