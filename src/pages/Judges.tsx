import React from 'react';
import Section from '../components/common/Section';
import Card from '../components/common/Card';

const judges = [
    {
        name: 'Sheikh Abdullah Basfar',
        title: 'World Renowned Qari',
        bio: 'Secretary General of the Holy Quran Memorization International Organization.',
        image: 'https://via.placeholder.com/150?text=Sheikh+Abdullah' // Placeholder
    },
    {
        name: 'Dr. Ahmed Al-Maasarawi',
        title: 'Former Sheikh Al-Qurra of Egypt',
        bio: 'An authority in the ten Qira’at and a professor of Hadith.',
        image: 'https://via.placeholder.com/150?text=Dr.+Ahmed'
    },
    {
        name: 'Sheikh Abu Bakr Al-Shatri',
        title: 'Imam & Qari',
        bio: 'Known for his emotional recitation and dedication to teaching Tajweed.',
        image: 'https://via.placeholder.com/150?text=Sheikh+Shatri'
    }
];

const Judges: React.FC = () => {
    return (
        <>
            <Section className="text-center pt-24 pb-12">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Distinguished Judges</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Our panel consists of world-renowned scholars and certified reciters (Ijazah holders)
                    ensuring the highest standards of evaluation.
                </p>
            </Section>

            <Section className="bg-cream">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {judges.map((judge, index) => (
                        <Card key={index} animate className="text-center hover:shadow-xl transition-shadow">
                            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent">
                                <img src={judge.image} alt={judge.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-1">{judge.name}</h3>
                            <p className="text-accent font-serif italic mb-4">{judge.title}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">{judge.bio}</p>
                        </Card>
                    ))}
                </div>
            </Section>
        </>
    );
};

export default Judges;
