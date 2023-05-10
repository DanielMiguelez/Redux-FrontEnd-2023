import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      navigate("/search/" + text);
    }
  };

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav>
      <span>header</span>

      <div>
        <span>
          <Link to="/">Home</Link>{" "}
        </span>
        <input onKeyUp={handleChange} placeholder="search post" name="text" />
        {user?.user?.role === 'admin' ? <span><Link to="/admin">Admin</Link></span>:''}
       
        {user ? (
          <>
            <span onClick={onLogout}>Logout</span>
            <span>
              <Link to="/profile">Profile</Link>{" "}
            </span>
          </>
        ) : (
          <>
            <span>
              <Link to="/login">Login</Link>
            </span>

            <span>
              <Link to="/register">Register</Link>
            </span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
