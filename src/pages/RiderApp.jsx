import React from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { 
  Smartphone, MapPin, Lock, FileText, Star, Clock,
  Shield, CreditCard, Download
} from 'lucide-react';
import { mockData } from '../utils/mockData';

const RiderApp = () => {
  const iconMap = {
    Smartphone, MapPin, Lock, FileText
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#4A90A4] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Ride, Your Way
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Download the Falcon Ride app and experience seamless transportation at your fingertips
            </p>
          </div>

          {/* App Store Badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play" 
                className="h-16"
              />
            </a>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="Download on the App Store" 
                className="h-16"
              />
            </a>
          </div>

          {/* App Preview */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-white/10 backdrop-blur-md border-2 border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Available Now</h3>
                  <p className="text-gray-200 mb-6">
                    Get instant access to reliable rides across Canada. Download now and get your first ride free!
                  </p>
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#D4AF37]">4.8</div>
                      <div className="flex justify-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="text-[#D4AF37] fill-current" size={16} />
                        ))}
                      </div>
                      <p className="text-sm text-gray-300 mt-1">App Rating</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#D4AF37]">50K+</div>
                      <p className="text-sm text-gray-300 mt-2">Downloads</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-96 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl border-4 border-white/30 shadow-2xl flex items-center justify-center">
                      <Smartphone className="text-white/50" size={120} />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for a perfect ride experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockData.appFeatures.map((feature) => {
              const Icon = iconMap[feature.icon];
              return (
                <Card key={feature.id} className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#4A90A4] group hover:-translate-y-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#4A90A4]/20 to-[#0A2540]/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-[#4A90A4]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2540] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
              How to Use the App
            </h2>
            <p className="text-xl text-gray-600">
              Get started in just a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                icon: Download,
                title: 'Download App',
                description: 'Get the Falcon Ride app from App Store or Google Play'
              },
              {
                step: '2',
                icon: Smartphone,
                title: 'Create Account',
                description: 'Sign up with your email and phone number'
              },
              {
                step: '3',
                icon: MapPin,
                title: 'Request Ride',
                description: 'Enter your destination and request a ride'
              },
              {
                step: '4',
                icon: CreditCard,
                title: 'Pay & Go',
                description: 'Pay securely and enjoy your ride'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#4A90A4] to-[#0A2540] text-white text-3xl font-bold mb-6 shadow-lg">
                    {item.step}
                  </div>
                  <Icon className="mx-auto text-[#4A90A4] mb-4" size={40} />
                  <h3 className="text-xl font-bold text-[#0A2540] mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
              Why Riders Love Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Fast Pickup',
                description: 'Average wait time under 5 minutes'
              },
              {
                icon: Shield,
                title: 'Safe & Secure',
                description: 'All drivers are background checked'
              },
              {
                icon: CreditCard,
                title: 'Cashless Payment',
                description: 'Pay securely through the app'
              },
              {
                icon: Star,
                title: 'Top Rated',
                description: '4.8 stars from thousands of riders'
              },
              {
                icon: MapPin,
                title: 'Live Tracking',
                description: 'Track your driver in real-time'
              },
              {
                icon: FileText,
                title: 'Ride History',
                description: 'Access all your receipts anytime'
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#4A90A4] group">
                  <Icon className="text-[#4A90A4] mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
                  <h3 className="text-xl font-bold text-[#0A2540] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A2540] to-[#4A90A4] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Download the app now and get your first ride free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play" 
                className="h-16"
              />
            </a>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="Download on the App Store" 
                className="h-16"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RiderApp;
