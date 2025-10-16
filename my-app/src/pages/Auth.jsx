import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./../css/new-menu.css"; // lightweight styling import (reuse existing styles)

const Auth = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login"); // 'login' or 'signup'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const minPasswordLength = 6;
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { signup, login } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    if (password.length < minPasswordLength) {
      setError(`Password must be at least ${minPasswordLength} characters`);
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }
    try {
      await signup(email, password, name || undefined);
      navigate("/");
    } catch (err) {
      console.error(err);
      const raw = err?.message || (typeof err === 'string' ? err : JSON.stringify(err));
      if (raw.includes('Invalid `userId`') || raw.includes('Parameter must contain at most')) {
        setError('Signup failed. Please try again.');
      } else {
        setError(raw);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    if (password.length < minPasswordLength) {
      setError(`Password must be at least ${minPasswordLength} characters`);
      setLoading(false);
      return;
    }
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.error(err);
      const raw = err?.message || (typeof err === 'string' ? err : JSON.stringify(err));
      if (raw.includes('Invalid `userId`') || raw.includes('Parameter must contain at most')) {
        setError('Login failed. Please try again.');
      } else {
        setError(raw);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="menu-hero">
        <div className="container">
          <h1>{mode === "login" ? "Login" : "Create an account"}</h1>
          <p>{mode === "login" ? "Access your account" : "Sign up to save preferences"}</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-form-section">
              <h2>{mode === "login" ? "Log in" : "Sign up"}</h2>
              <form onSubmit={mode === "login" ? handleLogin : handleSignup}>
                {mode === "signup" && (
                  <div className="form-group">
                    <label htmlFor="name">Full name</label>
                    <input
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-input"
                    />
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-input"
                      required
                    />
                    <button type="button" className="btn" onClick={() => setShowPassword((s) => !s)}>{showPassword ? 'Hide' : 'Show'}</button>
                  </div>
                  {password && password.length < minPasswordLength && (
                    <div style={{ color: 'red' }}>Password must be at least {minPasswordLength} characters</div>
                  )}
                </div>

                {mode === 'signup' && (
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="form-input"
                      required
                    />
                    {confirmPassword && confirmPassword !== password && (
                      <div style={{ color: 'red' }}>Passwords do not match</div>
                    )}
                  </div>
                )}

                {error && <div style={{ color: "red" }}>{error}</div>}

                <button className="btn btn-primary" type="submit" disabled={loading}>
                  {loading ? "Please wait..." : mode === "login" ? "Login" : "Sign up"}
                </button>
              </form>

              <div style={{ marginTop: 12 }}>
                {mode === "login" ? (
                  <p>
                    Don't have an account?{' '}
                    <button className="btn" onClick={() => setMode("signup")}>
                      Create one
                    </button>
                  </p>
                ) : (
                  <p>
                    Already have an account?{' '}
                    <button className="btn" onClick={() => setMode("login")}>
                      Log in
                    </button>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Auth;
