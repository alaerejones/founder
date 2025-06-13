import React from 'react';
import { Mail } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="bg-[#F9F9F9] py-24">
      <div className="max-w-5xl mx-auto px-4 lg:px-8 text-center">

        <h2 className="text-[32px] font-bold text-[#111111] leading-snug mb-6">
          Strategic <span className="text-primary">Partnerships</span> & Collaborations
        </h2>

        <p className="text-[16px] text-[#333333] max-w-3xl mx-auto leading-relaxed mb-12">
          For vetted partnership inquiries, collaborations, corporate projects, or strategic development discussions, contact my management team directly using the email address provided below.
        </p>

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="text-[16px] font-semibold text-[#111111] mb-1">Email Management</p>
              <a href="mailto:contactonyeolu@outlook.com" className="text-primary text-[16px] font-medium">
                contactonyeolu@outlook.com
              </a>
            </div>
          </div>

          <p className="text-[14px] text-[#777777] mt-4">
            Please note: Personal inquiries are handled separately through authorized management representatives.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default CallToAction;
