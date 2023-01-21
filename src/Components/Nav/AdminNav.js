import { Link } from "react-router-dom";

export default function ClientNav(props) {
  return (
    <div>
      <h1>The Training Room</h1>
      <Link to="/admin/profile">Profile</Link>
      <Link to="/admin/schedule">Schedule</Link>
    </div>
  );
}
