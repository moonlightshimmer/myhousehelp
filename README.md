# DesiHelp 🏠

A platform connecting Indian families with trusted service providers for home services, childcare, religious services, and more. DesiHelp makes it easy to find qualified professionals who understand your culture and values.

## 🚀 Features

- **User Registration & Authentication**: Secure signup/login for both customers and service providers
- **Role-based Profiles**: Separate interfaces for customers and service providers
- **Service Discovery**: Find nearby providers for various services (cooks, nannies, pandits, etc.)
- **Booking System**: Schedule services with your preferred provider
- **Review System**: Rate and review service experiences
- **Community Features**: Connect with other families and service providers
- **Cultural Focus**: Services designed specifically for the Indian community

## 🛠️ Tech Stack

### Backend
- **Node.js** with Express.js
- **PostgreSQL** database
- **JWT** for authentication
- **bcryptjs** for password hashing
- **express-validator** for input validation

### Frontend
- **React.js** with functional components
- **CSS-in-JS** for styling
- **React Router** for navigation
- **Fetch API** for HTTP requests

## 📋 Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd desihelp
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
createdb desihelp_db

# Run the schema
psql -d desihelp_db -f server/schema.sql
```

### 4. Environment Configuration
```bash
# Copy environment template
cp env.example .env

# Edit .env with your database credentials
DB_USER=your_db_user
DB_NAME=desihelp_db
DB_PASSWORD=your_db_password
JWT_SECRET=your-super-secret-jwt-key
```

### 5. Start the Application
```bash
# Start backend server (from root directory)
npm run dev

# Start frontend (in a new terminal, from client directory)
cd client
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:4000

## 📁 Project Structure

```
desihelp/
├── server/
│   ├── app.js              # Express server setup
│   ├── db.js               # Database connection
│   ├── schema.sql          # Database schema
│   └── routes/
│       └── users.js        # User authentication routes
├── client/
│   ├── public/
│   │   └── images/         # Static assets
│   └── src/
│       ├── components/
│       │   ├── Signup.js   # User registration
│       │   ├── FindService.js # Service discovery
│       │   ├── Services.js # Services showcase
│       │   ├── Community.js # Community features
│       │   └── Login.js    # User login
│       └── App.js          # Main application component
├── package.json            # Backend dependencies
└── README.md              # This file
```

## 🔧 API Endpoints

### Authentication
- `POST /api/users/signup` - User registration
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile

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

## 🚧 Current Status

### ✅ Completed
- User registration and authentication
- Database schema design
- Basic frontend components
- Security implementations
- Service discovery interface
- Community features

### 🚧 In Progress
- Service provider profiles
- Booking system
- Review system
- Payment processing

### 📋 Planned
- Real-time messaging
- Mobile app
- Advanced search filters
- Provider verification system
- Community events platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development Guidelines

### Code Style
- Use meaningful variable and function names
- Add comments for complex logic
- Follow consistent indentation
- Use ES6+ features where appropriate

### Git Workflow
- Write descriptive commit messages
- Use conventional commit format
- Keep commits atomic and focused

### Testing
- Add unit tests for new features
- Test API endpoints
- Validate form inputs

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Verify PostgreSQL is running
   - Check database credentials in `.env`
   - Ensure database exists

2. **Port Already in Use**
   - Change port in server configuration
   - Kill existing processes using the port

3. **CORS Errors**
   - Verify backend server is running
   - Check CORS configuration in server/app.js

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Indian community for inspiration and feedback
- Open source contributors
- React and Node.js communities