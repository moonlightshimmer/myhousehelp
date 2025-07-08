import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      id: 1,
      title: 'Home Cooks/Chefs',
      icon: '👨‍🍳',
      description: 'Professional cooks who bring fresh ingredients and cook delicious meals in your kitchen. Perfect for daily meals or special occasions.',
      features: [
        'Fresh ingredients brought to your home',
        'Customized meal plans',
        'Hygienic cooking practices',
        'Flexible scheduling',
        'Special occasion catering'
      ],
      price: 'Starting from $25/hour'
    },
    {
      id: 2,
      title: 'Nannies & Childcare',
      icon: '👶',
      description: 'Experienced and caring nannies for your children. Background-checked professionals who understand family values.',
      features: [
        'Background-checked providers',
        'Experience with all age groups',
        'Educational activities',
        'Meal preparation for children',
        'Light housekeeping'
      ],
      price: 'Starting from $20/hour'
    },
    {
      id: 3,
      title: 'Puja Services',
      icon: '🕉️',
      description: 'Qualified religious service providers for ceremonies and religious events. Help maintain your cultural traditions at home.',
      features: [
        'Traditional ceremonies',
        'Religious guidance',
        'Cultural celebrations',
        'Home blessings',
        'Festival services'
      ],
      price: 'Starting from $50/ceremony'
    },
    {
      id: 4,
      title: 'Housekeeping & Cleaning',
      icon: '🧹',
      description: 'Professional cleaning services to keep your home spotless. Regular cleaning or deep cleaning services available.',
      features: [
        'Regular housekeeping',
        'Deep cleaning services',
        'Kitchen and bathroom focus',
        'Laundry and ironing',
        'Organizing services'
      ],
      price: 'Starting from $18/hour'
    },
    {
      id: 5,
      title: 'Tutoring & Education',
      icon: '📚',
      description: 'Qualified tutors for academic support and skill development. Help your children excel in their studies.',
      features: [
        'Academic subject tutoring',
        'Test preparation',
        'Language learning',
        'Homework assistance',
        'Skill development'
      ],
      price: 'Starting from $30/hour'
    },
    {
      id: 6,
      title: 'Yoga & Wellness',
      icon: '🧘‍♀️',
      description: 'Certified yoga instructors and wellness coaches for personal fitness and mental well-being.',
      features: [
        'Personal yoga sessions',
        'Meditation guidance',
        'Fitness coaching',
        'Stress management',
        'Wellness consultations'
      ],
      price: 'Starting from $35/hour'
    },
    {
      id: 7,
      title: 'Event Planning',
      icon: '🎉',
      description: 'Professional event planners for celebrations, parties, and special occasions. Make your events memorable.',
      features: [
        'Birthday celebrations',
        'Anniversary parties',
        'Cultural events',
        'Corporate gatherings',
        'Wedding assistance'
      ],
      price: 'Starting from $100/event'
    },
    {
      id: 8,
      title: 'Pet Care',
      icon: '🐕',
      description: 'Loving pet sitters and dog walkers for your furry family members. Professional care when you\'re away.',
      features: [
        'Pet sitting',
        'Dog walking',
        'Feeding and medication',
        'Playtime and exercise',
        'Grooming assistance'
      ],
      price: 'Starting from $15/hour'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Header Section */}
      <div style={{
        background: 'linear-gradient(135deg, #FFD700 0%, #f39c12 100%)',
        padding: '3rem 2rem',
        textAlign: 'center',
        color: '#2c3e50'
      }}>
        <h1 style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          fontWeight: 'bold'
        }}>
          Our Services
        </h1>
        <p style={{
          fontSize: '1.2rem',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Discover a wide range of professional home services designed to make your life easier. 
          All services are provided by verified professionals in the comfort of your home.
        </p>
      </div>

      {/* Services Grid */}
      <div style={{
        padding: '3rem 2rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {services.map((service) => (
            <div key={service.id} style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
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
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem',
                gap: '1rem'
              }}>
                <div style={{ fontSize: '3rem' }}>{service.icon}</div>
                <div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    color: '#2c3e50',
                    margin: '0 0 0.5rem 0'
                  }}>
                    {service.title}
                  </h3>
                  <div style={{
                    backgroundColor: '#FFD700',
                    color: '#2c3e50',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    display: 'inline-block'
                  }}>
                    {service.price}
                  </div>
                </div>
              </div>

              <p style={{
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {service.description}
              </p>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{
                  color: '#2c3e50',
                  fontSize: '1.1rem',
                  marginBottom: '1rem'
                }}>
                  What's Included:
                </h4>
                <ul style={{
                  color: '#666',
                  lineHeight: '1.8',
                  paddingLeft: '1.5rem',
                  margin: 0
                }}>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <Link to="/find-service" style={{
                backgroundColor: '#2c3e50',
                color: '#FFD700',
                padding: '0.8rem 1.5rem',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block',
                transition: 'all 0.3s ease',
                textAlign: 'center',
                width: '100%'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#2c3e50'}
              >
                Book This Service
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div style={{
        backgroundColor: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          color: '#2c3e50',
          marginBottom: '2rem'
        }}>
          Why Choose MyHouseHelp?
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏠</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#2c3e50' }}>
              Services at Home
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              All services are provided in the comfort of your own home. 
              No need to travel or make reservations.
            </p>
          </div>
          <div>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⭐</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#2c3e50' }}>
              Verified Providers
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Every service provider is background-checked and rated by previous customers.
            </p>
          </div>
          <div>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#2c3e50' }}>
              Transparent Pricing
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              No hidden fees or agency charges. Direct pricing with service providers.
            </p>
          </div>
          <div>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#2c3e50' }}>
              Community Trust
            </h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Built for your community, by your community. Trusted professionals who understand your needs.
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
          Find the perfect service provider for your needs today.
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link to="/find-service" style={{
            backgroundColor: '#FFD700',
            color: '#2c3e50',
            padding: '1rem 2rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Find a Service
          </Link>
          <Link to="/signup" style={{
            backgroundColor: '#e74c3c',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Become a Provider
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services; 