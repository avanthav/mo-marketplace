'use client';

import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialHours = 3,
  initialMinutes = 12,
  initialSeconds = 42,
}) => {
  const [totalSeconds, setTotalSeconds] = useState(
    initialHours * 3600 + initialMinutes * 60 + initialSeconds
  );

  useEffect(() => {
    if (totalSeconds <= 0) return;

    const timer = setInterval(() => {
      setTotalSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [totalSeconds]);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex items-center gap-1 font-mono text-xs md:text-sm font-bold text-[#FF0000]">
      <span className="text-[#4A4A4A] font-sans text-xs font-medium mr-1.5 hidden sm:inline">
        Ends in
      </span>
      <span className="bg-[#FF0000] text-white px-1.5 py-0.5 rounded text-xs">
        {pad(hours)}
      </span>
      <span className="text-[#FF0000]">:</span>
      <span className="bg-[#FF0000] text-white px-1.5 py-0.5 rounded text-xs">
        {pad(minutes)}
      </span>
      <span className="text-[#FF0000]">:</span>
      <span className="bg-[#FF0000] text-white px-1.5 py-0.5 rounded text-xs">
        {pad(seconds)}
      </span>
    </div>
  );
};
