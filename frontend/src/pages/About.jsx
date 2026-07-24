import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, Calendar, Trophy, Heart } from 'lucide-react';
import { mockTrainers } from '../utils/api';

const About = () => {
  const trainers = mockTrainers.slice(0, 3);

  const history = [
    { year: '2015', event: 'PowerFit Gym founded in Kohat with a vision to transform fitness in Pakistan' },
    { year: '2018', event: 'Expanded to 3 locations across KPK province' },
    { year: '2020', event: 'Launched online fitness programs during pandemic' },
    { year: '2022', event: 'Awarded Best Gym in KPK by Pakistan Fitness Association' },
    { year: '2024', event: 'Serving over 5000+ members with state-of-the-art facilities' }
  ];

  const values = [
    { icon: Target, title: 'Excellence', description: 'We strive for excellence in everything we do, from equipment to training' },
    { icon: Heart, title: 'Community', description: 'Building a supportive community where everyone feels welcome' },
    { icon: Users, title: 'Inclusivity', description: 'Fitness for everyone, regardless of age, fitness level, or background' },
    { icon: Trophy, title: 'Results', description: 'Focused on helping members achieve their fitness goals' }
  ];

  const stats = [
    { number: '5000+', label: 'Members', icon: Users },
    { number: '50+', label: 'Expert Trainers', icon: Award },
    { number: '100+', label: 'Classes Weekly', icon: Calendar },
    { number: '10+', label: 'Years Experience', icon: Trophy }
  ];

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
            <h1 className="text-5xl font-bold text-white mb-6">About PowerFit</h1>
            <p className="text-xl text-dark-muted max-w-3xl mx-auto">
              Transforming lives through fitness since 2015. We are more than just a gym – we are a community dedicated to helping you achieve your health and fitness goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-dark-muted text-lg">From a small gym to Pakistan's premier fitness destination</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {history.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">{item.year}</div>
                <p className="text-dark-muted text-sm">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-dark-muted text-lg mb-6">
                At PowerFit, our mission is to empower individuals to lead healthier, happier lives through fitness. We believe that everyone deserves access to world-class fitness facilities and expert guidance.
              </p>
              <p className="text-dark-muted text-lg mb-6">
                We are committed to creating an inclusive environment where people of all fitness levels can feel comfortable and motivated to achieve their goals. Our team of certified trainers is dedicated to providing personalized attention and support to every member.
              </p>
              <p className="text-dark-muted text-lg">
                Together, we are building a healthier Pakistan, one workout at a time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{value.title}</h3>
                      <p className="text-dark-muted">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-12 w-12 text-white mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Trainers */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Expert Trainers</h2>
            <p className="text-dark-muted text-lg">Dedicated professionals committed to your success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                {trainer.image ? (
                  <img src={trainer.image} alt={trainer.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                ) : (
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">{trainer.name[0]}</span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{trainer.name}</h3>
                <p className="text-primary mb-2">{trainer.specialization}</p>
                <p className="text-dark-muted text-sm">{trainer.experience} experience</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/trainers" className="btn-secondary">
              View All Trainers
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
