import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:4000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setMessage('Login successful! Redirecting...');
        // Store token and user data
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        // Redirect to home page after a short delay
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        setMessage(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Network error:', error);
      setMessage('Network error, unable to login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{ flex: 1, backgroundImage: 'url("/images/Indian_dishes.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div style={{ flex: 1, backgroundColor: '#FFD700', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', padding: '20px' }}>
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h1 style={{ color: 'black', fontSize: '28px', alignSelf: 'center', marginBottom: '20px' }}>Welcome Back!</h1>
          
          {message && (
            <div style={{ 
              padding: '10px', 
              borderRadius: '5px', 
              backgroundColor: message.includes('successful') ? '#d4edda' : '#f8d7da',
              color: message.includes('successful') ? '#155724' : '#721c24',
              textAlign: 'center'
            }}>
              {message}
            </div>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{ 
              padding: '12px', 
              fontSize: '16px', 
              border: errors.email ? '2px solid #dc3545' : '1px solid #ddd',
              borderRadius: '5px'
            }}
          />
          {errors.email && <span style={{ color: '#dc3545', fontSize: '14px' }}>{errors.email}</span>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={{ 
              padding: '12px', 
              fontSize: '16px', 
              border: errors.password ? '2px solid #dc3545' : '1px solid #ddd',
              borderRadius: '5px'
            }}
          />
          {errors.password && <span style={{ color: '#dc3545', fontSize: '14px' }}>{errors.password}</span>}

          <button 
            type="submit" 
            disabled={isLoading}
            style={{ 
              padding: '15px 0', 
              fontSize: '18px', 
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              opacity: isLoading ? 0.7 : 1
            }}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p style={{ color: '#666', marginBottom: '10px' }}>
              Don't have an account?{' '}
              <Link to="/signup" style={{ 
                color: '#007bff', 
                textDecoration: 'none',
                fontWeight: 'bold'
              }}>
                Sign up here
              </Link>
            </p>
            <Link to="/" style={{ 
              color: '#666', 
              textDecoration: 'none',
              fontSize: '14px'
            }}>
              ← Back to Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login; 