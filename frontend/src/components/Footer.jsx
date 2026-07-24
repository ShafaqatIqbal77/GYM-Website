import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Dumbbell } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-card border-t border-dark-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-white">Power<span className="text-primary">Fit</span></span>
            </div>
            <p className="text-dark-muted">
              Transform your body and mind at Pakistan's premier fitness center. Join us today and start your fitness journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-dark-muted hover:text-primary transition-colors">Home</a></li>
              <li><a href="/about" className="text-dark-muted hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/classes" className="text-dark-muted hover:text-primary transition-colors">Classes</a></li>
              <li><a href="/trainers" className="text-dark-muted hover:text-primary transition-colors">Trainers</a></li>
              <li><a href="/membership" className="text-dark-muted hover:text-primary transition-colors">Membership</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <span className="text-dark-muted">Main Road, Kohat, KPK, Pakistan</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-dark-muted">+92 922 1234567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-dark-muted">info@powerfit.pk</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-dark-border hover:bg-primary p-3 rounded-full transition-colors">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-dark-border hover:bg-primary p-3 rounded-full transition-colors">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-dark-border hover:bg-primary p-3 rounded-full transition-colors">
                <Twitter className="h-5 w-5 text-white" />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-2">Opening Hours</h4>
              <p className="text-dark-muted">Mon - Fri: 5:00 AM - 11:00 PM</p>
              <p className="text-dark-muted">Sat - Sun: 6:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-border mt-8 pt-8 text-center">
          <p className="text-dark-muted">&copy; 2024 PowerFit Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
