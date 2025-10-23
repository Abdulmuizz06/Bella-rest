import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { account } from "./../lib/appwrite";


const Login = () => {
  const navigate = useNavigate();

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // ✅ Add this line

  const handleUpdate = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await account.createEmailPasswordSession(
        loginDetails.email,
        loginDetails.password
      );
      alert("Login successful!");
      navigate("/admin/dashboard");
    } catch (error) {
      console.log(error);
      alert(`Login failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "100px auto", padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            onChange={handleUpdate}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            className="form-input"
            type="password"
            id="password"
            name="password"
            onChange={handleUpdate}
            required
          />
        </div>
        <p>
          Don't have an account?
          <Link to="/auth/register" className="nav-link">
            {" "}
            Register here.{" "}
          </Link>
        </p>
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
