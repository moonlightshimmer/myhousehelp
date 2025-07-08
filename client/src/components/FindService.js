import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function FindService() {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const services = [
    { id: 'home-cooks', name: 'Home Cooks/Chefs', icon: '👨‍🍳', description: 'Professional cooking services' },
    { id: 'nannies', name: 'Nannies & Childcare', icon: '👶', description: 'Childcare and nanny services' },
    { id: 'puja-services', name: 'Puja Services', icon: '🕉️', description: 'Religious and cultural services' },
    { id: 'housekeeping', name: 'Housekeeping', icon: '🧹', description: 'Cleaning and maintenance' },
    { id: 'tutoring', name: 'Tutoring', icon: '📚', description: 'Educational support' },
    { id: 'yoga', name: 'Yoga & Wellness', icon: '🧘‍♀️', description: 'Fitness and wellness' },
    { id: 'event-planning', name: 'Event Planning', icon: '🎉', description: 'Event organization' },
    { id: 'pet-care', name: 'Pet Care', icon: '🐕', description: 'Pet sitting and care' }
  ];

  // Handle URL parameters to auto-select service
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const serviceParam = urlParams.get('service');
    
    if (serviceParam) {
      const service = services.find(s => s.id === serviceParam);
      if (service) {
        setSelectedService(service.name);
      }
    }
  }, [location.search]);

  // Mock search results - in a real app, this would come from an API
  const mockProviders = [
    {
      id: 1,
      name: 'Sarah Johnson',
      service: 'Home Cooks/Chefs',
      rating: 4.8,
      reviews: 127,
      experience: '5 years',
      hourlyRate: 25,
      image: '👩‍🍳',
      description: 'Professional chef with experience in various cuisines. Specializes in healthy meals and special dietary requirements.',
      specialties: ['Healthy Cooking', 'Vegetarian', 'Gluten-Free'],
      available: ['Mon', 'Wed', 'Fri', 'Sat']
    },
    {
      id: 2,
      name: 'Maria Rodriguez',
      service: 'Nannies & Childcare',
      rating: 4.9,
      reviews: 89,
      experience: '8 years',
      hourlyRate: 22,
      image: '👩‍👶',
      description: 'Experienced nanny with background in early childhood education. Patient and caring with children of all ages.',
      specialties: ['Infant Care', 'Educational Activities', 'Meal Prep'],
      available: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    },
    {
      id: 3,
      name: 'Priya Patel',
      service: 'Puja Services',
      rating: 4.7,
      reviews: 156,
      experience: '12 years',
      hourlyRate: 50,
      image: '🙏',
      description: 'Qualified religious service provider with deep knowledge of traditional ceremonies and cultural practices.',
      specialties: ['Traditional Ceremonies', 'Festival Services', 'Home Blessings'],
      available: ['Sat', 'Sun', 'Holidays']
    },
    {
      id: 4,
      name: 'Jennifer Smith',
      service: 'Housekeeping',
      rating: 4.6,
      reviews: 203,
      experience: '6 years',
      hourlyRate: 18,
      image: '🧹',
      description: 'Professional housekeeper with attention to detail. Provides thorough cleaning and organizing services.',
      specialties: ['Deep Cleaning', 'Organizing', 'Laundry'],
      available: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    },
    {
      id: 5,
      name: 'David Chen',
      service: 'Tutoring',
      rating: 4.8,
      reviews: 94,
      experience: '7 years',
      hourlyRate: 30,
      image: '👨‍🏫',
      description: 'Certified teacher with expertise in mathematics and science. Patient and effective teaching methods.',
      specialties: ['Math', 'Science', 'Test Prep'],
      available: ['Mon', 'Wed', 'Fri', 'Sat', 'Sun']
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      service: 'Yoga & Wellness',
      rating: 4.9,
      reviews: 67,
      experience: '10 years',
      hourlyRate: 35,
      image: '🧘‍♀️',
      description: 'Certified yoga instructor specializing in stress relief and mindfulness. Personalized sessions for all levels.',
      specialties: ['Stress Relief', 'Meditation', 'Fitness'],
      available: ['Mon', 'Tue', 'Thu', 'Sat']
    }
  ];

  const handleServiceSelect = (service) => {
    setSelectedService(service.name);
    setSearchResults([]); // Clear previous results when switching services
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!selectedService || !userLocation) {
      alert('Please select a service and enter your location');
      return;
    }

    setIsSearching(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const filteredResults = mockProviders.filter(provider => 
        provider.service === selectedService
      );
      setSearchResults(filteredResults);
      setIsSearching(false);
    }, 1000);
  };

  const handleBookNow = (providerId) => {
    // In a real app, this would redirect to booking page or open booking modal
    alert(`Booking request sent for provider ID: ${providerId}`);
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
          Find Your Trusted Home Help
        </h1>
        <p style={{
          fontSize: '1.2rem',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Search for verified service providers in your area. 
          Read reviews, compare rates, and book with confidence.
        </p>
      </div>

      {/* Service Tabs Section */}
      <div style={{
        padding: '2rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '2rem',
          color: '#2c3e50',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          Select a Service
        </h2>
        
        {/* Service Tabs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '3rem'
        }}>
          {services.map(service => (
            <button
              key={service.id}
              onClick={() => handleServiceSelect(service)}
              style={{
                backgroundColor: selectedService === service.name ? '#FFD700' : 'white',
                color: selectedService === service.name ? '#2c3e50' : '#666',
                border: selectedService === service.name ? '2px solid #f39c12' : '2px solid #e9ecef',
                borderRadius: '15px',
                padding: '1.5rem 2rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                minWidth: '200px',
                textAlign: 'center',
                boxShadow: selectedService === service.name ? '0 4px 8px rgba(0,0,0,0.2)' : '0 2px 4px rgba(0,0,0,0.1)',
                transform: selectedService === service.name ? 'translateY(-2px)' : 'translateY(0)'
              }}
              onMouseOver={(e) => {
                if (selectedService !== service.name) {
                  e.target.style.backgroundColor = '#f8f9fa';
                  e.target.style.transform = 'translateY(-1px)';
                }
              }}
              onMouseOut={(e) => {
                if (selectedService !== service.name) {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                {service.icon}
              </div>
              <div style={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                marginBottom: '0.3rem'
              }}>
                {service.name}
              </div>
              <div style={{
                fontSize: '0.9rem',
                opacity: 0.8
              }}>
                {service.description}
              </div>
            </button>
          ))}
        </div>

        {/* Search Form - Only show when a service is selected */}
        {selectedService && (
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            marginBottom: '3rem'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              color: '#2c3e50',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              Search for {selectedService}
            </h3>
            
            <form onSubmit={handleSearch} style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              alignItems: 'end'
            }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#2c3e50',
                  fontWeight: 'bold'
                }}>
                  Location
                </label>
                <input
                  type="text"
                  value={userLocation}
                  onChange={(e) => setUserLocation(e.target.value)}
                  placeholder="Enter your city or zip code"
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    fontSize: '1rem'
                  }}
                  required
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#2c3e50',
                  fontWeight: 'bold'
                }}>
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#2c3e50',
                  fontWeight: 'bold'
                }}>
                  Time
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSearching}
                style={{
                  backgroundColor: '#2c3e50',
                  color: '#FFD700',
                  padding: '0.8rem 2rem',
                  borderRadius: '25px',
                  border: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: isSearching ? 'not-allowed' : 'pointer',
                  opacity: isSearching ? 0.7 : 1,
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => !isSearching && (e.target.style.backgroundColor = '#34495e')}
                onMouseOut={(e) => !isSearching && (e.target.style.backgroundColor = '#2c3e50')}
              >
                {isSearching ? 'Searching...' : 'Search Providers'}
              </button>
            </form>
          </div>
        )}

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div>
            <h3 style={{
              fontSize: '1.8rem',
              color: '#2c3e50',
              marginBottom: '2rem'
            }}>
              Available Providers ({searchResults.length})
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              {searchResults.map(provider => (
                <div key={provider.id} style={{
                  backgroundColor: 'white',
                  borderRadius: '15px',
                  padding: '2rem',
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
                    <div style={{ fontSize: '3rem' }}>{provider.image}</div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{
                        fontSize: '1.3rem',
                        color: '#2c3e50',
                        margin: '0 0 0.5rem 0'
                      }}>
                        {provider.name}
                      </h4>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '0.5rem'
                      }}>
                        <span style={{
                          backgroundColor: '#FFD700',
                          color: '#2c3e50',
                          padding: '0.2rem 0.5rem',
                          borderRadius: '12px',
                          fontSize: '0.8rem',
                          fontWeight: 'bold'
                        }}>
                          ⭐ {provider.rating} ({provider.reviews} reviews)
                        </span>
                        <span style={{
                          color: '#666',
                          fontSize: '0.9rem'
                        }}>
                          {provider.experience} experience
                        </span>
                      </div>
                      <div style={{
                        color: '#2c3e50',
                        fontWeight: 'bold',
                        fontSize: '1.1rem'
                      }}>
                        ${provider.hourlyRate}/hour
                      </div>
                    </div>
                  </div>

                  <p style={{
                    color: '#666',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem'
                  }}>
                    {provider.description}
                  </p>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{
                      color: '#2c3e50',
                      fontSize: '1rem',
                      marginBottom: '0.5rem'
                    }}>
                      Specialties:
                    </h5>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}>
                      {provider.specialties.map((specialty, index) => (
                        <span key={index} style={{
                          backgroundColor: '#f8f9fa',
                          color: '#2c3e50',
                          padding: '0.3rem 0.8rem',
                          borderRadius: '15px',
                          fontSize: '0.8rem'
                        }}>
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{
                      color: '#2c3e50',
                      fontSize: '1rem',
                      marginBottom: '0.5rem'
                    }}>
                      Available:
                    </h5>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.3rem'
                    }}>
                      {provider.available.map((day, index) => (
                        <span key={index} style={{
                          backgroundColor: '#d4edda',
                          color: '#155724',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '10px',
                          fontSize: '0.8rem',
                          fontWeight: 'bold'
                        }}>
                          {day}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleBookNow(provider.id)}
                    style={{
                      backgroundColor: '#FFD700',
                      color: '#2c3e50',
                      padding: '0.8rem 1.5rem',
                      borderRadius: '25px',
                      border: 'none',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      width: '100%',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#f39c12'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#FFD700'}
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>

            {/* Others Available This Week Section */}
            <div style={{ marginTop: '4rem' }}>
              <h3 style={{
                fontSize: '1.8rem',
                color: '#2c3e50',
                marginBottom: '2rem'
              }}>
                Others Available This Week
              </h3>
              <p style={{
                color: '#666',
                marginBottom: '2rem',
                fontSize: '1.1rem'
              }}>
                Here are other providers available in your area this week with different dates and times:
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem'
              }}>
                {/* Mock data for other providers available this week */}
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  border: '2px solid #e8f5e8'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1rem',
                    gap: '0.8rem'
                  }}>
                    <div style={{ fontSize: '2rem' }}>👨‍🍳</div>
                    <div>
                      <h4 style={{
                        fontSize: '1.1rem',
                        color: '#2c3e50',
                        margin: '0 0 0.3rem 0'
                      }}>
                        Michael Chen
                      </h4>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <span style={{
                          backgroundColor: '#FFD700',
                          color: '#2c3e50',
                          padding: '0.1rem 0.4rem',
                          borderRadius: '8px',
                          fontSize: '0.7rem',
                          fontWeight: 'bold'
                        }}>
                          ⭐ 4.7 (89 reviews)
                        </span>
                        <span style={{
                          color: '#666',
                          fontSize: '0.8rem'
                        }}>
                          $28/hour
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <h5 style={{
                      color: '#2c3e50',
                      fontSize: '0.9rem',
                      marginBottom: '0.5rem'
                    }}>
                      Available This Week:
                    </h5>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.3rem'
                    }}>
                      <span style={{
                        backgroundColor: '#fff3cd',
                        color: '#856404',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                      }}>
                        📅 Tuesday, Dec 19 - 2:00 PM to 6:00 PM
                      </span>
                      <span style={{
                        backgroundColor: '#fff3cd',
                        color: '#856404',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                      }}>
                        📅 Thursday, Dec 21 - 5:00 PM to 9:00 PM
                      </span>
                      <span style={{
                        backgroundColor: '#fff3cd',
                        color: '#856404',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                      }}>
                        📅 Saturday, Dec 23 - 12:00 PM to 4:00 PM
                      </span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleBookNow('michael-chen')}
                    style={{
                      backgroundColor: '#28a745',
                      color: 'white',
                      padding: '0.6rem 1rem',
                      borderRadius: '20px',
                      border: 'none',
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      width: '100%',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
                  >
                    Book This Time
                  </button>
                </div>

                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  border: '2px solid #e8f5e8'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1rem',
                    gap: '0.8rem'
                  }}>
                    <div style={{ fontSize: '2rem' }}>👩‍🍳</div>
                    <div>
                      <h4 style={{
                        fontSize: '1.1rem',
                        color: '#2c3e50',
                        margin: '0 0 0.3rem 0'
                      }}>
                        Lisa Anderson
                      </h4>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <span style={{
                          backgroundColor: '#FFD700',
                          color: '#2c3e50',
                          padding: '0.1rem 0.4rem',
                          borderRadius: '8px',
                          fontSize: '0.7rem',
                          fontWeight: 'bold'
                        }}>
                          ⭐ 4.9 (156 reviews)
                        </span>
                        <span style={{
                          color: '#666',
                          fontSize: '0.8rem'
                        }}>
                          $32/hour
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <h5 style={{
                      color: '#2c3e50',
                      fontSize: '0.9rem',
                      marginBottom: '0.5rem'
                    }}>
                      Available This Week:
                    </h5>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.3rem'
                    }}>
                      <span style={{
                        backgroundColor: '#fff3cd',
                        color: '#856404',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                      }}>
                        📅 Monday, Dec 18 - 6:00 PM to 10:00 PM
                      </span>
                      <span style={{
                        backgroundColor: '#fff3cd',
                        color: '#856404',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                      }}>
                        📅 Wednesday, Dec 20 - 4:00 PM to 8:00 PM
                      </span>
                      <span style={{
                        backgroundColor: '#fff3cd',
                        color: '#856404',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                      }}>
                        📅 Friday, Dec 22 - 3:00 PM to 7:00 PM
                      </span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleBookNow('lisa-anderson')}
                    style={{
                      backgroundColor: '#28a745',
                      color: 'white',
                      padding: '0.6rem 1rem',
                      borderRadius: '20px',
                      border: 'none',
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      width: '100%',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
                  >
                    Book This Time
                  </button>
                </div>

                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  border: '2px solid #e8f5e8'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1rem',
                    gap: '0.8rem'
                  }}>
                    <div style={{ fontSize: '2rem' }}>👨‍🍳</div>
                    <div>
                      <h4 style={{
                        fontSize: '1.1rem',
                        color: '#2c3e50',
                        margin: '0 0 0.3rem 0'
                      }}>
                        Carlos Rodriguez
                      </h4>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <span style={{
                          backgroundColor: '#FFD700',
                          color: '#2c3e50',
                          padding: '0.1rem 0.4rem',
                          borderRadius: '8px',
                          fontSize: '0.7rem',
                          fontWeight: 'bold'
                        }}>
                          ⭐ 4.6 (73 reviews)
                        </span>
                        <span style={{
                          color: '#666',
                          fontSize: '0.8rem'
                        }}>
                          $26/hour
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <h5 style={{
                      color: '#2c3e50',
                      fontSize: '0.9rem',
                      marginBottom: '0.5rem'
                    }}>
                      Available This Week:
                    </h5>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.3rem'
                    }}>
                      <span style={{
                        backgroundColor: '#fff3cd',
                        color: '#856404',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                      }}>
                        📅 Monday, Dec 18 - 11:00 AM to 3:00 PM
                      </span>
                      <span style={{
                        backgroundColor: '#fff3cd',
                        color: '#856404',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                      }}>
                        📅 Thursday, Dec 21 - 1:00 PM to 5:00 PM
                      </span>
                      <span style={{
                        backgroundColor: '#fff3cd',
                        color: '#856404',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                      }}>
                        📅 Sunday, Dec 24 - 10:00 AM to 2:00 PM
                      </span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleBookNow('carlos-rodriguez')}
                    style={{
                      backgroundColor: '#28a745',
                      color: 'white',
                      padding: '0.6rem 1rem',
                      borderRadius: '20px',
                      border: 'none',
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      width: '100%',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
                  >
                    Book This Time
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* No Results Message */}
        {searchResults.length === 0 && !isSearching && selectedService && (
          <div style={{
            textAlign: 'center',
            padding: '3rem',
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
            <h3 style={{
              fontSize: '1.5rem',
              color: '#2c3e50',
              marginBottom: '1rem'
            }}>
              No providers found yet
            </h3>
            <p style={{
              color: '#666',
              marginBottom: '2rem'
            }}>
              Try adjusting your search criteria or check back later for new providers in your area.
            </p>
            <Link to="/signup" style={{
              backgroundColor: '#2c3e50',
              color: '#FFD700',
              padding: '1rem 2rem',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-block'
            }}>
              Become a Provider
            </Link>
          </div>
        )}
      </div>

      {/* How It Works Section */}
      <div style={{
        backgroundColor: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          color: '#2c3e50',
          marginBottom: '3rem'
        }}>
          How MyHouseHelp Works
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div>
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

          <div>
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

          <div>
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
    </div>
  );
}

export default FindService;
