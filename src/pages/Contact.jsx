import React from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-br from-[#0A2540] to-[#4A90A4] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Get in Touch</h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
            {/* Contact Info Cards */}
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#4A90A4] group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#4A90A4]/20 to-[#0A2540]/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-[#4A90A4]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-2">Email Us</h3>
              <a href="mailto:admin@falconride.ca" className="text-[#4A90A4] hover:underline">
                admin@falconride.ca
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#4A90A4] group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#4A90A4]/20 to-[#0A2540]/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="text-[#4A90A4]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-2">Our Location</h3>
              <p className="text-gray-600">
                Serving across Canada
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#4A90A4] group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#4A90A4]/20 to-[#0A2540]/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="text-[#4A90A4]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-2">Response Time</h3>
              <p className="text-gray-600">
                Within 24 hours
              </p>
            </Card>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <Card className="p-4 border-2 border-gray-100 overflow-hidden">
              <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto text-gray-400 mb-3" size={48} />
                  <p className="text-gray-600 font-medium">Serving across Canada</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Available in Toronto, Mississauga, Brampton, Sudbury, Ottawa, and Hamilton
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-16 bg-gradient-to-br from-[#0A2540] to-[#4A90A4] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8">
            Download the app or join our driver community today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#0A2540] font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Download App
              </Button>
            </a>
            <a href="/driver-registration">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0A2540] font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                Become a Driver
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
