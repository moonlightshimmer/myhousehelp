-- Database schema for DesiHelp application

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL CHECK (role IN ('user', 'cook', 'nanny', 'pandit', 'maid', 'tutor', 'yoga_instructor', 'event_planner')),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone VARCHAR(20),
    address TEXT,
    city VARCHAR(100),
    state VARCHAR(100),
    zip_code VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create cooks table for additional cook-specific information
CREATE TABLE IF NOT EXISTS cooks (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    bio TEXT,
    specialties TEXT[],
    cuisines TEXT[],
    hourly_rate DECIMAL(10,2),
    experience_years INTEGER,
    certifications TEXT[],
    availability JSONB,
    rating DECIMAL(3,2) DEFAULT 0.0,
    total_reviews INTEGER DEFAULT 0,
    languages TEXT[],
    dietary_restrictions TEXT[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create nannies table for childcare services
CREATE TABLE IF NOT EXISTS nannies (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    bio TEXT,
    age_groups TEXT[],
    hourly_rate DECIMAL(10,2),
    experience_years INTEGER,
    certifications TEXT[],
    availability JSONB,
    rating DECIMAL(3,2) DEFAULT 0.0,
    total_reviews INTEGER DEFAULT 0,
    languages TEXT[],
    special_needs_experience BOOLEAN DEFAULT FALSE,
    first_aid_certified BOOLEAN DEFAULT FALSE,
    cpr_certified BOOLEAN DEFAULT FALSE,
    background_check_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create pandits table for religious services
CREATE TABLE IF NOT EXISTS pandits (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    bio TEXT,
    specializations TEXT[],
    hourly_rate DECIMAL(10,2),
    experience_years INTEGER,
    qualifications TEXT[],
    availability JSONB,
    rating DECIMAL(3,2) DEFAULT 0.0,
    total_reviews INTEGER DEFAULT 0,
    languages TEXT[],
    puja_types TEXT[],
    temple_affiliations TEXT[],
    vedic_knowledge_level VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create maids table for cleaning services
CREATE TABLE IF NOT EXISTS maids (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    bio TEXT,
    services TEXT[],
    hourly_rate DECIMAL(10,2),
    experience_years INTEGER,
    certifications TEXT[],
    availability JSONB,
    rating DECIMAL(3,2) DEFAULT 0.0,
    total_reviews INTEGER DEFAULT 0,
    languages TEXT[],
    cleaning_supplies_provided BOOLEAN DEFAULT FALSE,
    eco_friendly_products BOOLEAN DEFAULT FALSE,
    background_check_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create tutors table for educational services
CREATE TABLE IF NOT EXISTS tutors (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    bio TEXT,
    subjects TEXT[],
    grade_levels TEXT[],
    hourly_rate DECIMAL(10,2),
    experience_years INTEGER,
    qualifications TEXT[],
    availability JSONB,
    rating DECIMAL(3,2) DEFAULT 0.0,
    total_reviews INTEGER DEFAULT 0,
    languages TEXT[],
    online_teaching BOOLEAN DEFAULT FALSE,
    in_person_teaching BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create yoga_instructors table for wellness services
CREATE TABLE IF NOT EXISTS yoga_instructors (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    bio TEXT,
    yoga_styles TEXT[],
    hourly_rate DECIMAL(10,2),
    experience_years INTEGER,
    certifications TEXT[],
    availability JSONB,
    rating DECIMAL(3,2) DEFAULT 0.0,
    total_reviews INTEGER DEFAULT 0,
    languages TEXT[],
    ayurvedic_knowledge BOOLEAN DEFAULT FALSE,
    meditation_instruction BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create event_planners table for event services
CREATE TABLE IF NOT EXISTS event_planners (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    bio TEXT,
    event_types TEXT[],
    hourly_rate DECIMAL(10,2),
    experience_years INTEGER,
    certifications TEXT[],
    availability JSONB,
    rating DECIMAL(3,2) DEFAULT 0.0,
    total_reviews INTEGER DEFAULT 0,
    languages TEXT[],
    cultural_events BOOLEAN DEFAULT FALSE,
    wedding_planning BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create bookings table (updated to support multiple service types)
CREATE TABLE IF NOT EXISTS bookings (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    service_provider_id INTEGER NOT NULL,
    service_type VARCHAR(50) NOT NULL CHECK (service_type IN ('cook', 'nanny', 'pandit', 'maid', 'tutor', 'yoga_instructor', 'event_planner')),
    booking_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
    total_amount DECIMAL(10,2),
    special_requests TEXT,
    location TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create reviews table (updated to support multiple service types)
CREATE TABLE IF NOT EXISTS reviews (
    id SERIAL PRIMARY KEY,
    booking_id INTEGER REFERENCES bookings(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    service_provider_id INTEGER NOT NULL,
    service_type VARCHAR(50) NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create service_categories table for better organization
CREATE TABLE IF NOT EXISTS service_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    icon VARCHAR(50),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default service categories
INSERT INTO service_categories (name, description, icon) VALUES
('Home Chefs', 'Professional cooks for daily meals and special occasions', '👨‍🍳'),
('Nanny & Childcare', 'Experienced nannies who understand Indian family values', '👶'),
('Pandit & Religious', 'Qualified pandits for pujas and religious ceremonies', '🕉️'),
('Home Cleaning', 'Professional cleaning services for your home', '🧹'),
('Tutoring', 'Academic tutors for children and adults', '📚'),
('Yoga & Wellness', 'Yoga classes and meditation sessions', '🧘'),
('Event Planning', 'Wedding, birthday, and cultural event planning', '🎉'),
('Elderly Care', 'Compassionate caregivers for elderly family members', '👴'),
('Pet Care', 'Pet sitting, walking, and grooming services', '🐕'),
('Translation', 'Hindi, Gujarati, Punjabi, and other language translation', '🌐');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_cooks_user_id ON cooks(user_id);
CREATE INDEX IF NOT EXISTS idx_nannies_user_id ON nannies(user_id);
CREATE INDEX IF NOT EXISTS idx_pandits_user_id ON pandits(user_id);
CREATE INDEX IF NOT EXISTS idx_maids_user_id ON maids(user_id);
CREATE INDEX IF NOT EXISTS idx_tutors_user_id ON tutors(user_id);
CREATE INDEX IF NOT EXISTS idx_yoga_instructors_user_id ON yoga_instructors(user_id);
CREATE INDEX IF NOT EXISTS idx_event_planners_user_id ON event_planners(user_id);
CREATE INDEX IF NOT EXISTS idx_bookings_user_id ON bookings(user_id);
CREATE INDEX IF NOT EXISTS idx_bookings_service_provider_id ON bookings(service_provider_id);
CREATE INDEX IF NOT EXISTS idx_bookings_service_type ON bookings(service_type);
CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(booking_date);
CREATE INDEX IF NOT EXISTS idx_reviews_service_provider_id ON reviews(service_provider_id);
CREATE INDEX IF NOT EXISTS idx_reviews_service_type ON reviews(service_type); 