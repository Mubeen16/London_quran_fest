import React, { useState } from 'react';
import Section from '../components/common/Section';

import { textCategories } from '../data/categories';
import { FaTrophy, FaMedal, FaDownload } from 'react-icons/fa';

interface Result {
    rank: number;
    name: string;
    category: string;
    score: number;
}

const mockResults: Result[] = [
    { rank: 1, name: 'Abdullah Ahmed', category: 'hifz-full', score: 98.5 },
    { rank: 2, name: 'Omar Farooq', category: 'hifz-full', score: 97.0 },
    { rank: 3, name: 'Zaid Ali', category: 'hifz-full', score: 96.5 },
    { rank: 1, name: 'Yusuf Khan', category: 'hifz-20', score: 99.0 },
    { rank: 2, name: 'Ibrahim Musa', category: 'hifz-20', score: 95.0 },
    { rank: 1, name: 'Bilal Hassan', category: 'tilawah', score: 98.0 },
];

const Results: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('hifz-full');

    const filteredResults = mockResults
        .filter(r => r.category === activeCategory)
        .sort((a, b) => a.rank - b.rank);

    return (
        <>
            <Section className="bg-primary-dark text-white text-center pt-24 pb-12">
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Competition Results</h1>
                <p className="text-gray-300">Celebrating the efforts of our top performers.</p>
            </Section>

            <Section>
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {textCategories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat.id
                                ? 'bg-primary text-white shadow-md'
                                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {cat.title}
                        </button>
                    ))}
                </div>

                {/* Podium (First 3) */}
                {filteredResults.length > 0 ? (
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-end">
                            {/* 2nd Place */}
                            {filteredResults.find(r => r.rank === 2) && (
                                <div className="order-2 md:order-1 bg-white p-6 rounded-lg shadow border-t-4 border-gray-400 text-center transform md:scale-95">
                                    <div className="text-4xl text-gray-400 mb-2 flex justify-center"><FaMedal /></div>
                                    <h3 className="font-bold text-xl text-primary">{filteredResults.find(r => r.rank === 2)?.name}</h3>
                                    <div className="text-gray-500 font-medium">2nd Place</div>
                                    <div className="text-2xl font-bold text-secondary mt-2">{filteredResults.find(r => r.rank === 2)?.score}</div>
                                </div>
                            )}

                            {/* 1st Place */}
                            {filteredResults.find(r => r.rank === 1) && (
                                <div className="order-1 md:order-2 bg-white p-8 rounded-lg shadow-xl border-t-4 border-yellow-400 text-center transform scale-105 z-10">
                                    <div className="text-5xl text-yellow-400 mb-2 flex justify-center"><FaTrophy /></div>
                                    <h3 className="font-bold text-2xl text-primary">{filteredResults.find(r => r.rank === 1)?.name}</h3>
                                    <div className="text-yellow-500 font-bold uppercase tracking-wider">Champion</div>
                                    <div className="text-3xl font-bold text-secondary mt-2">{filteredResults.find(r => r.rank === 1)?.score}</div>
                                </div>
                            )}

                            {/* 3rd Place */}
                            {filteredResults.find(r => r.rank === 3) && (
                                <div className="order-3 md:order-3 bg-white p-6 rounded-lg shadow border-t-4 border-yellow-700 text-center transform md:scale-95">
                                    <div className="text-4xl text-yellow-700 mb-2 flex justify-center"><FaMedal /></div>
                                    <h3 className="font-bold text-xl text-primary">{filteredResults.find(r => r.rank === 3)?.name}</h3>
                                    <div className="text-gray-500 font-medium">3rd Place</div>
                                    <div className="text-2xl font-bold text-secondary mt-2">{filteredResults.find(r => r.rank === 3)?.score}</div>
                                </div>
                            )}
                        </div>

                        {/* Tabular List for all results */}
                        <div className="bg-white rounded-lg shadow overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 text-gray-500 text-sm uppercase">
                                    <tr>
                                        <th className="px-6 py-4 font-medium">Rank</th>
                                        <th className="px-6 py-4 font-medium">Participant</th>
                                        <th className="px-6 py-4 font-medium">Score</th>
                                        <th className="px-6 py-4 font-medium text-right">Certificate</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredResults.map((result) => (
                                        <tr key={result.name} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 font-bold text-primary">#{result.rank}</td>
                                            <td className="px-6 py-4">{result.name}</td>
                                            <td className="px-6 py-4 font-mono font-medium">{result.score}</td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-gray-400 hover:text-accent transition-colors">
                                                    <FaDownload />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-20 text-gray-400">
                        No results available for this category yet.
                    </div>
                )}
            </Section>
        </>
    );
};

export default Results;
