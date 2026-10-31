import React from 'react';
import { Zap, Truck, CreditCard, ShieldCheck } from 'lucide-react';

export const TextTicker: React.FC = () => {
  const items = [
    {
      icon: <Zap className="w-3.5 h-3.5 text-white shrink-0" />,
      text: 'COD (CASH ON DELIVERY NOW AVAILABLE)',
    },
    {
      icon: <Truck className="w-3.5 h-3.5 text-white shrink-0" />,
      text: 'ISLAND WIDE FREE DELIVERY',
    },
    {
      icon: <CreditCard className="w-3.5 h-3.5 text-white shrink-0" />,
      text: 'PAY WITH CARD • KOKO • MINTPAY • SECURE CHECKOUT',
    },
    {
      icon: <ShieldCheck className="w-3.5 h-3.5 text-white shrink-0" />,
      text: '100% GENUINE PRODUCTS GUARANTEED',
    },
  ];

  return (
    <div className="w-full bg-[#0C1B2A] border-y border-white/10 text-white overflow-hidden py-2.5 select-none">
      <div className="mo-ticker-track flex items-center whitespace-nowrap">
        {/* Render 3 identical sets to ensure a perfectly seamless loop */}
        {[0, 1, 2].map((setIndex) => (
          <div key={setIndex} className="flex items-center shrink-0">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center">
                <div className="flex items-center gap-2 px-6 text-[12px] sm:text-[13px] font-bold tracking-wider uppercase text-white/95">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
                {/* Dot divider */}
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 mx-1 inline-block shrink-0" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

