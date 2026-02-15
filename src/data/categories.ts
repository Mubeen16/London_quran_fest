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
        id: 'level-1',
        title: 'Level 1',
        arabicTitle: 'المستوى الأول',
        ageLimit: '8 & below',
        description: 'Surah Al-Fil to An-Nas (Age: 8 & below)',
        juzCount: 0 // Partial Juz
    },
    {
        id: 'level-2',
        title: 'Level 2',
        arabicTitle: 'المستوى الثاني',
        ageLimit: '9 - 13',
        description: 'Surah Al-A\'la to An-Nas (Age: 9 - 13)',
        juzCount: 0 // Partial Juz
    },
    {
        id: 'level-3',
        title: 'Level 3',
        arabicTitle: 'المستوى الثالث',
        ageLimit: '9 - 18',
        description: 'Any 2 Juz (Amma + Mulk) + Surah Yasin (Age: 9 to 18)',
        juzCount: 2
    },
    {
        id: 'level-4',
        title: 'Level 4 (Higher Level)',
        arabicTitle: 'المستوى الرابع',
        ageLimit: '9 - 18',
        description: 'Any 5 Juz (Consecutive) (Age: 9 to 18)',
        juzCount: 5
    }
];
