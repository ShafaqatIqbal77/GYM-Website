import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Award, Target } from 'lucide-react';
import { mockTrainers } from '../utils/api';
import toast from 'react-hot-toast';

const Trainers = () => {
  const trainers = mockTrainers;

  const handleContactTrainer = (trainerName) => {
    toast.success(`Contact request sent to ${trainerName}!`);
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
            <h1 className="text-5xl font-bold text-white mb-6">Our Expert Trainers</h1>
            <p className="text-xl text-dark-muted max-w-3xl mx-auto">
              Meet our team of certified fitness professionals dedicated to helping you achieve your goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group"
              >
                <div className="relative mb-6">
                  {trainer.image ? (
                    <img 
                      src={trainer.image} 
                      alt={trainer.name} 
                      className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-64 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                      <span className="text-white text-6xl font-bold">{trainer.name[0]}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <div className="flex space-x-3">
                      {trainer.socialLinks?.facebook && (
                        <a href={trainer.socialLinks.facebook} className="bg-white/20 p-2 rounded-full hover:bg-primary transition-colors">
                          <Facebook className="h-5 w-5 text-white" />
                        </a>
                      )}
                      {trainer.socialLinks?.instagram && (
                        <a href={trainer.socialLinks.instagram} className="bg-white/20 p-2 rounded-full hover:bg-primary transition-colors">
                          <Instagram className="h-5 w-5 text-white" />
                        </a>
                      )}
                      {trainer.socialLinks?.twitter && (
                        <a href={trainer.socialLinks.twitter} className="bg-white/20 p-2 rounded-full hover:bg-primary transition-colors">
                          <Twitter className="h-5 w-5 text-white" />
                        </a>
                      )}
                      {trainer.socialLinks?.linkedin && (
                        <a href={trainer.socialLinks.linkedin} className="bg-white/20 p-2 rounded-full hover:bg-primary transition-colors">
                          <Linkedin className="h-5 w-5 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{trainer.name}</h3>
                <p className="text-primary mb-3">{trainer.specialization}</p>
                
                <div className="flex items-center text-dark-muted text-sm mb-4">
                  <Award className="h-4 w-4 mr-2" />
                  <span>{trainer.experience} experience</span>
                </div>

                {trainer.bio && (
                  <p className="text-dark-muted text-sm mb-4 line-clamp-3">{trainer.bio}</p>
                )}

                <button 
                  onClick={() => handleContactTrainer(trainer.name)}
                  className="w-full btn-secondary flex items-center justify-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Trainer
                </button>
              </motion.div>
            ))}
          </div>

          {trainers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-dark-muted text-lg">No trainers available at the moment</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Trainers */}
      <section className="py-20 bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Our Trainers?</h2>
            <p className="text-dark-muted text-lg">Expert guidance for your fitness journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Certified Professionals',
                description: 'All our trainers hold internationally recognized certifications'
              },
              {
                icon: Target,
                title: 'Personalized Approach',
                description: 'Customized workout plans tailored to your specific goals'
              },
              {
                icon: Award,
                title: 'Continuous Learning',
                description: 'Our trainers stay updated with the latest fitness trends and techniques'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-dark-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainers;
