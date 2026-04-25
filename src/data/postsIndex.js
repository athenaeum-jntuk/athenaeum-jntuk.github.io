// Posts Index - Metadata for all markdown posts
// This file lists all available posts with their metadata
// Actual content is stored in public/posts/*.md files

export const postsIndex = [
  {
    slug: 'the-future-of-peer-learning',
    file: 'the-future-of-peer-learning.md',
    category: 'Insights',
    date: '2024-03-15',
    readingTime: '5 min',
    excerpt: 'How decentralized knowledge exchange is reshaping how we learn and grow together in modern ecosystems.'
  },
  {
    slug: 'building-systems-that-scale',
    file: 'building-systems-that-scale.md',
    category: 'Technical',
    date: '2024-03-10',
    readingTime: '8 min',
    excerpt: 'Lessons from designing infrastructure that grows with your team and complexity.'
  },
  {
    slug: 'ecosystem-update-q1-2024',
    file: 'ecosystem-update-q1-2024.md',
    category: 'Announcements',
    date: '2024-03-01',
    readingTime: '4 min',
    excerpt: 'What we\'ve built, what we\'ve learned, and what\'s coming next for Athenaeum.'
  },
  {
    slug: 'design-systems-for-developers',
    file: 'design-systems-for-developers.md',
    category: 'Technical',
    date: '2024-02-20',
    readingTime: '6 min',
    excerpt: 'A practical guide to understanding and contributing to design systems without being a designer.'
  },
  {
    slug: 'mental-models-for-systems-thinking',
    file: 'mental-models-for-systems-thinking.md',
    category: 'Insights',
    date: '2024-02-10',
    readingTime: '7 min',
    excerpt: 'Frameworks for understanding complex systems and finding leverage points for change.'
  },
  {
    slug: 'database-optimization-patterns',
    file: 'database-optimization-patterns.md',
    category: 'Technical',
    date: '2024-02-01',
    readingTime: '9 min',
    excerpt: 'Common performance bottlenecks and proven strategies for resolving them.'
  }
];

// Helper function to get post metadata by slug
export const getPostMetaBySlug = (slug) => {
  return postsIndex.find(post => post.slug === slug);
};

// Helper function to get posts by category
export const getPostsByCategory = (category) => {
  return postsIndex.filter(post => post.category === category);
};

// Get all unique categories
export const getCategories = () => {
  return [...new Set(postsIndex.map(post => post.category))];
};
