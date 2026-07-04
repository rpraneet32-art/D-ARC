import { analyzePage } from "./src/actions/seo-analyzer";
import { calculateSeoScore } from "./src/lib/seo-scorer";

async function runTest() {
  console.log("Running SEO test on /locations-in-kannur/kannur-town...");
  const data = await analyzePage("/locations-in-kannur/kannur-town", "Architects in Kannur");
  
  if (!data) {
    console.error("Failed to fetch page data");
    process.exit(1);
  }

  const score = calculateSeoScore(data);
  console.log("=========================================");
  console.log("SEO TEST RESULTS");
  console.log("=========================================");
  console.log(`Total Score: ${score.totalScore}/100`);
  console.log(`Word Count: ${data.wordCount} (Needs >= 1500)`);
  console.log(`Primary Keyword Density: ${data.primaryKeywordCount} (Needs 6-12)`);
  console.log(`H1 Count: ${data.h1Count} (Needs exactly 1)`);
  console.log(`Internal Links: ${data.internalLinks} (Needs >= 5)`);
  console.log(`Schema Present: ${data.hasSchema}`);
  console.log(`FAQ Present: ${data.hasFaq}`);
  console.log(`Images with Alt Text: ${data.imageAltCount}/${data.totalImages}`);
  console.log("=========================================");
  if (score.totalScore >= 97) {
    console.log("✅ SUCCESS: All 27 points fulfilled (Score 97+)");
  } else {
    console.log("❌ FAILURE: Score did not reach 97");
  }
}

runTest();
