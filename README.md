# FindMyCook 🍳

A platform connecting people who need cooking services with nearby professional cooks. FindMyCook makes it easy to book personalized cooking experiences in your home.

## 🚀 Features

- **User Registration & Authentication**: Secure signup/login for both customers and cooks
- **Role-based Profiles**: Separate interfaces for customers and cooks
- **Cook Discovery**: Find nearby cooks based on location and preferences
- **Booking System**: Schedule cooking sessions with your preferred cook
- **Review System**: Rate and review cooking experiences
- **Meal Planning**: Plan meals and get shopping lists
- **Shopping Integration**: Streamlined grocery shopping experience

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
- **Fetch API** for HTTP requests

## 📋 Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd findmycook
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
createdb findmycook_db

# Run the schema
psql -d findmycook_db -f server/schema.sql
```

### 4. Environment Configuration
```bash
# Copy environment template
cp env.example .env

# Edit .env with your database credentials
DB_USER=your_db_user
DB_NAME=findmycook_db
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
findmycook/
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
│       │   ├── FindCook.js # Cook discovery (placeholder)
│       │   ├── MealPlan.js # Meal planning (placeholder)
│       │   └── Shop.js     # Shopping (placeholder)
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

## 🔒 Security Features

- **Password Hashing**: bcryptjs with salt rounds
- **JWT Authentication**: Secure token-based auth
- **Input Validation**: Server-side validation with express-validator
- **CORS Protection**: Configured for development
- **SQL Injection Prevention**: Parameterized queries

## 🚧 Current Status

### ✅ Completed
- User registration and authentication
- Database schema design
- Basic frontend signup form
- Security implementations

### 🚧 In Progress
- Cook discovery functionality
- Booking system
- Review system

### 📋 Planned
- Meal planning features
- Shopping integration
- Real-time messaging
- Payment processing
- Mobile app

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
   - Change port in `.env` file
   - Kill existing processes on the port

3. **CORS Errors**
   - Verify backend is running on correct port
   - Check CORS configuration in `server/app.js`

## 📄 License

This project is licensed under the ISC License.

## 👥 Team

- **Developer**: [Your Name]
- **Project**: FindMyCook Platform

---

**Happy Cooking! 🍽️**