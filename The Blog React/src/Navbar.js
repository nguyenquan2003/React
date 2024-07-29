import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Blog</h1>
      <div className="links">

        {/* react router */}
        {/* Link dùng để điều hướng giữa các trang khác nhau trong ứng dụng React mà không cần tải lại toàn bộ trang */}
        <Link to="/">Home </Link>
        <Link to="/create">New Blog</Link>

      </div>
    </nav>
  );

}

export default Navbar;