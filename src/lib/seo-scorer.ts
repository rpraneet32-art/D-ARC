// SEO Scoring Engine based on the 27-point SEO Rules (Total: 100 points)
// 1. URL Structure (5)
// 2. Meta Title (10)
// 3. Meta Description (10)
// 4. Heading Structure (10)
// 5. Content Optimization (15)
// 6. Image SEO (10)
// 7. Internal Linking (10)
// 8. Schema (5)
// 9. FAQ (5)
// 10. EEAT (5)
// 11. Core Web Vitals (5)
// 12. Technical SEO (10)

export interface SeoMetrics {
  urlScore: number;
  titleScore: number;
  descScore: number;
  headingScore: number;
  contentScore: number;
  imageScore: number;
  linkScore: number;
  schemaScore: number;
  faqScore: number;
  eeatScore: number;
  cwvScore: number;
  techScore: number;
  totalScore: number;
}

export interface SeoPageData {
  url: string;
  title: string;
  description: string;
  h1Count: number;
  hasPrimaryKeywordInH1: boolean;
  wordCount: number;
  primaryKeywordCount: number;
  imageAltCount: number;
  totalImages: number;
  internalLinks: number;
  hasSchema: boolean;
  hasFaq: boolean;
  hasEeatSignals: boolean;
}

export function calculateSeoScore(data: SeoPageData): SeoMetrics {
  let metrics: SeoMetrics = {
    urlScore: 0,
    titleScore: 0,
    descScore: 0,
    headingScore: 0,
    contentScore: 0,
    imageScore: 0,
    linkScore: 0,
    schemaScore: 0,
    faqScore: 0,
    eeatScore: 0,
    cwvScore: 5, // Assuming pass for SSG
    techScore: 10, // Assuming Next.js app router default technical excellence
    totalScore: 0,
  };

  // URL (5 points)
  if (data.url === data.url.toLowerCase() && !data.url.includes('_') && data.url.length <= 75) {
    metrics.urlScore = 5;
  }

  // Meta Title (10 points) - 50-60 chars
  if (data.title.length >= 50 && data.title.length <= 60) {
    metrics.titleScore = 10;
  } else if (data.title.length > 0) {
    metrics.titleScore = 5;
  }

  // Meta Description (10 points) - 150-160 chars
  if (data.description.length >= 150 && data.description.length <= 160) {
    metrics.descScore = 10;
  } else if (data.description.length > 0) {
    metrics.descScore = 5;
  }

  // Headings (10 points) - Exactly 1 H1
  if (data.h1Count === 1 && data.hasPrimaryKeywordInH1) {
    metrics.headingScore = 10;
  } else if (data.h1Count === 1) {
    metrics.headingScore = 5;
  }

  // Content Optimization (15 points) - Natural keyword freq (6-10)
  if (data.primaryKeywordCount >= 6 && data.primaryKeywordCount <= 10) {
    metrics.contentScore = 15;
  } else if (data.primaryKeywordCount > 0) {
    metrics.contentScore = 7;
  }

  // Image SEO (10 points) - Alt text
  if (data.totalImages > 0 && data.imageAltCount === data.totalImages) {
    metrics.imageScore = 10;
  } else if (data.totalImages === 0) {
    metrics.imageScore = 10; // Pass if no images
  } else {
    metrics.imageScore = Math.floor((data.imageAltCount / data.totalImages) * 10);
  }

  // Internal Links (10 points) - min 2
  if (data.internalLinks >= 2) {
    metrics.linkScore = 10;
  } else if (data.internalLinks === 1) {
    metrics.linkScore = 5;
  }

  // Schema (5 points)
  metrics.schemaScore = data.hasSchema ? 5 : 0;

  // FAQ (5 points)
  metrics.faqScore = data.hasFaq ? 5 : 0;

  // EEAT (5 points)
  metrics.eeatScore = data.hasEeatSignals ? 5 : 0;

  metrics.totalScore = 
    metrics.urlScore + 
    metrics.titleScore + 
    metrics.descScore + 
    metrics.headingScore + 
    metrics.contentScore + 
    metrics.imageScore + 
    metrics.linkScore + 
    metrics.schemaScore + 
    metrics.faqScore + 
    metrics.eeatScore + 
    metrics.cwvScore + 
    metrics.techScore;

  return metrics;
}
