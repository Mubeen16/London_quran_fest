import React from 'react';
import Section from '../components/common/Section';
import Card from '../components/common/Card';

const About: React.FC = () => {
    return (
        <>
            <Section className="text-center pt-24 pb-12 bg-cream">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">About The Competition</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Inspiring a generation to connect with the Book of Allah.
                </p>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <Card className="p-8">
                        <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            The London Quran Fest is dedicated to encouraging the youth to memorize, understand,
                            and recite the Holy Quran. We aim to create an environment where students can compete in goodness
                            and elevate their relationship with the Quran.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Established in 2025, this competition has grown to become a beacon of excellence, attracting
                            participants from across the UK.
                        </p>
                    </Card>
                    <div className="relative">
                        <div className="bg-accent/10 rounded-lg p-8 border-l-4 border-accent">
                            <h3 className="text-xl font-bold text-primary mb-2">Competition Levels</h3>
                            <ul className="space-y-2 text-gray-600 mb-6">
                                <li>• <strong>Level 1:</strong> 8 & Below</li>
                                <li>• <strong>Level 2:</strong> 9 - 13 Years</li>
                                <li>• <strong>Level 3:</strong> 9 - 18 Years</li>
                                <li>• <strong>Level 4:</strong> 9 - 18 Years</li>
                            </ul>
                            <h3 className="text-xl font-bold text-primary mb-2">Eligibility</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Must be a resident of the UK.</li>
                                <li>• Must not be a previous 1st place winner in the same category.</li>
                                <li>• Must recite with Tajweed rules.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default About;
