import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #FFD700 0%, #f39c12 100%)',
        padding: '4rem 2rem',
        textAlign: 'center',
        color: '#2c3e50'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          marginBottom: '1rem',
          fontWeight: 'bold'
        }}>
          Find Your Trusted Home Help 🏠
        </h1>
        <p style={{
          fontSize: '1.3rem',
          marginBottom: '2rem',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Connect with reliable professionals in your community for cooking, 
          childcare, cleaning, and more. From daily needs to special occasions, 
          we've got you covered.
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link to="/find-service" style={{
            backgroundColor: '#2c3e50',
            color: '#FFD700',
            padding: '1rem 2rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            transition: 'all 0.3s ease',
            display: 'inline-block'
          }}
          onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Find Service
          </Link>
          <Link to="/signup" style={{
            backgroundColor: '#e74c3c',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            transition: 'all 0.3s ease',
            display: 'inline-block'
          }}
          onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Become a Provider
          </Link>
        </div>
      </div>

      {/* Services Preview Section */}
      <div style={{
        padding: '4rem 2rem',
        backgroundColor: '#f8f9fa'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '3rem',
          color: '#2c3e50'
        }}>
          Our Services
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <Link to="/find-service?service=home-cooks" style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center',
            textDecoration: 'none',
            color: 'inherit',
            transition: 'all 0.3s ease',
            display: 'block',
            height: '100%'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
          }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👨‍🍳</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>
              Home Cooks/Chefs
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Professional cooks who bring fresh ingredients and cook delicious meals 
              in your kitchen. Perfect for daily meals or special occasions.
            </p>
          </Link>

          <Link to="/find-service?service=nannies" style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center',
            textDecoration: 'none',
            color: 'inherit',
            transition: 'all 0.3s ease',
            display: 'block',
            height: '100%'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
          }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👶</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>
              Nannies & Childcare
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Experienced and caring nannies for your children. 
              Background-checked professionals who understand family values.
            </p>
          </Link>

          <Link to="/find-service?service=puja-services" style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center',
            textDecoration: 'none',
            color: 'inherit',
            transition: 'all 0.3s ease',
            display: 'block',
            height: '100%'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
          }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🕉️</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>
              Puja Services
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Qualified religious service providers for ceremonies and religious events. 
              Help maintain your cultural traditions at home.
            </p>
          </Link>

          <Link to="/find-service" style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center',
            textDecoration: 'none',
            color: 'inherit',
            transition: 'all 0.3s ease',
            display: 'block',
            height: '100%'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
          }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✨</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>
              And More
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Yoga instructors, event planning, housekeeping, tutoring, pet care, 
              and many more services. Explore our full range of home help options.
            </p>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div style={{
        padding: '4rem 2rem',
        backgroundColor: 'white'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '3rem',
          color: '#2c3e50'
        }}>
          Why Choose MyHouseHelp?
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏠</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>
              Services at Home
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              All services are provided in the comfort of your own home. 
              No need to travel or make reservations - convenience at its best.
            </p>
          </div>

          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⭐</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>
              Verified & Rated
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Every service provider is background-checked and rated by previous customers. 
              Read reviews and choose with confidence.
            </p>
          </div>

          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2c3e50' }}>
              Community Trust
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Built for your community, by your community. 
              Connect with trusted professionals who understand your needs and values.
            </p>
          </div>
        </div>
      </div>

      {/* Workflow Section - Placeholder for Future */}
      <div style={{
        padding: '4rem 2rem',
        backgroundColor: '#f8f9fa'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '3rem',
          color: '#2c3e50'
        }}>
          How It Works
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Customer Workflow - Placeholder */}
          <div style={{
            backgroundColor: 'white',
            padding: '3rem',
            borderRadius: '15px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center',
            border: '2px dashed #ddd'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👥</div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2c3e50' }}>
              Customer Workflow
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6', fontStyle: 'italic' }}>
              Coming soon: Visual workflow showing how customers find and book services
            </p>
          </div>

          {/* Provider Workflow - Placeholder */}
          <div style={{
            backgroundColor: 'white',
            padding: '3rem',
            borderRadius: '15px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center',
            border: '2px dashed #ddd'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👨‍💼</div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2c3e50' }}>
              Provider Workflow
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6', fontStyle: 'italic' }}>
              Coming soon: Visual workflow showing how providers set up and manage their services
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div style={{
        padding: '4rem 2rem',
        backgroundColor: 'white'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '3rem',
          color: '#2c3e50'
        }}>
          Simple Steps to Get Started
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#FFD700',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              margin: '0 auto 1rem',
              color: '#2c3e50',
              fontWeight: 'bold'
            }}>
              1
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#2c3e50' }}>
              Search & Choose
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Browse available service providers in your area, read reviews, and select your preferred professional.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#FFD700',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              margin: '0 auto 1rem',
              color: '#2c3e50',
              fontWeight: 'bold'
            }}>
              2
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#2c3e50' }}>
              Book & Connect
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Schedule your service and discuss requirements directly with your chosen provider.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#FFD700',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              margin: '0 auto 1rem',
              color: '#2c3e50',
              fontWeight: 'bold'
            }}>
              3
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#2c3e50' }}>
              Enjoy & Rate
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Enjoy your service and leave a review to help other community members.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        backgroundColor: '#2c3e50',
        padding: '4rem 2rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '1rem'
        }}>
          Ready to Get Started?
        </h2>
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '2rem',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Join thousands of satisfied families who have discovered the convenience of trusted home services.
        </p>
        <Link to="/signup" style={{
          backgroundColor: '#FFD700',
          color: '#2c3e50',
          padding: '1rem 2rem',
          borderRadius: '50px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          transition: 'all 0.3s ease',
          display: 'inline-block'
        }}
        onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
        onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
        >
          Sign Up Now
        </Link>
      </div>
    </div>
  );
}

export default Home; 