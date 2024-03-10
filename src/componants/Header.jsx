import { Link } from "react-router-dom";

export default function header() {
  return (
    <div className="bg-indigo-500">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <h1>
          <Link to="/">Logo</Link>
          </h1>
        <ul className="flex gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/signin">SignIn</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
