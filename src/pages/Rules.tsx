import React from 'react';
import Section from '../components/common/Section';

const Rules: React.FC = () => {
    return (
        <>
            <Section className="text-center pt-24 pb-12">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Rules & Guidelines</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Please read the competition rules carefully to ensure a valid participation.
                </p>
            </Section>

            <Section className="bg-white">
                <div className="max-w-4xl mx-auto space-y-8">

                    <div className="border-b border-gray-100 pb-8">
                        <h2 className="text-2xl font-bold text-primary mb-4">General Conduct</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li>Participants must arrive 30 minutes before their scheduled time.</li>
                            <li>Respectful attire (Modest Islamic Dress Code) is mandatory for all participants and guests.</li>
                            <li>Mobile phones must be switched off or on silent mode inside the competition hall.</li>
                        </ul>
                    </div>

                    <div className="border-b border-gray-100 pb-8">
                        <h2 className="text-2xl font-bold text-primary mb-4">Evaluation Criteria</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-lg mb-2">Hifz Categories</h3>
                                <ul className="text-sm space-y-2 text-gray-600">
                                    <li><strong>Memorization (70 points):</strong> Strength of hifz, smoothness, lack of hesitation.</li>
                                    <li><strong>Tajweed (20 points):</strong> Makharij, Sifaat, Ghunnah, Madd.</li>
                                    <li><strong>Voice/Tone (10 points):</strong> Beauty of recitation.</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-lg mb-2">Tilawah Category</h3>
                                <ul className="text-sm space-y-2 text-gray-600">
                                    <li><strong>Tajweed (40 points):</strong> Application of rules.</li>
                                    <li><strong>Voice & Melody (40 points):</strong> Maqamat, control, range.</li>
                                    <li><strong>Adab (20 points):</strong> Etiquette of recitation.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-primary mb-4 text-red-700">Disqualification Conditions</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li>Late arrival without valid reason.</li>
                            <li>Disrespectful behavior towards judges or staff.</li>
                            <li>Use of any prompts or aids during recitation.</li>
                        </ul>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md text-sm text-yellow-800 mt-8">
                        <strong>Note:</strong> The decision of the Judges Panel is final and binding. No appeals will be entertained regarding scores.
                    </div>

                </div>
            </Section>
        </>
    );
};

export default Rules;
