import React from 'react';
import { Card } from '../components/ui/card';
import { Target, Eye, Heart, Users, Shield, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0A2540] to-[#4A90A4] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Falcon Ride</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Connecting communities through safe, reliable, and affordable transportation
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#4A90A4]/20 to-[#0A2540]/20 mb-6">
                <Target className="text-[#4A90A4]" size={32} />
              </div>
              <h2 className="text-4xl font-bold text-[#0A2540] mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                At Falcon Ride, our mission is to provide affordable, accessible local transportation that connects people to the places they need to go. We believe everyone deserves safe and reliable rides, and we're committed to making that a reality across Canada.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We empower local drivers to earn on their own schedule while providing riders with a transportation solution they can trust. By focusing on community and quality service, we're building more than just a ride-hailing platform – we're building connections.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1568044939799-1e8010389394" 
                alt="City Transportation" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1644577544825-d77ffc24a8a0" 
                alt="Future Vision" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#4A90A4]/20 to-[#0A2540]/20 mb-6">
                <Eye className="text-[#4A90A4]" size={32} />
              </div>
              <h2 className="text-4xl font-bold text-[#0A2540] mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We envision becoming the most trusted ride-hailing platform in Canada, known for our commitment to safety, reliability, and community impact. Our goal is to expand to every major city while maintaining the personal touch that sets us apart.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through innovation and customer-focused service, we are creating a future where transportation is seamless, sustainable, and accessible to all. We are not just moving people – we are moving communities forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Safety First',
                description: 'Every driver is thoroughly vetted and background checked. Your safety is our top priority, and we never compromise on security standards.'
              },
              {
                icon: Heart,
                title: 'Transparency',
                description: 'No hidden fees, no surprises. We believe in honest pricing and clear communication with both riders and drivers.'
              },
              {
                icon: Zap,
                title: 'Reliability',
                description: 'When you need a ride, we are there. Fast pickup times, professional drivers, and consistent service you can count on.'
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#4A90A4] group hover:-translate-y-2">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#4A90A4] to-[#0A2540] text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A2540] mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A2540] to-[#4A90A4] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Falcon Ride by the Numbers</h2>
            <p className="text-xl text-gray-200">Making an impact, one ride at a time</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '50K+', label: 'Happy Riders' },
              { number: '2K+', label: 'Active Drivers' },
              { number: '6', label: 'Cities Served' },
              { number: '4.8', label: 'Average Rating' }
            ].map((stat, index) => (
              <Card key={index} className="p-8 text-center bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-5xl font-bold text-[#D4AF37] mb-2">{stat.number}</div>
                <div className="text-lg text-gray-200">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#4A90A4]/20 to-[#0A2540]/20 mb-6">
              <Users className="text-[#4A90A4]" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">Our Community</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Falcon Ride is built by a passionate team dedicated to transforming local transportation. 
              We are drivers, riders, and community members who understand the importance of reliable, 
              affordable transportation in connecting people and communities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-2 border-[#4A90A4]/20">
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4 text-center">Join Our Growing Team</h3>
              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                Whether you are looking to drive and earn on your schedule, or seeking reliable rides 
                around your city, we would love to have you as part of the Falcon Ride family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="text-center">
                  <button className="bg-gradient-to-r from-[#0A2540] to-[#4A90A4] hover:from-[#4A90A4] hover:to-[#0A2540] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                    Download App
                  </button>
                </a>
                <a href="/driver-registration" className="text-center">
                  <button className="border-2 border-[#4A90A4] text-[#4A90A4] hover:bg-[#4A90A4] hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                    Become a Driver
                  </button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
