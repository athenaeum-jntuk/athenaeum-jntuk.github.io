// Utility to load and parse markdown posts with frontmatter

/**
 * Parse frontmatter from markdown content
 * Frontmatter format: YAML between --- delimiters
 */
export function parseFrontmatter(markdown) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);
  
  if (!match) {
    // No frontmatter, return entire content as body
    return {
      frontmatter: {},
      content: markdown
    };
  }
  
  const frontmatterText = match[1];
  const content = match[2];
  
  // Parse YAML frontmatter (simple key-value pairs)
  const frontmatter = {};
  const lines = frontmatterText.split('\n');
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      frontmatter[key] = value;
    }
  }
  
  return { frontmatter, content };
}

/**
 * Load a markdown post by filename
 * Returns post metadata and content
 */
export async function loadPost(filename) {
  try {
    const response = await fetch(`/posts/${filename}`);
    if (!response.ok) {
      throw new Error(`Failed to load post: ${filename}`);
    }
    const markdown = await response.text();
    const { frontmatter, content } = parseFrontmatter(markdown);
    
    return {
      ...frontmatter,
      content
    };
  } catch (error) {
    console.error('Error loading post:', error);
    return null;
  }
}
