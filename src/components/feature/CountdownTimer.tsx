import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountdownTimer: React.FC = () => {
    const calculateTimeLeft = (): TimeLeft => {
        // Set competition date (e.g., 3 months from now or fixed date)
        const competitionDate = new Date('2026-06-01T09:00:00');
        const now = new Date();
        const difference = competitionDate.getTime() - now.getTime();

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const timeUnits = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
    ];

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-xl font-serif text-accent mb-6 tracking-wide">Competition Begins In</h3>
            <div className="flex gap-4 md:gap-8 justify-center">
                {timeUnits.map((unit) => (
                    <div key={unit.label} className="flex flex-col items-center">
                        <motion.div
                            key={unit.value}
                            initial={{ scale: 0.9, opacity: 0.8 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="w-16 h-16 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm border border-accent/20 rounded-lg flex items-center justify-center shadow-lg"
                        >
                            <span className="text-2xl md:text-4xl font-bold text-white font-mono">
                                {String(unit.value).padStart(2, '0')}
                            </span>
                        </motion.div>
                        <span className="text-xs md:text-sm text-gray-300 mt-2 uppercase tracking-wider">{unit.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountdownTimer;
