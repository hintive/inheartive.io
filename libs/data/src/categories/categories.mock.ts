import { ICategory } from './category';

const now = new Date();

export const categoriesMock: ICategory[] = [
  {
    id: 'food',
    name: 'Food',
    createdAt: now,
    upodatedAt: now,
  },
  {
    id: 'homemade',
    name: 'Homemade',
    createdAt: now,
    upodatedAt: now,
  },
  {
    id: 'learning',
    name: 'Learning',
    createdAt: now,
    upodatedAt: now,
  },
];
