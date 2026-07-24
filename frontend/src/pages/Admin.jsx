import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Users, Dumbbell, Calendar, MessageSquare, Plus, Edit, Trash2, LogOut } from 'lucide-react';
import { mockStats, mockTrainers, mockClasses, mockUsers, mockBookings } from '../utils/api';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Admin = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const stats = mockStats;
  const recentBookings = mockBookings;
  const trainers = mockTrainers;
  const classes = mockClasses;
  const users = mockUsers;
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/');
      return;
    }
  }, [user, navigate]);

  const handleDelete = async (type, id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    toast.success('Item deleted successfully (mock)');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Dumbbell },
    { id: 'trainers', label: 'Trainers', icon: Users },
    { id: 'classes', label: 'Classes', icon: Calendar },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'bookings', label: 'Bookings', icon: MessageSquare }
  ];

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Header */}
      <header className="bg-dark-card border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
            <button onClick={handleLogout} className="flex items-center text-dark-muted hover:text-white">
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-dark-card min-h-screen p-4 hidden md:block">
          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary text-white'
                    : 'text-dark-muted hover:text-white hover:bg-dark-border'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Mobile Tabs */}
          <div className="md:hidden mb-6 flex overflow-x-auto space-x-2 pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-primary text-white'
                    : 'bg-dark-card text-dark-muted'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && stats && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-dark-muted text-sm">Total Users</p>
                      <p className="text-3xl font-bold text-white">{stats.totalUsers}</p>
                    </div>
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <div className="card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-dark-muted text-sm">Total Trainers</p>
                      <p className="text-3xl font-bold text-white">{stats.totalTrainers}</p>
                    </div>
                    <Dumbbell className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <div className="card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-dark-muted text-sm">Active Classes</p>
                      <p className="text-3xl font-bold text-white">{stats.totalClasses}</p>
                    </div>
                    <Calendar className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <div className="card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-dark-muted text-sm">Total Bookings</p>
                      <p className="text-3xl font-bold text-white">{stats.totalBookings}</p>
                    </div>
                    <MessageSquare className="h-10 w-10 text-primary" />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">Recent Bookings</h3>
              <div className="card overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-dark-border">
                      <th className="text-left py-3 px-4 text-white">User</th>
                      <th className="text-left py-3 px-4 text-white">Class</th>
                      <th className="text-left py-3 px-4 text-white">Date</th>
                      <th className="text-left py-3 px-4 text-white">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((booking) => (
                      <tr key={booking._id} className="border-b border-dark-border">
                        <td className="py-3 px-4 text-white">{booking.user?.name}</td>
                        <td className="py-3 px-4 text-white">{booking.class?.name}</td>
                        <td className="py-3 px-4 text-dark-muted">
                          {new Date(booking.createdAt).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            booking.status === 'confirmed' ? 'bg-green-500/20 text-green-400' :
                            booking.status === 'cancelled' ? 'bg-red-500/20 text-red-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* Trainers Tab */}
          {activeTab === 'trainers' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-white">Trainers</h2>
                <button className="btn-primary flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Add Trainer
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trainers.map((trainer) => (
                  <div key={trainer._id} className="card">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-white">{trainer.name}</h3>
                        <p className="text-primary">{trainer.specialization}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-dark-muted hover:text-white">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete('trainers', trainer._id)}
                          className="text-dark-muted hover:text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <p className="text-dark-muted text-sm">{trainer.experience}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Classes Tab */}
          {activeTab === 'classes' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-white">Classes</h2>
                <button className="btn-primary flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Add Class
                </button>
              </div>

              <div className="card overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-dark-border">
                      <th className="text-left py-3 px-4 text-white">Name</th>
                      <th className="text-left py-3 px-4 text-white">Category</th>
                      <th className="text-left py-3 px-4 text-white">Trainer</th>
                      <th className="text-left py-3 px-4 text-white">Schedule</th>
                      <th className="text-left py-3 px-4 text-white">Enrolled</th>
                      <th className="text-left py-3 px-4 text-white">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {classes.map((classItem) => (
                      <tr key={classItem._id} className="border-b border-dark-border">
                        <td className="py-3 px-4 text-white">{classItem.name}</td>
                        <td className="py-3 px-4 text-primary">{classItem.category}</td>
                        <td className="py-3 px-4 text-white">{classItem.trainer?.name}</td>
                        <td className="py-3 px-4 text-dark-muted">
                          {classItem.schedule?.day} at {classItem.schedule?.time}
                        </td>
                        <td className="py-3 px-4 text-white">
                          {classItem.enrolled}/{classItem.capacity}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <button className="text-dark-muted hover:text-white">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDelete('classes', classItem._id)}
                              className="text-dark-muted hover:text-red-500"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* Users Tab */}
          {activeTab === 'users' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Users</h2>

              <div className="card overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-dark-border">
                      <th className="text-left py-3 px-4 text-white">Name</th>
                      <th className="text-left py-3 px-4 text-white">Email</th>
                      <th className="text-left py-3 px-4 text-white">Phone</th>
                      <th className="text-left py-3 px-4 text-white">Membership</th>
                      <th className="text-left py-3 px-4 text-white">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user._id} className="border-b border-dark-border">
                        <td className="py-3 px-4 text-white">{user.name}</td>
                        <td className="py-3 px-4 text-dark-muted">{user.email}</td>
                        <td className="py-3 px-4 text-dark-muted">{user.phone || 'N/A'}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            user.membershipPlan ? 'bg-primary/20 text-primary' : 'bg-dark-border text-dark-muted'
                          }`}>
                            {user.membershipPlan || 'None'}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <button
                            onClick={() => handleDelete('admin/users', user._id)}
                            className="text-dark-muted hover:text-red-500"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* Bookings Tab */}
          {activeTab === 'bookings' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">All Bookings</h2>

              <div className="card overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-dark-border">
                      <th className="text-left py-3 px-4 text-white">User</th>
                      <th className="text-left py-3 px-4 text-white">Class</th>
                      <th className="text-left py-3 px-4 text-white">Date</th>
                      <th className="text-left py-3 px-4 text-white">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((booking) => (
                      <tr key={booking._id} className="border-b border-dark-border">
                        <td className="py-3 px-4 text-white">{booking.user?.name}</td>
                        <td className="py-3 px-4 text-white">{booking.class?.name}</td>
                        <td className="py-3 px-4 text-dark-muted">
                          {new Date(booking.createdAt).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            booking.status === 'confirmed' ? 'bg-green-500/20 text-green-400' :
                            booking.status === 'cancelled' ? 'bg-red-500/20 text-red-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Admin;
