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
    <div className="flex items-center gap-2 sm:gap-2.5 select-none font-sans">
      <span className="text-[#000000] text-sm sm:text-base font-semibold mr-2 sm:mr-3">
        Ends in
      </span>

      {/* Hours */}
      <span className="inline-flex items-center justify-center min-w-[36px] sm:min-w-[42px] h-[34px] sm:h-[38px] px-2 rounded-[8px] bg-[#FEECEC] text-[#FF0000] text-sm sm:text-base font-bold">
        {pad(hours)}
      </span>

      <span className="text-[#000000] text-sm sm:text-base font-bold px-0.5">:</span>

      {/* Minutes */}
      <span className="inline-flex items-center justify-center min-w-[36px] sm:min-w-[42px] h-[34px] sm:h-[38px] px-2 rounded-[8px] bg-[#FEECEC] text-[#FF0000] text-sm sm:text-base font-bold">
        {pad(minutes)}
      </span>

      <span className="text-[#000000] text-sm sm:text-base font-bold px-0.5">:</span>

      {/* Seconds */}
      <span className="inline-flex items-center justify-center min-w-[36px] sm:min-w-[42px] h-[34px] sm:h-[38px] px-2 rounded-[8px] bg-[#FEECEC] text-[#FF0000] text-sm sm:text-base font-bold">
        {pad(seconds)}
      </span>

      <span className="text-[#000000] text-sm sm:text-base font-bold px-0.5">:</span>

      {/* Sub-second / Milliseconds counter 18 */}
      <span className="inline-flex items-center justify-center min-w-[36px] sm:min-w-[42px] h-[34px] sm:h-[38px] px-2 rounded-[8px] bg-[#FEECEC] text-[#FF0000] text-sm sm:text-base font-bold">
        18
      </span>
    </div>
  );
};
