// Posts Data Structure
// Scalable data for the Athenaeum publishing platform

export const postsData = [
  {
    slug: 'the-future-of-peer-learning',
    title: 'The Future of Peer Learning',
    excerpt: 'How decentralized knowledge exchange is reshaping how we learn and grow together in modern ecosystems.',
    category: 'Insights',
    date: '2024-03-15',
    readingTime: '5 min',
    content: '<p class="mb-6 leading-relaxed">The traditional model of education — top-down, one-to-many, credential-focused — is being fundamentally challenged by a new paradigm: decentralized peer learning.</p><h2 class="font-display font-light text-athen-cream text-2xl mb-4 mt-8">The Shift</h2><p class="mb-6 leading-relaxed">In peer learning ecosystems, every participant is both teacher and student. This bidirectional flow of knowledge creates a dynamic where expertise is fluid, context-dependent, and continuously evolving.</p><h2 class="font-display font-light text-athen-cream text-2xl mb-4 mt-8">Why It Works</h2><p class="mb-6 leading-relaxed">Research shows that peer-to-peer knowledge transfer often leads to deeper retention because teaching requires synthesis. When you explain a concept to someone else, you restructure your own understanding.</p><h2 class="font-display font-light text-athen-cream text-2xl mb-4 mt-8">The Athenaeum Model</h2><p class="mb-6 leading-relaxed">Our ecosystem takes this further by matching complementary skill sets. A systems engineer teaches database optimization while learning visual communication. This cross-pollination creates unexpected connections.</p><h2 class="font-display font-light text-athen-cream text-2xl mb-4 mt-8">Looking Ahead</h2><p class="leading-relaxed">As AI democratizes access to information, the value of human-curated, context-rich exchange increases. Peer learning isn\'t just an alternative — it\'s becoming essential.</p>'
  },
  {
    slug: 'building-systems-that-scale',
    title: 'Building Systems That Scale',
    excerpt: 'Lessons from designing infrastructure that grows with your team and complexity.',
    category: 'Technical',
    date: '2024-03-10',
    readingTime: '8 min',
    content: '<p class="mb-6 leading-relaxed">Every engineer has experienced the moment: a system that worked perfectly at small scale begins to break as complexity grows. The question isn\'t if this will happen, but when.</p><h2 class="font-display font-light text-athen-cream text-2xl mb-4 mt-8">First Principles</h2><p class="mb-6 leading-relaxed">Scalability starts with architectural decisions made before the first line of code. Separation of concerns, clear interfaces, and state management patterns aren\'t academic — they\'re survival mechanisms.</p><h2 class="font-display font-light text-athen-cream text-2xl mb-4 mt-8">The Hidden Complexity</h2><p class="mb-6 leading-relaxed">Most scaling failures happen at the seams: between services, between teams, between environments. Investing in observability and debugging tools upfront pays dividends exponentially.</p><h2 class="font-display font-light text-athen-cream text-2xl mb-4 mt-8">People Scale Too</h2><p class="mb-6 leading-relaxed">The most complex system in any organization is the team itself. Documentation, onboarding, and knowledge sharing aren\'t nice-to-haves — they\'re system components that need the same attention as code.</p><h2 class="font-display font-light text-athen-cream text-2xl mb-4 mt-8">Practical Steps</h2><ul class="list-disc pl-6 mb-6 space-y-2"><li>Measure before optimizing</li><li>Build rollback mechanisms from day one</li><li>Document architectural decisions, not just code</li><li>Design for failure, not success</li></ul>'
  },
  {
    slug: 'ecosystem-update-q1-2024',
    title: 'Ecosystem Update: Q1 2024',
    excerpt: 'What we\'ve built, what we\'ve learned, and what\'s coming next for Athenaeum.',
    category: 'Announcements',
    date: '2024-03-01',
    readingTime: '4 min',
    content: '<p class="mb-6 leading-relaxed">The first quarter of 2024 has been transformative for Athenaeum. Here\'s a look at what we\'ve accomplished and where we\'re headed.</p><h2 class="font-display font-light text-athen-cream text-2xl mb-4 mt-8">New Tracks</h2><p class="mb-6 leading-relaxed">We\'ve expanded from three to five core tracks: Creative Team, Systems Team, Database Team, Marketing, and Cybersecurity. This expansion allows for more specialized skill exchange while maintaining ecosystem cohesion.</p><h2 class="font-display font-light text-athen-cream text-2xl mb-4 mt-8">Platform Improvements</h2><p class="mb-6 leading-relaxed">Our matching algorithm now considers temporal availability, learning style preferences, and project context. Session success rates have increased by 34% as a result.</p><h2 class="font-display font-light text-athen-cream text-2xl mb-4 mt-8">Community Growth</h2><p class="mb-6 leading-relaxed">We\'ve welcomed 47 new members across all tracks. The diversity of backgrounds has enriched our knowledge base and created unexpected cross-domain collaborations.</p><h2 class="font-display font-light text-athen-cream text-2xl mb-4 mt-8">What\'s Next</h2><p class="leading-relaxed">Q2 will focus on public knowledge sharing, expanded mentorship programs, and the launch of our first open-source tools for peer learning management.</p>'
  },
  {
    slug: 'design-systems-for-developers',
    title: 'Design Systems for Developers',
    excerpt: 'A practical guide to understanding and contributing to design systems without being a designer.',
    category: 'Technical',
    date: '2024-02-20',
    readingTime: '6 min',
    content: '<p class="mb-6 leading-relaxed">Design systems often feel like designer territory. But the best systems are built through collaboration between design and engineering.</p><h2 class="font-display font-light text-athen-cream text-2xl mb-4 mt-8">Beyond Component Libraries</h2><p class="mb-6 leading-relaxed">A design system is more than a set of UI components. It\'s a shared language, decision framework, and documentation system. Understanding the principles behind design tokens helps you make better implementation decisions.</p><h2 class="font-display font-light text-athen-cream text-2xl mb-4 mt-8">The Developer\'s Role</h2><p class="mb-6 leading-relaxed">Your contribution isn\'t just implementing designs. It\'s identifying edge cases, suggesting performance optimizations, and ensuring accessibility requirements are met at the component level.</p><h2 class="font-display font-light text-athen-cream text-2xl mb-4 mt-8">Practical Tips</h2><ul class="list-disc pl-6 mb-6 space-y-2"><li>Use design tokens instead of hardcoded values</li><li>Document component constraints and variations</li><li>Test components across browsers and devices</li><li>Contribute back when you find gaps</li></ul><h2 class="font-display font-light text-athen-cream text-2xl mb-4 mt-8">Breaking the Silo</h2><p class="leading-relaxed">When engineers understand design intent and designers understand technical constraints, the entire system improves. The best design systems are built by teams, not individuals.</p>'
  },
  {
    slug: 'mental-models-for-systems-thinking',
    title: 'Mental Models for Systems Thinking',
    excerpt: 'Frameworks for understanding complex systems and finding leverage points for change.',
    category: 'Insights',
    date: '2024-02-10',
    readingTime: '7 min',
    content: '<p class="mb-6 leading-relaxed">Systems thinking is the art of seeing connections. It\'s the difference between fixing symptoms and addressing root causes.</p><h2 class="font-display font-light text-athen-cream text-2xl mb-4 mt-8">Feedback Loops</h2><p class="mb-6 leading-relaxed">Every system has reinforcing and balancing feedback loops. Reinforcing loops amplify change (viral growth, compound interest). Balancing loops stabilize systems (thermostats, supply-demand). Understanding which loop dominates in a situation is key to intervention.</p><h2 class="font-display font-light text-athen-cream text-2xl mb-4 mt-8">Leverage Points</h2><p class="mb-6 leading-relaxed">Donella Meadows identified 12 places to intervene in a system. The most effective leverage points are often the hardest to change: the paradigm or mindset that defines the system. The easiest points (parameters, constants) often have minimal impact.</p><h2 class="font-display font-light text-athen-cream text-2xl mb-4 mt-8">Emergence</h2><p class="mb-6 leading-relaxed">System behavior emerges from component interactions, not component properties. You can\'t predict a system\'s behavior by studying its parts in isolation. This is why reductionist approaches often fail with complex problems.</p><h2 class="font-display font-light text-athen-cream text-2xl mb-4 mt-8">Practical Application</h2><p class="leading-relaxed">When facing a problem, ask: What feedback loops are operating? What\'s the time horizon of effects? Who holds what power? Where are the information flows blocked? Systems thinking isn\'t a technique — it\'s a way of seeing.</p>'
  },
  {
    slug: 'database-optimization-patterns',
    title: 'Database Optimization Patterns',
    excerpt: 'Common performance bottlenecks and proven strategies for resolving them.',
    category: 'Technical',
    date: '2024-02-01',
    readingTime: '9 min',
    content: '<p class="mb-6 leading-relaxed">Database performance is often the bottleneck in production systems. Understanding common patterns and their solutions can prevent many headaches.</p><h2 class="font-display font-light text-athen-cream text-2xl mb-4 mt-8">N+1 Query Problem</h2><p class="mb-6 leading-relaxed">The classic: one query to get a list, then N queries for related data. Solutions include eager loading, data loaders, and denormalization. The right choice depends on your access patterns.</p><h2 class="font-display font-light text-athen-cream text-2xl mb-4 mt-8">Indexing Strategy</h2><p class="mb-6 leading-relaxed">Indexes are a trade-off: read speed vs. write overhead. Start with indexes on foreign keys and frequently queried columns. Use composite indexes for multi-column queries. Monitor index usage — unused indexes cost performance without benefit.</p><h2 class="font-display font-light text-athen-cream text-2xl mb-4 mt-8">Connection Pooling</h2><p class="mb-6 leading-relaxed">Every new connection has overhead. Pooling reuses connections, but pool sizing is critical. Too small: contention. Too large: database load. Start with CPU core count and tune based on metrics.</p><h2 class="font-display font-light text-athen-cream text-2xl mb-4 mt-8">Caching Layers</h2><p class="mb-6 leading-relaxed">Application-level caching (Redis, Memcached) can dramatically reduce database load. But cache invalidation is hard. Consider cache-aside patterns, TTL strategies, and write-through vs. write-back approaches.</p><h2 class="font-display font-light text-athen-cream text-2xl mb-4 mt-8">When to Denormalize</h2><p class="leading-relaxed">Normalization reduces redundancy but increases joins. Denormalization improves read performance at the cost of write complexity and data consistency. The decision should be based on read/write ratios and query complexity.</p>'
  }
];

// Helper function to get post by slug
export const getPostBySlug = (slug) => {
  return postsData.find(post => post.slug === slug);
};

// Helper function to get posts by category
export const getPostsByCategory = (category) => {
  return postsData.filter(post => post.category === category);
};

// Get all unique categories
export const getCategories = () => {
  return [...new Set(postsData.map(post => post.category))];
};
