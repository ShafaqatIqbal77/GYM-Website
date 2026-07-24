# PowerFit Gym Website

A modern, fully responsive gym website built with React.js. This is a frontend-only demo version using mock data.

## Features

- **User Authentication**: Mock login/signup system with localStorage
- **Membership Plans**: 3-tier pricing (Basic, Standard, Premium) in PKR
- **Class Booking**: Mock class booking system
- **Admin Dashboard**: View trainers, classes, users, and bookings (demo)
- **Contact Form**: Mock form submission
- **Responsive Design**: Mobile, tablet, and desktop friendly
- **Dark Theme**: Modern dark theme with orange/red accent colors
- **Smooth Animations**: Framer Motion for scroll animations

## Pages

1. **Home** - Hero section, featured classes, testimonials
2. **About Us** - Gym history, mission, trainers introduction
3. **Membership Plans** - Pricing cards with comparison table
4. **Classes/Programs** - Class grid with booking system
5. **Trainers** - Team grid with profiles
6. **Gallery** - Image gallery of facilities
7. **Contact Us** - Contact form with Google Maps
8. **Login/Signup** - User authentication (mock)
9. **Admin Dashboard** - Content management (demo)

## Tech Stack

### Frontend
- React.js 18
- React Router 6
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- React Hot Toast (notifications)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

The application will run on `http://localhost:3000`

## Project Structure

```
GYM/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── context/     # React context
│   │   ├── utils/       # Mock data and utilities
│   │   ├── App.js       # Main app component
│   │   └── index.js     # Entry point
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
└── README.md
```

## Features Details

### Membership Plans
- **Basic**: PKR 5,000/month - Gym access, basic equipment, locker room
- **Standard**: PKR 10,000/month - All equipment, unlimited classes, personal training (2/month)
- **Premium**: PKR 20,000/month - 24/7 access, private locker, personal training (4/month)

### Class Categories
- Yoga
- Cardio
- Weight Training
- CrossFit
- Zumba

### Demo Data

This version uses mock data stored in `src/utils/api.js` including:
- Sample classes with Pakistani trainers
- Sample trainer profiles
- Sample user data
- Dashboard statistics

## Deployment

1. Build the React app: `npm run build`
2. Deploy the build folder to Netlify, Vercel, or similar services

## Note

This is a frontend demo version. For a production application, you would need:
- Backend API (Node.js/Express)
- Database (MongoDB)
- Real authentication system
- Email service integration
- File upload service (Cloudinary)

## License

This project is licensed under the ISC License.
