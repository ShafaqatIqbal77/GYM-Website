import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Membership = () => {
  const { user, updateMembership } = useAuth();
  const [loading, setLoading] = React.useState(null);

  const plans = [
    {
      name: 'Basic',
      price: 5000,
      period: 'per month',
      features: [
        { name: 'Gym Access', included: true },
        { name: 'Basic Equipment', included: true },
        { name: 'Locker Room Access', included: true },
        { name: 'Group Classes (2/week)', included: true },
        { name: 'Personal Training', included: false },
        { name: 'Nutrition Planning', included: false },
        { name: 'Sauna & Steam Room', included: false },
        { name: 'Priority Booking', included: false }
      ],
      popular: false
    },
    {
      name: 'Standard',
      price: 10000,
      period: 'per month',
      features: [
        { name: 'Gym Access', included: true },
        { name: 'All Equipment', included: true },
        { name: 'Locker Room Access', included: true },
        { name: 'Unlimited Group Classes', included: true },
        { name: 'Personal Training (2/month)', included: true },
        { name: 'Basic Nutrition Plan', included: true },
        { name: 'Sauna & Steam Room', included: true },
        { name: 'Priority Booking', included: false }
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: 20000,
      period: 'per month',
      features: [
        { name: '24/7 Gym Access', included: true },
        { name: 'All Equipment', included: true },
        { name: 'Private Locker', included: true },
        { name: 'Unlimited Group Classes', included: true },
        { name: 'Personal Training (4/month)', included: true },
        { name: 'Custom Nutrition Plan', included: true },
        { name: 'Sauna & Steam Room', included: true },
        { name: 'Priority Booking', included: true }
      ],
      popular: false
    }
  ];

  const handleSubscribe = async (plan) => {
    if (!user) {
      toast.error('Please login to subscribe to a plan');
      return;
    }

    setLoading(plan);

    try {
      await updateMembership(plan.toLowerCase());
      toast.success(`Successfully subscribed to ${plan} plan!`);
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setLoading(null);
    }
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
            <h1 className="text-5xl font-bold text-white mb-6">Membership Plans</h1>
            <p className="text-xl text-dark-muted max-w-3xl mx-auto">
              Choose the perfect plan for your fitness journey. All plans include access to our world-class facilities and expert guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`card relative ${plan.popular ? 'border-2 border-primary' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">
                    PKR {plan.price.toLocaleString()}
                  </div>
                  <p className="text-dark-muted">{plan.period}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-dark-muted mr-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-white' : 'text-dark-muted'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSubscribe(plan.name)}
                  disabled={loading === plan.name || user?.membershipPlan === plan.toLowerCase()}
                  className={`w-full ${
                    plan.popular
                      ? 'btn-primary'
                      : 'btn-secondary'
                  } ${loading === plan.name || user?.membershipPlan === plan.toLowerCase() ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading === plan.name ? 'Processing...' : 
                   user?.membershipPlan === plan.toLowerCase() ? 'Current Plan' : 
                   'Subscribe Now'}
                  {loading !== plan.name && <ArrowRight className="inline ml-2 h-5 w-5" />}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Plan Comparison</h2>
            <p className="text-dark-muted text-lg">Compare all features side by side</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dark-border">
                  <th className="text-left py-4 px-4 text-white font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 text-white font-semibold">Basic</th>
                  <th className="text-center py-4 px-4 text-primary font-semibold">Standard</th>
                  <th className="text-center py-4 px-4 text-white font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody>
                {plans[0].features.map((feature, index) => (
                  <tr key={index} className="border-b border-dark-border">
                    <td className="py-4 px-4 text-white">{feature.name}</td>
                    <td className="text-center py-4 px-4">
                      {plans[0].features[index].included ? (
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-dark-muted mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-4 px-4 bg-primary/10">
                      {plans[1].features[index].included ? (
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-dark-muted mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {plans[2].features[index].included ? (
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-dark-muted mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
                <tr className="border-b border-dark-border">
                  <td className="py-4 px-4 text-white font-semibold">Price</td>
                  <td className="text-center py-4 px-4 text-white">PKR 5,000/mo</td>
                  <td className="text-center py-4 px-4 bg-primary/10 text-primary font-semibold">PKR 10,000/mo</td>
                  <td className="text-center py-4 px-4 text-white">PKR 20,000/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'Can I change my membership plan later?',
                answer: 'Yes, you can upgrade or downgrade your membership plan at any time. Changes will be reflected in your next billing cycle.'
              },
              {
                question: 'Is there a joining fee?',
                answer: 'No, we do not charge any joining fee. You only pay for your monthly membership plan.'
              },
              {
                question: 'Can I freeze my membership?',
                answer: 'Yes, you can freeze your membership for up to 3 months per year for medical reasons or travel. Contact our front desk for assistance.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept cash, bank transfers, JazzCash, EasyPaisa, and all major credit/debit cards.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-dark-muted">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
