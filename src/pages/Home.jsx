import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { 
  DollarSign, Users, Zap, Shield, Clock, CreditCard,
  Calendar, TrendingUp, Wallet, Star, ArrowRight, Download,
  MapPin, ChevronRight
} from 'lucide-react';
import { mockData } from '../utils/mockData';

const Home = () => {
  const iconMap = {
    DollarSign, Users, Zap, Shield, Clock, CreditCard,
    Calendar, TrendingUp, Wallet
  };

  return (
    
    <div className="min-h-screen">
      {/* Scrolling Banner Section */}
      <section className="bg-gradient-to-r from-[#D4AF37] via-[#B8941F] to-[#D4AF37] py-6 overflow-hidden relative" style={{ marginTop: '80px' }}>
        <div className="flex overflow-hidden w-full">
          <div 
            className="flex whitespace-nowrap space-x-12"
            style={{
              animation: 'scroll-banner 20s linear infinite',
              width: '200%'
            }}
          >
           
            <div className="flex items-center space-x-4 text-[#0A2540] flex-shrink-0">
              <span className="text-3xl font-bold">🚀</span>
              <span className="text-2xl font-bold">Launching Soon..!</span>
            </div>
            <div className="flex items-center space-x-4 text-[#0A2540] flex-shrink-0">
              <span className="text-3xl font-bold">👀</span>
              <span className="text-2xl font-bold">Stay Tuned ..!</span>
            </div>
            <div className="flex items-center space-x-4 text-[#0A2540] flex-shrink-0">
              <span className="text-3xl font-bold">⏳</span>
              <span className="text-2xl font-bold">Arriving Soon ..!</span>
            </div>
            <div className="flex items-center space-x-4 text-[#0A2540] flex-shrink-0">
              <span className="text-3xl font-bold">🔥</span>
              <span className="text-2xl font-bold">Something Big is Coming..!</span>
            </div>
            <div className="flex items-center space-x-4 text-[#0A2540] flex-shrink-0">
              <span className="text-3xl font-bold">🚖</span>
              <span className="text-2xl font-bold">Rolling Soon ..!</span>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1638981235964-248dcae99874" 
            alt="City Road" 
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: 'center 40%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/90 via-[#0A2540]/80 to-[#4A90A4]/60"></div>
        </div>
 
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Reliable Local Rides
            <span className="block text-[#D4AF37] mt-2">When You Need Them</span>
          </h1>
          <p className="text-sm md:text-lg text-gray-200 mb-6 max-w-3xl mx-auto">
            Safe, fast, and affordable rides in your city. Your trusted transportation partner across Canada.
          </p>
          <div className="flex justify-center">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#B8941F] hover:to-[#D4AF37] text-[#0A2540] font-semibold px-8 py-4 text-base shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300 hover:scale-110"
              >
                <Download className="mr-2" size={18} />
                Download App
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Get a ride in three simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockData.howItWorks.map((step, index) => (
              <div key={step.id} className="relative group">
                <Card className="p-8 text-center h-full border-2 border-gray-100 hover:border-[#4A90A4] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#4A90A4] to-[#0A2540] text-white text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A2540] mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </Card>
                {index < mockData.howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="text-[#4A90A4]" size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">Why Choose Falcon Ride?</h2>
            <p className="text-xl text-gray-600">Experience the difference with our premium service</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockData.features.map((feature) => {
              const Icon = iconMap[feature.icon];
              return (
                <Card key={feature.id} className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#4A90A4] group hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4A90A4]/20 to-[#0A2540]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-[#4A90A4]" size={28} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0A2540] mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Driver Opportunity Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A2540] to-[#4A90A4] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Drive With Us and Earn More</h2>
              <p className="text-xl text-gray-200 mb-8">
                Join our growing community of drivers and start earning on your own schedule.
              </p>
              <div className="space-y-6 mb-8">
                {mockData.driverBenefits.map((benefit) => {
                  const Icon = iconMap[benefit.icon];
                  return (
                    <div key={benefit.id} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                          <Icon className="text-[#D4AF37]" size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                        <p className="text-gray-200">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Link to="/driver-registration">
                <Button 
                  size="lg"
                  className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#0A2540] font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Apply as Driver
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1652994989723-e631e93d8304" 
                alt="Happy Driver" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Real reviews from real people</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#4A90A4]">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[#D4AF37] fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.comment}"</p>
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-bold text-[#0A2540]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cities We Serve Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">Cities We Serve</h2>
            <p className="text-xl text-gray-600">Available in major cities across Canada</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {mockData.cities.map((city, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-[#4A90A4] group cursor-pointer">
                <MapPin className="mx-auto text-[#4A90A4] mb-3 group-hover:scale-110 transition-transform duration-300" size={32} />
                <p className="font-semibold text-[#0A2540]">{city}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">Download Falcon Ride App</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Get started today and experience seamless transportation at your fingertips
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-14 hover:scale-105 transition-transform duration-300"
                />
              </a>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on the App Store" 
                  className="h-14 hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
