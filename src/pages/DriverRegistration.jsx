import React from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { 
  Calendar, TrendingUp, Wallet, Shield, Clock, Award,
  Download, Smartphone
} from 'lucide-react';

const DriverRegistration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 sm:pt-32 pb-12 sm:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2540] mb-4 sm:mb-6">
            Drive with Falcon Ride
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Join our community of drivers and start earning on your own schedule
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
          <Card className="p-5 sm:p-8 text-center border-2 border-[#4A90A4]/20 hover:border-[#4A90A4] transition-all duration-300 hover:shadow-xl">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#4A90A4]/20 to-[#0A2540]/20 mb-6">
              <Calendar className="text-[#4A90A4]" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-[#0A2540] mb-3">Flexible Hours</h3>
            <p className="text-gray-600 leading-relaxed">
              Drive when you want, where you want. You're in complete control of your schedule.
            </p>
          </Card>

          <Card className="p-5 sm:p-8 text-center border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#B8941F]/20 mb-6">
              <TrendingUp className="text-[#D4AF37]" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-[#0A2540] mb-3">Earn More</h3>
            <p className="text-gray-600 leading-relaxed">
              Competitive rates and surge pricing during peak hours. Your time is valuable.
            </p>
          </Card>

          <Card className="p-5 sm:p-8 text-center border-2 border-[#4A90A4]/20 hover:border-[#4A90A4] transition-all duration-300 hover:shadow-xl">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#4A90A4]/20 to-[#0A2540]/20 mb-6">
              <Wallet className="text-[#4A90A4]" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-[#0A2540] mb-3">Weekly Payouts</h3>
            <p className="text-gray-600 leading-relaxed">
              Get paid every week. Fast, reliable payments directly to your account.
            </p>
          </Card>
        </div>

        {/* Main CTA Section */}
        <Card className="p-6 sm:p-8 md:p-12 bg-gradient-to-br from-[#0A2540] to-[#4A90A4] text-white text-center border-0 shadow-2xl mb-10 sm:mb-16">
          <Smartphone className="mx-auto mb-4 sm:mb-6 text-[#D4AF37]" size={64} />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Download the Driver App
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-10 max-w-2xl mx-auto">
            Get started in minutes. Download our driver app, complete your profile, and start earning today.
          </p>
          
          {/* App Store Badges */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play" 
                className="h-16"
              />
            </a>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="Download on the App Store" 
                className="h-16"
              />
            </a>
          </div>

          <div className="inline-flex items-center justify-center space-x-2 text-[#D4AF37]">
            <Download size={20} />
            <span className="text-sm font-medium">Available on iOS and Android</span>
          </div>
        </Card>

        {/* Additional Benefits */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A2540] text-center mb-8 sm:mb-12">
            Why Drivers Choose Falcon Ride
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Safe & Secure',
                description: 'Comprehensive insurance coverage and 24/7 safety support for all drivers.'
              },
              {
                icon: Clock,
                title: '24/7 Support',
                description: 'Round-the-clock assistance whenever you need help on the road.'
              },
              {
                icon: Award,
                title: 'Driver Rewards',
                description: 'Earn bonuses and rewards for excellent service and high ratings.'
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#4A90A4]">
                  <Icon className="text-[#4A90A4] mb-4" size={40} />
                  <h3 className="text-xl font-bold text-[#0A2540] mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Requirements Section */}
        <Card className="p-5 sm:p-8 bg-blue-50 border-2 border-blue-200">
          <h3 className="text-2xl font-bold text-[#0A2540] mb-6 text-center">Driver Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold text-[#0A2540] mb-3">Basic Requirements:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Must be 18 years or older</li>
                <li>• Valid driver's license</li>
                <li>• Clean driving record</li>
                <li>• Pass background check</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#0A2540] mb-3">Vehicle Requirements:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Vehicle 2015 or newer</li>
                <li>• Valid insurance</li>
                <li>• Current registration</li>
                <li>• 4-door vehicle in good condition</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DriverRegistration;
