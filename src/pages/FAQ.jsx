import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { Card } from '../components/ui/card';
import { HelpCircle } from 'lucide-react';
import { mockData } from '../utils/mockData';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0A2540] to-[#4A90A4] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <HelpCircle size={40} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Find answers to common questions about Falcon Ride
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 border-2 border-gray-100 shadow-xl">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {mockData.faqData.map((faq) => (
                <AccordionItem 
                  key={faq.id} 
                  value={`item-${faq.id}`}
                  className="border-2 border-gray-100 rounded-lg px-6 hover:border-[#4A90A4] transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-[#0A2540] hover:text-[#4A90A4] py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          {/* Still Have Questions */}
          <Card className="mt-12 p-8 bg-gradient-to-br from-[#4A90A4]/10 to-[#0A2540]/10 border-2 border-[#4A90A4]/20 text-center">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Still Have Questions?</h2>
            <p className="text-gray-700 mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <a href="/contact">
              <button className="bg-gradient-to-r from-[#0A2540] to-[#4A90A4] hover:from-[#4A90A4] hover:to-[#0A2540] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Contact Support
              </button>
            </a>
          </Card>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] text-center mb-12">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#4A90A4] group cursor-pointer">
              <h3 className="text-2xl font-bold text-[#0A2540] mb-3 group-hover:text-[#4A90A4] transition-colors duration-300">
                For Customers
              </h3>
              <p className="text-gray-600 mb-6">
                Download our app and start booking rides
              </p>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <button className="border-2 border-[#4A90A4] text-[#4A90A4] hover:bg-[#4A90A4] hover:text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300">
                  Download App
                </button>
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#4A90A4] group cursor-pointer">
              <h3 className="text-2xl font-bold text-[#0A2540] mb-3 group-hover:text-[#4A90A4] transition-colors duration-300">
                For Drivers
              </h3>
              <p className="text-gray-600 mb-6">
                Join our team and start earning today
              </p>
              <a href="/driver-registration">
                <button className="border-2 border-[#4A90A4] text-[#4A90A4] hover:bg-[#4A90A4] hover:text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300">
                  Apply Now
                </button>
              </a>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
