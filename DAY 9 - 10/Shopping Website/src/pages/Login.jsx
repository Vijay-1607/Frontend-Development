import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useShop } from '../hooks/useShop';
import { LogIn, Mail, Lock, ShieldAlert } from 'lucide-react';
import './Auth.css';

export const Login = () => {
  const { login } = useShop();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // --- States ---
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Read where to redirect after login (e.g. cart)
  const redirectPath = searchParams.get('redirect') || 'profile';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate(`/${redirectPath}`);
    } catch (err) {
      setError(err.message || 'Login failed. Please check credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page container">
      <div className="auth-card glass-card">
        <div className="auth-header">
          <div className="auth-icon-circle">
            <LogIn size={24} />
          </div>
          <h2>Welcome Back</h2>
          <p>Login to access your orders, cart, and profile</p>
        </div>

        {error && (
          <div className="auth-error-box">
            <ShieldAlert size={16} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label className="form-label" htmlFor="email-input">Email Address</label>
            <div className="input-with-icon">
              <Mail size={18} className="input-icon" />
              <input
                id="email-input"
                type="email"
                required
                placeholder="user@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input field-padding"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password-input">Password</label>
            <div className="input-with-icon">
              <Lock size={18} className="input-icon" />
              <input
                id="password-input"
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input field-padding"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="btn btn-primary w-full auth-submit-btn"
          >
            {loading ? <div className="spinner-mini"></div> : "Log In"}
          </button>
        </form>

        <div className="auth-demo-hint glass">
          <h5>Testing Credentials:</h5>
          <p>Email: <code>user@example.com</code></p>
          <p>Password: <code>password123</code></p>
        </div>

        <div className="auth-footer-prompt">
          Don't have an account? <Link to="/signup" className="auth-link">Sign Up Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
