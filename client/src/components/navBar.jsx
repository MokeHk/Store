import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <button className="btn btn-secondary">
        <Link to={"/"}>Home</Link>
      </button>
      <button className="btn btn-secondary">
        <Link to={"/:id"}>Buy/Sell</Link>
      </button>
      <button className="btn btn-secondary">
        <Link to={"/:id/edit"}>Edit</Link>
      </button>
    </div>
  );
}
