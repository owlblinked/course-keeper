import { Link } from "react-router-dom";

export const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/courses">My Courses</Link>
      </li>
    </ul>
  </nav>
);
