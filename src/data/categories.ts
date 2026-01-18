export interface Category {
    id: string;
    title: string;
    arabicTitle: string;
    ageLimit: string;
    description: string;
    juzCount?: number;
}

export const textCategories: Category[] = [
    {
        id: 'hifz-full',
        title: 'Hifz of Full Quran',
        arabicTitle: 'حفظ القرآن كاملاً',
        ageLimit: 'Under 25',
        description: 'Memorization of the entire Holy Quran with Tajweed.',
        juzCount: 30
    },
    {
        id: 'hifz-20',
        title: '20 Juz Category',
        arabicTitle: 'فئة ٢٠ جزء',
        ageLimit: 'Under 20',
        description: 'Memorization of 20 Juz from the Holy Quran.',
        juzCount: 20
    },
    {
        id: 'hifz-10',
        title: '10 Juz Category',
        arabicTitle: 'فئة ١٠ أجزاء',
        ageLimit: 'Under 15',
        description: 'Memorization of 10 consecutive Juz.',
        juzCount: 10
    },
    {
        id: 'hifz-5',
        title: '5 Juz Category',
        arabicTitle: 'فئة ٥ أجزاء',
        ageLimit: 'Under 12',
        description: 'Perfect for young aspiring Huffaz.',
        juzCount: 5
    },
    {
        id: 'tilawah',
        title: 'Tilawah (Recitation)',
        arabicTitle: 'التلواة',
        ageLimit: 'Open',
        description: 'Focus on beautiful voice, melody, and Maqamat.',
    },
];
