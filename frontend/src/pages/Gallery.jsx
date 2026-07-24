import React from 'react';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';

const Gallery = () => {
  const galleryImages = [
    { category: 'Equipment', src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800', alt: 'Gym Equipment' },
    { category: 'Equipment', src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800', alt: 'Weights' },
    { category: 'Facility', src: 'https://images.unsplash.com/photo-1540496905036-5937c10647cc?w=800', alt: 'Gym Interior' },
    { category: 'Training', src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800', alt: 'Training Session' },
    { category: 'Cardio', src: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800', alt: 'Cardio Area' },
    { category: 'Facility', src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800', alt: 'Gym Space' },
    { category: 'Training', src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800', alt: 'Workout' },
    { category: 'Equipment', src: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800', alt: 'Machines' },
    { category: 'Cardio', src: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800', alt: 'Treadmills' },
    { category: 'Facility', src: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800', alt: 'Modern Gym' },
    { category: 'Training', src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800', alt: 'Personal Training' },
    { category: 'Equipment', src: 'https://images.unsplash.com/photo-1597452485665-2c7bb5fef90d?w=800', alt: 'Dumbbells' }
  ];

  const categories = ['All', 'Equipment', 'Facility', 'Training', 'Cardio'];
  const [filter, setFilter] = React.useState('All');

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

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
            <h1 className="text-5xl font-bold text-white mb-6">Our Gallery</h1>
            <p className="text-xl text-dark-muted max-w-3xl mx-auto">
              Take a virtual tour of our world-class facilities and equipment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-dark-bg border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 overflow-x-auto pb-2">
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

      {/* Gallery Grid */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center">
                    <ZoomIn className="h-8 w-8 text-white mx-auto mb-2" />
                    <p className="text-white text-sm">{image.alt}</p>
                    <p className="text-primary text-xs">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-dark-muted text-lg">No images found for this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-20 bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Facilities</h2>
            <p className="text-dark-muted text-lg">Everything you need for a complete workout experience</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Cardio Zone', description: 'State-of-the-art treadmills, ellipticals, and bikes' },
              { title: 'Weight Room', description: 'Free weights, machines, and functional training area' },
              { title: 'Group Studio', description: 'Spacious studio for yoga, Zumba, and group classes' },
              { title: 'Locker Rooms', description: 'Clean, modern locker rooms with showers' },
              { title: 'Sauna & Steam', description: 'Relax and recover after your workout' },
              { title: 'Nutrition Bar', description: 'Healthy snacks and supplements available' },
              { title: 'Personal Training', description: 'Private training rooms for one-on-one sessions' },
              { title: 'Parking', description: 'Free parking available for all members' }
            ].map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{facility.title}</h3>
                <p className="text-dark-muted text-sm">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
