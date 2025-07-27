# Helperly 🏠

A platform connecting Indian families with trusted service providers for home services, childcare, religious services, and more. MyHouseHelp makes it easy to find qualified professionals who understand your culture and values, with advanced location-based filtering and smart matching.

## 🚀 Features

- **User Registration & Authentication**: Secure signup/login for both customers and service providers
- **Role-based Profiles**: Separate interfaces for customers and service providers
- **Advanced Service Discovery**: Find nearby providers with location-based filtering and distance calculation
- **Smart Location Matching**: Automatic zipcode-to-coordinates conversion for accurate distance calculations
- **Real-time Distance Sorting**: Providers sorted by proximity to your location
- **Availability Filtering**: Filter providers by day and time availability
- **Booking System**: Schedule services with your preferred provider
- **Review System**: Rate and review service experiences
- **Community Features**: Connect with other families and service providers
- **Cultural Focus**: Services designed specifically for the Indian community

## 🛠️ Tech Stack

### Backend
- **Node.js** with Express.js
- **PostgreSQL** database with location-based indexes
- **JWT** for authentication
- **bcryptjs** for password hashing
- **express-validator** for input validation
- **axios** for external API calls
- **Haversine formula** for distance calculations

### Frontend
- **React.js** with functional components and hooks
- **CSS-in-JS** for styling
- **React Router** for navigation
- **Fetch API** for HTTP requests
- **Geolocation API** for user location detection
- **Responsive design** for mobile and desktop

### External Services
- **zippopotam.us API** for zipcode-to-coordinates conversion
- **Hardcoded zipcode database** for common Bay Area locations

## 📋 Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd myhousehelp
```

### 2. Install Dependencies
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

### 3. Database Setup
```bash
# Create PostgreSQL database
createdb user_cooks

# Run the schema (includes location columns and indexes)
psql -d user_cooks -f server/schema.sql
```

### 4. Environment Configuration
```bash
# Copy environment template
cp env.example .env

# Edit .env with your database credentials
DB_USER=your_db_user
DB_NAME=user_cooks
DB_PASSWORD=your_db_password
JWT_SECRET=your-super-secret-jwt-key
```

### 5. Start the Application
```bash
# Start backend server (from root directory)
npm start

# Start frontend (in a new terminal, from client directory)
cd client
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:4000

## 📁 Project Structure

```
myhousehelp/
├── server/
│   ├── app.js                    # Express server setup
│   ├── db.js                     # Database connection
│   ├── schema.sql                # Database schema with location support
│   ├── services/
│   │   └── zipcodeService.js     # Zipcode-to-coordinates conversion
│   ├── jobs/
│   │   └── updateCoordinates.js  # Daily coordinate update job
│   └── routes/
│       └── users.js              # User authentication and search routes
├── client/
│   ├── public/
│   │   └── images/               # Static assets
│   └── src/
│       ├── components/
│       │   ├── Signup.js         # User registration
│       │   ├── FindService.js    # Advanced service discovery with location
│       │   ├── Services.js       # Services showcase
│       │   ├── Community.js      # Community features
│       │   ├── Login.js          # User login
│       │   └── Navigation.js     # Navigation component
│       └── App.js                # Main application component
├── package.json                  # Backend dependencies
└── README.md                     # This file
```

## 🔧 API Endpoints

### Authentication
- `POST /api/users/signup` - User registration with automatic coordinate update
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile

### Service Discovery
- `GET /api/users/search` - Advanced search with location filtering
  - Query parameters: `serviceType`, `zipCode`, `day`, `time`, `rating`, `maxPrice`
  - Returns providers sorted by distance

