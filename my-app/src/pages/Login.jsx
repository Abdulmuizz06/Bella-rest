import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './../css/new-menu.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const minPasswordLength = 6;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
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
      navigate('/');
    } catch (err) {
      console.error(err);
      const raw = err?.message || (typeof err === 'string' ? err : JSON.stringify(err));
      if (raw.includes('Invalid `userId`') || raw.includes('Parameter must contain at most')) {
        setError('Login failed. Please try again.');
      } else {
        setError(raw || 'Login failed');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="menu-hero">
        <div className="container">
          <h1>Login</h1>
        </div>
      </section>
      <section className="contact-content">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-form-section">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <input className="form-input" type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="button" className="btn" onClick={() => setShowPassword((s) => !s)}>{showPassword ? 'Hide' : 'Show'}</button>
                  </div>
                  {password && password.length < minPasswordLength && (
                    <div style={{ color: 'red' }}>Password must be at least {minPasswordLength} characters</div>
                  )}
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <button className="btn btn-primary" type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
