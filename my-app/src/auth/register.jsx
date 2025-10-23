import { useState } from "react";
import { Link } from "react-router-dom";


const Register = () => {
  const [registerDetails, setRegisterDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleUpdate = (e) => {
    setRegisterDetails({ ...registerDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (registerDetails.password !== registerDetails.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      let fullName = `${registerDetails.firstName} ${registerDetails.lastName}`;
      await account.create({
        userId: id.unique(),
        email: registerDetails.email,
        password: registerDetails.password,
        name: fullName,
      });
      alert("Registration successful! Please login.");
      setRegisterDetails({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "100px auto", padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            className="form-input"
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleUpdate}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            className="form-input"
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleUpdate}
            required
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            className="form-input"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleUpdate}
            required
          />
        </div>
        <p>
          Already have an account?
          <Link to="/auth/login" className="nav-link">
            {" "}
            Login here.{" "}
          </Link>
        </p>
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
