import React from 'react';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Schedule: React.FC = () => {
    const events = [
        { day: 'Friday', date: 'June 5, 2026', time: '14:00 - 18:00', title: 'Preliminary Rounds (Hifz)', location: 'Hall A' },
        { day: 'Saturday', date: 'June 6, 2026', time: '09:00 - 13:00', title: 'Start of 5 & 10 Juz Categories', location: 'Hall B' },
        { day: 'Saturday', date: 'June 6, 2026', time: '14:00 - 19:00', title: 'Tilawah Qualification', location: 'Main Auditorium' },
        { day: 'Sunday', date: 'June 7, 2026', time: '10:00 - 16:00', title: 'Grand Finale (All Categories)', location: 'Main Auditorium' },
        { day: 'Sunday', date: 'June 7, 2026', time: '18:00 - 20:00', title: 'Award Ceremony', location: 'Main Auditorium' },
    ];

    return (
        <>
            <Section className="bg-cream pt-20 pb-10 text-center">
                <h1 className="text-4xl font-serif font-bold text-primary mb-4">Event Schedule</h1>
                <p className="text-gray-600">Mark your calendars for the upcoming competition dates and venues.</p>
            </Section>

            <Section>
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        {events.map((event, index) => (
                            <div key={index} className="flex flex-col md:flex-row border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                                <div className="md:w-1/4 bg-primary/5 p-6 flex flex-col justify-center text-center md:text-left">
                                    <span className="text-accent font-bold uppercase tracking-wider text-sm">{event.day}</span>
                                    <span className="text-2xl font-bold text-primary">{event.date.split(',')[0]}</span>
                                    <span className="text-sm text-gray-500">{event.date.split(',')[1]}</span>
                                </div>
                                <div className="p-6 flex-grow flex flex-col justify-center">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <FaClock className="text-accent" /> {event.time}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FaMapMarkerAlt className="text-accent" /> {event.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className="pt-0">
                <h2 className="text-3xl font-serif font-bold text-center text-primary mb-8">Venue Location</h2>
                <Card className="h-[400px] p-0 overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.90502179144!2d-0.12775838422973384!3d51.50735097963495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c541d11c9f%3A0x82b99216060c40e5!2sLondon!5e0!3m2!1sen!2suk!4v1628173456789!5m2!1sen!2suk"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        title="Maps"
                    ></iframe>
                </Card>
            </Section>
        </>
    );
};

export default Schedule;
