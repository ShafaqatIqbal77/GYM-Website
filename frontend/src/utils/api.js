// Mock data for frontend without backend
export const mockClasses = [
  {
    _id: '1',
    name: 'Morning Yoga Flow',
    category: 'Yoga',
    description: 'Start your day with energizing yoga poses and breathing exercises',
    image: '',
    trainer: { name: 'Ayesha Khan', specialization: 'Yoga Instructor' },
    schedule: { day: 'Monday', time: '6:00 AM', duration: '60 minutes' },
    capacity: 20,
    enrolled: 15,
    price: 500
  },
  {
    _id: '2',
    name: 'HIIT Cardio Blast',
    category: 'Cardio',
    description: 'High-intensity interval training for maximum calorie burn',
    image: '',
    trainer: { name: 'Ali Hassan', specialization: 'Cardio Expert' },
    schedule: { day: 'Tuesday', time: '7:00 AM', duration: '45 minutes' },
    capacity: 15,
    enrolled: 12,
    price: 800
  },
  {
    _id: '3',
    name: 'Strength Training',
    category: 'Weight Training',
    description: 'Build muscle and strength with compound movements',
    image: '',
    trainer: { name: 'Usman Malik', specialization: 'Strength Coach' },
    schedule: { day: 'Wednesday', time: '5:00 PM', duration: '60 minutes' },
    capacity: 20,
    enrolled: 18,
    price: 1000
  },
  {
    _id: '4',
    name: 'CrossFit Challenge',
    category: 'CrossFit',
    description: 'Intense functional fitness workouts for all levels',
    image: '',
    trainer: { name: 'Bilal Ahmed', specialization: 'CrossFit Trainer' },
    schedule: { day: 'Thursday', time: '6:00 PM', duration: '60 minutes' },
    capacity: 15,
    enrolled: 10,
    price: 1200
  },
  {
    _id: '5',
    name: 'Zumba Party',
    category: 'Zumba',
    description: 'Dance your way to fitness with Latin rhythms',
    image: '',
    trainer: { name: 'Sara Ali', specialization: 'Zumba Instructor' },
    schedule: { day: 'Friday', time: '7:00 PM', duration: '60 minutes' },
    capacity: 25,
    enrolled: 20,
    price: 600
  }
];

export const mockTrainers = [
  {
    _id: '1',
    name: 'Ayesha Khan',
    specialization: 'Yoga & Pilates',
    experience: '5 years',
    bio: 'Certified yoga instructor with expertise in Hatha and Vinyasa yoga. Passionate about helping clients find balance and flexibility.',
    image: '',
    socialLinks: { facebook: '#', instagram: '#', twitter: '#' }
  },
  {
    _id: '2',
    name: 'Ali Hassan',
    specialization: 'Cardio & HIIT',
    experience: '7 years',
    bio: 'Former national athlete specializing in high-intensity training. Helps clients achieve their fitness goals through effective cardio programs.',
    image: '',
    socialLinks: { facebook: '#', instagram: '#', twitter: '#' }
  },
  {
    _id: '3',
    name: 'Usman Malik',
    specialization: 'Strength & Conditioning',
    experience: '10 years',
    bio: 'Certified strength coach with experience training professional athletes. Expert in muscle building and functional training.',
    image: '',
    socialLinks: { facebook: '#', instagram: '#', twitter: '#' }
  },
  {
    _id: '4',
    name: 'Bilal Ahmed',
    specialization: 'CrossFit & Functional Training',
    experience: '6 years',
    bio: 'CrossFit Level 2 trainer dedicated to pushing clients beyond their limits. Specializes in functional fitness and mobility.',
    image: '',
    socialLinks: { facebook: '#', instagram: '#', twitter: '#' }
  },
  {
    _id: '5',
    name: 'Sara Ali',
    specialization: 'Zumba & Dance Fitness',
    experience: '4 years',
    bio: 'Energetic Zumba instructor making fitness fun through dance. Certified in multiple dance fitness programs.',
    image: '',
    socialLinks: { facebook: '#', instagram: '#', twitter: '#' }
  },
  {
    _id: '6',
    name: 'Fatima Shah',
    specialization: 'Personal Training',
    experience: '8 years',
    bio: 'ACE certified personal trainer specializing in weight loss and body transformation. Creates personalized workout plans.',
    image: '',
    socialLinks: { facebook: '#', instagram: '#', twitter: '#' }
  }
];

export const mockBookings = [
  {
    _id: '1',
    user: { name: 'Test User' },
    class: { name: 'Morning Yoga Flow' },
    createdAt: new Date().toISOString(),
    status: 'confirmed'
  }
];

export const mockUsers = [
  {
    _id: '1',
    name: 'Ahmed Khan',
    email: 'ahmed@example.com',
    phone: '0300-1234567',
    membershipPlan: 'standard',
    membershipExpiry: new Date(Date.now() + 30*24*60*60*1000).toISOString()
  },
  {
    _id: '2',
    name: 'Fatima Ali',
    email: 'fatima@example.com',
    phone: '0301-2345678',
    membershipPlan: 'premium',
    membershipExpiry: new Date(Date.now() + 30*24*60*60*1000).toISOString()
  }
];

export const mockStats = {
  totalUsers: 150,
  totalTrainers: 6,
  totalClasses: 15,
  totalBookings: 450,
  pendingContacts: 5
};
