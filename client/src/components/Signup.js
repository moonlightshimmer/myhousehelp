import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

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
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
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
      const response = await fetch('http://localhost:4000/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          role: formData.role,
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setMessage('Signup successful! You can now log in.');
        // Store token in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        // Clear form
        setFormData({
          email: '',
          password: '',
          confirmPassword: '',
          role: 'user',
          firstName: '',
          lastName: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zipCode: ''
        });
      } else {
        setMessage(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Network error:', error);
      setMessage('Network error, unable to submit form');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{ flex: 1, backgroundImage: 'url("/images/Indian_dishes.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div style={{ flex: 1, backgroundColor: '#FFD700', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', padding: '20px' }}>
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <h1 style={{ color: 'black', fontSize: '28px', alignSelf: 'center', marginBottom: '20px' }}>Welcome to FindMyCook!</h1>
          
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

          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              style={{ 
                flex: 1, 
                padding: '12px', 
                fontSize: '16px', 
                border: errors.firstName ? '2px solid #dc3545' : '1px solid #ddd',
                borderRadius: '5px'
              }}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              style={{ 
                flex: 1, 
                padding: '12px', 
                fontSize: '16px', 
                border: errors.lastName ? '2px solid #dc3545' : '1px solid #ddd',
                borderRadius: '5px'
              }}
            />
          </div>
          {errors.firstName && <span style={{ color: '#dc3545', fontSize: '14px' }}>{errors.firstName}</span>}
          {errors.lastName && <span style={{ color: '#dc3545', fontSize: '14px' }}>{errors.lastName}</span>}

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
            placeholder="Password (min 6 characters)"
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

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={{ 
              padding: '12px', 
              fontSize: '16px', 
              border: errors.confirmPassword ? '2px solid #dc3545' : '1px solid #ddd',
              borderRadius: '5px'
            }}
          />
          {errors.confirmPassword && <span style={{ color: '#dc3545', fontSize: '14px' }}>{errors.confirmPassword}</span>}

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (optional)"
            value={formData.phone}
            onChange={handleChange}
            style={{ 
              padding: '12px', 
              fontSize: '16px', 
              border: '1px solid #ddd',
              borderRadius: '5px'
            }}
          />

          <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0' }}>
            <button 
              type="button" 
              onClick={() => setFormData(prev => ({ ...prev, role: 'user' }))} 
              style={{ 
                flex: 1, 
                padding: '12px', 
                margin: '0 5px',
                border: formData.role === 'user' ? '2px solid #007bff' : '1px solid #ddd',
                borderRadius: '5px',
                backgroundColor: formData.role === 'user' ? '#007bff' : '#fff',
                color: formData.role === 'user' ? '#fff' : '#000',
                cursor: 'pointer'
              }}
            >
              I want a cook
            </button>
            <button 
              type="button" 
              onClick={() => setFormData(prev => ({ ...prev, role: 'cook' }))} 
              style={{ 
                flex: 1, 
                padding: '12px', 
                margin: '0 5px',
                border: formData.role === 'cook' ? '2px solid #007bff' : '1px solid #ddd',
                borderRadius: '5px',
                backgroundColor: formData.role === 'cook' ? '#007bff' : '#fff',
                color: formData.role === 'cook' ? '#fff' : '#000',
                cursor: 'pointer'
              }}
            >
              I am cooking meals
            </button>
          </div>

          <input
            type="text"
            name="address"
            placeholder="Address (optional)"
            value={formData.address}
            onChange={handleChange}
            style={{ 
              padding: '12px', 
              fontSize: '16px', 
              border: '1px solid #ddd',
              borderRadius: '5px'
            }}
          />

          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              name="city"
              placeholder="City (optional)"
              value={formData.city}
              onChange={handleChange}
              style={{ 
                flex: 1, 
                padding: '12px', 
                fontSize: '16px', 
                border: '1px solid #ddd',
                borderRadius: '5px'
              }}
            />
            <input
              type="text"
              name="state"
              placeholder="State (optional)"
              value={formData.state}
              onChange={handleChange}
              style={{ 
                flex: 1, 
                padding: '12px', 
                fontSize: '16px', 
                border: '1px solid #ddd',
                borderRadius: '5px'
              }}
            />
            <input
              type="text"
              name="zipCode"
              placeholder="ZIP Code (optional)"
              value={formData.zipCode}
              onChange={handleChange}
              style={{ 
                flex: 1, 
                padding: '12px', 
                fontSize: '16px', 
                border: '1px solid #ddd',
                borderRadius: '5px'
              }}
            />
          </div>

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
            {isLoading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
