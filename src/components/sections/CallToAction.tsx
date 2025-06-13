import React from 'react';
import { Mail } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="contact" className="bg-[#FFFFFF] pt-16 pb-0">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">

        <div className="mb-12 text-center space-y-5">
          <h2 className="text-[24px] font-bold leading-snug text-[#111111]">
            Partnership & <span className="text-primary">Institutional Engagements</span>
          </h2>

          <p className="text-[16px] text-[#333333] leading-relaxed max-w-3xl mx-auto">
            For strategic partnerships, institutional collaborations, policy consultations, investment discussions, or leadership engagements, please contact my office via the management team. All correspondence is reviewed and handled with utmost discretion.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <p className="text-[16px] font-semibold text-[#111111] mb-1">Office of Management</p>
              <a href="mailto:contactonyeolu@outlook.com" className="text-primary text-[18px] font-medium">
                contactonyeolu@outlook.com
              </a>
            </div>
          </div>

          <p className="text-sm text-[#777777] text-center max-w-md">
            Kindly note: Personal inquiries are not processed through this channel.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CallToAction;
