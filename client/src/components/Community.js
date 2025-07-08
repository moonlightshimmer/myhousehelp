import React from 'react';
import { Link } from 'react-router-dom';

function Community() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      rating: 5,
      content: 'MyHouseHelp has been a game-changer for our family. We found an amazing nanny who understands our values and takes excellent care of our children. The platform is so easy to use!',
      service: 'Nanny Services',
      image: '👩‍👶'
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Service Provider',
      rating: 5,
      content: 'As a home cook, MyHouseHelp has helped me connect with wonderful families in my community. The platform is professional and the families are always respectful and appreciative.',
      service: 'Home Cooking',
      image: '👩‍🍳'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Homeowner',
      rating: 5,
      content: 'We needed help with housekeeping and found a fantastic provider through MyHouseHelp. The service was excellent and the provider was very professional and trustworthy.',
      service: 'Housekeeping',
      image: '👨‍💼'
    },
    {
      id: 4,
      name: 'Lisa Thompson',
      role: 'Service Provider',
      rating: 5,
      content: 'I love being part of the MyHouseHelp community. The families are wonderful and the platform makes it easy to manage bookings and communicate with clients.',
      service: 'Yoga Instruction',
      image: '🧘‍♀️'
    },
    {
      id: 5,
      name: 'David Rodriguez',
      role: 'Homeowner',
      rating: 5,
      content: 'MyHouseHelp helped us find a great tutor for our children. The provider was qualified, patient, and really helped improve their grades. Highly recommended!',
      service: 'Tutoring',
      image: '👨‍🏫'
    },
    {
      id: 6,
      name: 'Jennifer Smith',
      role: 'Service Provider',
      rating: 5,
      content: 'Being a housekeeper through MyHouseHelp has been rewarding. The families are kind and the platform ensures fair compensation and clear communication.',
      service: 'Housekeeping',
      image: '🧹'
    }
  ];

  const communityStats = [
    { number: '5000+', label: 'Happy Families', icon: '🏠' },
    { number: '1000+', label: 'Service Providers', icon: '👥' },
    { number: '50,000+', label: 'Services Completed', icon: '✅' },
    { number: '4.8', label: 'Average Rating', icon: '⭐' }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Community Meet & Greet',
      date: 'December 15, 2024',
      time: '2:00 PM - 4:00 PM',
      location: 'Community Center',
      description: 'Meet other families and service providers in your area. Network and share experiences.',
      type: 'Networking'
    },
    {
      id: 2,
      title: 'Service Provider Workshop',
      date: 'December 20, 2024',
      time: '10:00 AM - 12:00 PM',
      location: 'Online',
      description: 'Learn best practices for providing excellent service and building your client base.',
      type: 'Training'
    },
    {
      id: 3,
      title: 'Family Safety Seminar',
      date: 'January 5, 2025',
      time: '3:00 PM - 5:00 PM',
      location: 'Local Library',
      description: 'Tips and guidelines for ensuring safety when hiring home service providers.',
      type: 'Education'
    }
  ];

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

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
          Our Community
        </h1>
        <p style={{
          fontSize: '1.2rem',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Join thousands of families and service providers who trust MyHouseHelp. 
          Read stories, share experiences, and connect with your community.
        </p>
      </div>

      {/* Community Stats */}
      <div style={{
        padding: '3rem 2rem',
        backgroundColor: 'white'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {communityStats.map((stat, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: '2rem',
              backgroundColor: '#f8f9fa',
              borderRadius: '15px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{stat.icon}</div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#2c3e50',
                marginBottom: '0.5rem'
              }}>
                {stat.number}
              </div>
              <div style={{
                color: '#666',
                fontSize: '1.1rem'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div style={{
        padding: '4rem 2rem',
        backgroundColor: '#f8f9fa'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          color: '#2c3e50',
          marginBottom: '3rem'
        }}>
          What Our Community Says
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem',
                gap: '1rem'
              }}>
                <div style={{ fontSize: '3rem' }}>{testimonial.image}</div>
                <div>
                  <h4 style={{
                    fontSize: '1.2rem',
                    color: '#2c3e50',
                    margin: '0 0 0.3rem 0'
                  }}>
                    {testimonial.name}
                  </h4>
                  <p style={{
                    color: '#666',
                    fontSize: '0.9rem',
                    margin: '0 0 0.3rem 0'
                  }}>
                    {testimonial.role}
                  </p>
                  <div style={{
                    backgroundColor: '#FFD700',
                    color: '#2c3e50',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    display: 'inline-block'
                  }}>
                    {testimonial.service}
                  </div>
                </div>
              </div>

              <div style={{
                fontSize: '1.2rem',
                color: '#FFD700',
                marginBottom: '1rem'
              }}>
                {renderStars(testimonial.rating)}
              </div>

              <p style={{
                color: '#666',
                lineHeight: '1.6',
                fontStyle: 'italic'
              }}>
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div style={{
        padding: '4rem 2rem',
        backgroundColor: 'white'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          color: '#2c3e50',
          marginBottom: '3rem'
        }}>
          Upcoming Community Events
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {upcomingEvents.map(event => (
            <div key={event.id} style={{
              backgroundColor: '#f8f9fa',
              padding: '2rem',
              borderRadius: '15px',
              border: '2px solid #e9ecef',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  color: '#2c3e50',
                  margin: '0 0 0.5rem 0'
                }}>
                  {event.title}
                </h3>
                <span style={{
                  backgroundColor: '#FFD700',
                  color: '#2c3e50',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  {event.type}
                </span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.5rem',
                color: '#666'
              }}>
                <span>📅</span>
                <span>{event.date}</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.5rem',
                color: '#666'
              }}>
                <span>🕒</span>
                <span>{event.time}</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem',
                color: '#666'
              }}>
                <span>📍</span>
                <span>{event.location}</span>
              </div>

              <p style={{
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {event.description}
              </p>

              <button style={{
                backgroundColor: '#2c3e50',
                color: '#FFD700',
                padding: '0.8rem 1.5rem',
                borderRadius: '25px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#2c3e50'}
              >
                Register for Event
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Community Guidelines Section */}
      <div style={{
        padding: '4rem 2rem',
        backgroundColor: '#f8f9fa'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          color: '#2c3e50',
          marginBottom: '3rem'
        }}>
          Community Guidelines
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
            <h3 style={{
              fontSize: '1.3rem',
              color: '#2c3e50',
              marginBottom: '1rem'
            }}>
              Respect & Kindness
            </h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6'
            }}>
              Treat everyone with respect and kindness. We're building a community based on trust and mutual understanding.
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
            <h3 style={{
              fontSize: '1.3rem',
              color: '#2c3e50',
              marginBottom: '1rem'
            }}>
              Quality Service
            </h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6'
            }}>
              Provide and expect high-quality service. Clear communication and professional conduct are essential.
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
            <h3 style={{
              fontSize: '1.3rem',
              color: '#2c3e50',
              marginBottom: '1rem'
            }}>
              Safety First
            </h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6'
            }}>
              Prioritize safety in all interactions. Follow our safety guidelines and report any concerns immediately.
            </p>
          </div>
        </div>
      </div>

      {/* Join Community CTA */}
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
          Join Our Growing Community
        </h2>
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '2rem',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Whether you're looking for trusted home services or want to provide them, 
          MyHouseHelp connects you with your community.
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
            Find Services
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

export default Community; 