### Request/Response Format
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... }
}
```

## 🎨 UI/UX Features

- **Responsive Design**: Works on desktop and mobile
- **Location-based Search**: Enter zipcode or use current location
- **Distance Display**: Shows exact distance to each provider
- **Smart Filtering**: Filter by service type, availability, rating, and price
- **Real-time Sorting**: Results automatically sorted by proximity
- **Form Validation**: Real-time client-side validation
- **Loading States**: Visual feedback during operations
- **Error Handling**: User-friendly error messages
- **Modern Styling**: Clean, professional appearance
- **Cultural Design**: UI elements that resonate with Indian community

## 🔒 Security Features

- **Password Hashing**: bcryptjs with salt rounds
- **JWT Authentication**: Secure token-based auth
- **Input Validation**: Server-side validation with express-validator
- **CORS Protection**: Configured for development
- **SQL Injection Prevention**: Parameterized queries
- **API Rate Limiting**: Built-in protection against abuse

## 🗺️ Location Features

### Smart Location Matching
- **Automatic Coordinate Conversion**: Zipcodes automatically converted to lat/lng
- **Distance Calculation**: Haversine formula for accurate distance calculation
- **Proximity Sorting**: Providers sorted by distance from user location
- **Fallback System**: Hardcoded coordinates for common zip codes when API fails

### Supported Locations
Currently optimized for the San Francisco Bay Area with hardcoded coordinates for:
- **Sunnyvale**: 94085, 94086, 94087, 94089
- **San Jose**: 95123-95148
- **San Francisco**: 94102-94134
- **Cupertino**: 95014, 95015
- **Santa Clara**: 95050-95056
- **Palo Alto**: 94301-94309
- **Mountain View**: 94035, 94039-94044
- And many more Bay Area locations

## 🏠 Available Services

### Home Services
- **Home Chefs**: Professional cooks for daily meals and special occasions
- **Home Cleaning**: Professional cleaning services
- **Laundry Services**: Professional laundry and ironing
- **Pet Care**: Pet sitting, walking, and grooming

### Family Care
- **Nanny & Childcare**: Experienced nannies who understand Indian family values
- **Elderly Care**: Compassionate caregivers for elderly family members
- **Special Needs Care**: Specialized care for family members with special needs
- **Family Assistant**: Personal assistants for family and household management

### Religious & Cultural
- **Pandit Services**: Qualified pandits for pujas and religious ceremonies
- **Cultural Events**: Help with cultural celebrations and events
- **Language Classes**: Hindi, Sanskrit, and other Indian language classes
- **Cultural Cooking**: Traditional Indian cooking classes and workshops

### Education & Learning
- **Academic Tutoring**: Tutors for all subjects and grade levels
- **Music Lessons**: Indian classical music and instrument lessons
- **Dance Classes**: Classical and folk dance instruction
- **Art & Craft**: Traditional Indian art and craft classes

### Health & Wellness
- **Yoga Instruction**: Yoga classes and meditation sessions
- **Ayurvedic Consultation**: Traditional Ayurvedic health consultations
- **Massage Therapy**: Therapeutic and relaxation massage services
- **Nutrition Guidance**: Indian diet and nutrition consultation

### Professional Services
- **Translation Services**: Hindi, Gujarati, Punjabi, and other language translation
- **Document Assistance**: Help with forms, applications, and documentation
- **Event Planning**: Wedding, birthday, and cultural event planning
- **Photography**: Professional photography for events and portraits

## 🔄 Automated Jobs

### Daily Coordinate Update
The system includes an automated job to update coordinates for users with missing lat/lng data:

```bash
# Run manually for testing
node server/testUpdateCoordinates.js

# Schedule as daily cron job (2 AM)
0 2 * * * /usr/bin/node /path/to/server/jobs/updateCoordinates.js
```

### Features
- **Automatic Processing**: Updates coordinates for all users with zipcodes but missing coordinates
- **API Integration**: Uses zippopotam.us API for coordinate conversion
- **Fallback System**: Hardcoded coordinates for common zip codes
- **Error Handling**: Continues processing even if individual updates fail
- **Logging**: Detailed logs for monitoring and debugging

## 🚧 Current Status

### ✅ Completed
- User registration and authentication with automatic coordinate updates
- Advanced service discovery with location-based filtering
- Distance calculation and proximity sorting
- Zipcode-to-coordinates conversion service
- Daily automated coordinate update job
- Database schema with location support and performance indexes
- Responsive frontend with location features
- Security implementations
- Community features

### 🚧 In Progress
- Service provider profile management
- Booking system with calendar integration
- Review and rating system
- Payment processing integration
- Push notifications for booking updates

### 🔮 Planned Features
- Real-time chat between users and providers
- Advanced availability scheduling
- Provider verification and background checks
- Multi-language support (Hindi, Gujarati, Punjabi)
- Mobile app development
- Integration with payment gateways

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, email support@myhousehelp.com or create an issue in the repository.

---

**MyHouseHelp** - Connecting Indian families with trusted service providers, one location at a time! 🏠✨
