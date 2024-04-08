import { NavLink } from "react-router-dom";
import dashboard from "./../../../assets/icons/dashboard.svg";
import courses from "./../../../assets/icons/courses.svg";
import home from "./../../../assets/icons/home.svg";
import classes from "./Navigation.module.css";

export const Navigation = () => (
  <nav>
    <ul>
      <li className={classes.item}>
        <NavLink to="/" className={classes.link}>
          <img className={classes.icon} src={home} alt="" aria-hidden />
          Home
        </NavLink>
      </li>
      <li className={classes.item}>
        <NavLink to="/courses" className={classes.link}>
          <img className={classes.icon} src={courses} alt="" aria-hidden />
          My Courses
        </NavLink>
      </li>
      <li className={classes.item}>
        <NavLink to="/statistics" className={classes.link}>
          <img className={classes.icon} src={dashboard} alt="" aria-hidden />
          Statistics
        </NavLink>
      </li>
    </ul>
  </nav>
);
