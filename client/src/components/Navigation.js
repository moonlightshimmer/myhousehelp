import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {/* Logo/Brand */}
      <Link to="/" style={{
        textDecoration: 'none',
        color: '#FFD700',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        🏠 MyHouseHelp
      </Link>

      {/* Navigation Links */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center'
      }}>
        <Link to="/" style={{
          textDecoration: 'none',
          color: isActive('/') ? '#FFD700' : '#ecf0f1',
          fontWeight: isActive('/') ? 'bold' : 'normal',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
          transition: 'all 0.3s ease'
        }}>
          Home
        </Link>
        
        <Link to="/find-service" style={{
          textDecoration: 'none',
          color: isActive('/find-service') ? '#FFD700' : '#ecf0f1',
          fontWeight: isActive('/find-service') ? 'bold' : 'normal',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
          transition: 'all 0.3s ease'
        }}>
          Find Service
        </Link>
        
        <Link to="/services" style={{
          textDecoration: 'none',
          color: isActive('/services') ? '#FFD700' : '#ecf0f1',
          fontWeight: isActive('/services') ? 'bold' : 'normal',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
          transition: 'all 0.3s ease'
        }}>
          Services
        </Link>
        
        <Link to="/community" style={{
          textDecoration: 'none',
          color: isActive('/community') ? '#FFD700' : '#ecf0f1',
          fontWeight: isActive('/community') ? 'bold' : 'normal',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
          transition: 'all 0.3s ease'
        }}>
          Community
        </Link>
      </div>

      {/* Auth Section */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
      }}>
        {token && user ? (
          <>
            <span style={{
              color: '#ecf0f1',
              fontSize: '0.9rem'
            }}>
              Welcome, {user.first_name || user.email}!
            </span>
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: '#e74c3c',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                transition: 'background-color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={{
              textDecoration: 'none',
              color: isActive('/login') ? '#FFD700' : '#ecf0f1',
              fontWeight: isActive('/login') ? 'bold' : 'normal',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              transition: 'all 0.3s ease'
            }}>
              Login
            </Link>
            <Link to="/signup" style={{
              textDecoration: 'none',
              backgroundColor: '#FFD700',
              color: '#2c3e50',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#f39c12'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#FFD700'}
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navigation; 