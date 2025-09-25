export const categories = [
  {
    id: 'cat1',
    name: 'Web Development',
    subcategories: [
      { id: 'sub1', name: 'React' },
      { id: 'sub2', name: 'Node.js' },
    ],
  },
  {
    id: 'cat2',
    name: 'DIY Projects',
    subcategories: [],
  },
];

export const guides = [
  {
    id: 'guide1',
    categoryId: 'sub1',
    title: 'Getting Started with React Hooks',
    description: 'A comprehensive guide to understanding and using React Hooks.',
    image: 'https://via.placeholder.com/300x180.png?text=React+Hooks',
    tags: ['React', 'JavaScript', 'Frontend'],
    isFavorite: true,
  },
  {
    id: 'guide2',
    categoryId: 'sub2',
    title: 'Building a REST API with Express',
    description: 'Learn how to build a robust REST API using Node.js and Express.',
    image: 'https://via.placeholder.com/300x180.png?text=Node+Express',
    tags: ['Node.js', 'Backend', 'API'],
    isFavorite: false,
  },
  {
    id: 'guide3',
    categoryId: 'cat2',
    title: 'How to Build a Bookshelf',
    description: 'A step-by-step guide to building a simple and sturdy bookshelf.',
    image: 'https://via.placeholder.com/300x180.png?text=DIY+Bookshelf',
    tags: ['Woodworking', 'DIY'],
    isFavorite: true,
  },
    {
    id: 'guide4',
    categoryId: 'sub1',
    title: 'State Management with Redux',
    description: 'An in-depth look at managing application state with Redux.',
    image: 'https://via.placeholder.com/300x180.png?text=Redux',
    tags: ['React', 'Redux', 'State Management'],
    isFavorite: false,
  },
];