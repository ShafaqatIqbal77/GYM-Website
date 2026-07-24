import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, Users, Dumbbell, Heart, Zap } from 'lucide-react';
import { mockClasses } from '../utils/api';

const Home = () => {
  const classes = mockClasses.slice(0, 3);
  const [testimonials] = React.useState([
    {
      name: 'Ahmed Khan',
      location: 'Peshawar',
      text: 'PowerFit transformed my life! Lost 20kg in 3 months with their expert trainers and state-of-the-art equipment.',
      rating: 5
    },
    {
      name: 'Fatima Ali',
      location: 'Islamabad',
      text: 'Best gym in Pakistan! The trainers are professional and the atmosphere is motivating. Highly recommended!',
      rating: 5
    },
    {
      name: 'Usman Malik',
      location: 'Kohat',
      text: 'Amazing CrossFit classes and personal training. The staff is friendly and always ready to help.',
      rating: 5
    }
  ]);

  const features = [
    { icon: Dumbbell, title: 'Modern Equipment', description: 'State-of-the-art gym equipment for all your fitness needs' },
    { icon: Users, title: 'Expert Trainers', description: 'Certified professional trainers to guide your journey' },
    { icon: Clock, title: 'Flexible Hours', description: 'Open early morning till late night for your convenience' },
    { icon: Heart, title: 'Personal Training', description: 'One-on-one sessions tailored to your goals' },
    { icon: Zap, title: 'Group Classes', description: 'Energizing group workouts including Yoga, Zumba, and more' },
    { icon: Star, title: 'Proven Results', description: 'Join hundreds of satisfied members achieving their goals' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920')] bg-cover bg-center opacity-30"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Transform Your <span className="text-primary">Body</span>,<br />
            Transform Your <span className="text-primary">Life</span>
          </h1>
          <p className="text-xl md:text-2xl text-dark-muted mb-8 max-w-2xl mx-auto">
            Join Pakistan's premier fitness center and start your journey to a healthier, stronger you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/membership" className="btn-primary text-lg">
              Join Now <ArrowRight className="inline ml-2 h-5 w-5" />
            </Link>
            <Link to="/classes" className="btn-secondary text-lg">
              View Classes
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose PowerFit?</h2>
            <p className="text-dark-muted text-lg">Experience the difference with our world-class facilities</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card hover:border-primary transition-colors group"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-dark-muted">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Classes */}
      <section className="py-20 bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Classes</h2>
            <p className="text-dark-muted text-lg">Discover our most popular fitness programs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {classes.map((classItem, index) => (
              <motion.div
                key={classItem._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card overflow-hidden group"
              >
                {classItem.image && (
                  <div className="h-48 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                    <span className="text-white text-6xl font-bold">{classItem.category[0]}</span>
                  </div>
                )}
                <div className="p-6">
                  <span className="text-primary text-sm font-semibold">{classItem.category}</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3">{classItem.name}</h3>
                  <div className="flex items-center text-dark-muted text-sm mb-4">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{classItem.schedule?.day} at {classItem.schedule?.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-dark-muted text-sm">
                      <Users className="inline h-4 w-4 mr-1" />
                      {classItem.enrolled}/{classItem.capacity} enrolled
                    </span>
                    <Link to="/classes" className="text-primary hover:text-primary-light transition-colors">
                      View Details →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/classes" className="btn-secondary">
              View All Classes
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">What Our Members Say</h2>
            <p className="text-dark-muted text-lg">Real stories from real people</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-dark-muted mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-dark-muted text-sm">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Fitness Journey?</h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              Join PowerFit today and get access to world-class facilities, expert trainers, and a supportive community
            </p>
            <Link to="/membership" className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block">
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
