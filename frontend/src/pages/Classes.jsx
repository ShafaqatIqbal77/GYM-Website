import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Calendar, Filter } from 'lucide-react';
import { mockClasses } from '../utils/api';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Classes = () => {
  const { user } = useAuth();
  const classes = mockClasses;
  const [filter, setFilter] = useState('All');
  const [selectedClass, setSelectedClass] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const categories = ['All', 'Yoga', 'Cardio', 'Weight Training', 'CrossFit', 'Zumba'];

  const filteredClasses = filter === 'All' 
    ? classes 
    : classes.filter(c => c.category === filter);

  const handleBookClass = async (classItem) => {
    if (!user) {
      toast.error('Please login to book a class');
      return;
    }

    if (!user.membershipPlan) {
      toast.error('Please subscribe to a membership plan first');
      return;
    }

    setSelectedClass(classItem);
    setShowBookingModal(true);
  };

  const confirmBooking = async () => {
    // Mock booking - just show success message
    toast.success('Class booked successfully!');
    setShowBookingModal(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-white mb-6">Our Classes</h1>
            <p className="text-xl text-dark-muted max-w-3xl mx-auto">
              Discover our diverse range of fitness classes designed to help you achieve your goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-dark-bg border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 overflow-x-auto pb-2">
            <Filter className="h-5 w-5 text-primary flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  filter === category
                    ? 'bg-primary text-white'
                    : 'bg-dark-card text-dark-muted hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((classItem, index) => (
              <motion.div
                key={classItem._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
 className="card overflow-hidden group"
              >
                {classItem.image ? (
                  <img 
                    src={classItem.image} 
                    alt={classItem.name} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                    <span className="text-white text-6xl font-bold">{classItem.category[0]}</span>
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-primary text-sm font-semibold">{classItem.category}</span>
                    <span className="text-dark-muted text-sm">
                      PKR {classItem.price}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{classItem.name}</h3>
                  <p className="text-dark-muted text-sm mb-4 line-clamp-2">{classItem.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-dark-muted text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span>{classItem.schedule?.day}</span>
                    </div>
                    <div className="flex items-center text-dark-muted text-sm">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>{classItem.schedule?.time} ({classItem.schedule?.duration})</span>
                    </div>
                    <div className="flex items-center text-dark-muted text-sm">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      <span>Trainer: {classItem.trainer?.name}</span>
                    </div>
                    <div className="flex items-center text-dark-muted text-sm">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      <span>{classItem.enrolled}/{classItem.capacity} enrolled</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleBookClass(classItem)}
                    disabled={classItem.enrolled >= classItem.capacity}
                    className={`w-full ${
                      classItem.enrolled >= classItem.capacity
                        ? 'bg-dark-border text-dark-muted cursor-not-allowed'
                        : 'btn-primary'
                    }`}
                  >
                    {classItem.enrolled >= classItem.capacity ? 'Fully Booked' : 'Book Now'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredClasses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-dark-muted text-lg">No classes found for this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && selectedClass && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card max-w-md w-full"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Book Class</h2>
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-dark-muted text-sm">Class</p>
                <p className="text-white font-semibold">{selectedClass.name}</p>
              </div>
              <div>
                <p className="text-dark-muted text-sm">Schedule</p>
                <p className="text-white">{selectedClass.schedule?.day} at {selectedClass.schedule?.time}</p>
              </div>
              <div>
                <p className="text-dark-muted text-sm">Trainer</p>
                <p className="text-white">{selectedClass.trainer?.name}</p>
              </div>
              <div>
                <p className="text-dark-muted text-sm">Price</p>
                <p className="text-white font-semibold">PKR {selectedClass.price}</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowBookingModal(false)}
                className="flex-1 btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={confirmBooking}
                className="flex-1 btn-primary"
              >
                Confirm Booking
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Classes;
