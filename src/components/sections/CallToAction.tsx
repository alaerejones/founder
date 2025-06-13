import React from 'react';
import { Mail } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="contact" className="bg-[#F9F9F9] py-24">
      <div className="max-w-5xl mx-auto px-4 lg:px-8 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-snug mb-6">
          Strategic <span className="text-primary">Partnerships</span> & Collaborations
        </h2>

        <p className="text-base md:text-lg text-[#333333] max-w-3xl mx-auto leading-relaxed mb-12">
          For partnership inquiries, collaborations, corporate projects, or strategic development discussions, contact my management team directly using the email address below.
        </p>

        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <p className="text-base font-semibold text-[#111111] mb-1">Email Management</p>
              <a href="mailto:contactonyeolu@outlook.com" className="text-primary text-lg font-medium">
                contactonyeolu@outlook.com
              </a>
            </div>
          </div>

          <p className="text-sm text-[#777777]">
            Please note: Personal inquiries are handled separately through authorized management representatives.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CallToAction;
