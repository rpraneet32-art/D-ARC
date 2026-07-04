"use server";

import * as cheerio from "cheerio";
import { SeoPageData, calculateSeoScore } from "@/lib/seo-scorer";

export async function analyzePage(path: string, primaryKeyword: string): Promise<SeoPageData | null> {
  try {
    const targetUrl = `http://localhost:3000${path}`;
    const res = await fetch(targetUrl, { cache: "no-store" });
    
    if (!res.ok) {
      console.error(`Failed to fetch ${targetUrl}: ${res.status}`);
      return null;
    }

    const html = await res.text();
    const $ = cheerio.load(html);

    // Extract Title & Description
    const title = $("title").text() || "";
    const description = $('meta[name="description"]').attr("content") || "";

    // Extract Headings
    const h1Count = $("h1").length;
    const h1Text = $("h1").text().toLowerCase();
    const hasPrimaryKeywordInH1 = primaryKeyword ? h1Text.includes(primaryKeyword.toLowerCase()) : false;

    // Extract Images
    const images = $("img");
    const totalImages = images.length;
    let imageAltCount = 0;
    images.each((_, img) => {
      if ($(img).attr("alt")) {
        imageAltCount++;
      }
    });

    // Extract Links
    const internalLinksCount = $("a[href^='/']").length + $("a[href^='http://localhost']").length;

    // Body text for word count and keyword density
    const bodyText = $("body").text().replace(/\s+/g, " ").toLowerCase();
    const wordCount = bodyText.split(" ").filter(w => w.length > 0).length;
    
    let primaryKeywordCount = 0;
    if (primaryKeyword) {
      const keywordRegex = new RegExp(primaryKeyword.toLowerCase(), "gi");
      const matches = bodyText.match(keywordRegex);
      primaryKeywordCount = matches ? matches.length : 0;
    }

    // Schema, FAQ, EEAT (Rough heuristics based on our known DOM elements/scripts)
    const hasSchema = $("script[type='application/ld+json']").length > 0;
    const hasFaq = html.includes("FAQ") || $("h2, h3").filter((_, el) => $(el).text().includes("FAQ")).length > 0;
    const hasEeatSignals = bodyText.includes("experience") || bodyText.includes("years") || bodyText.includes("award");

    const readingTimeMins = Math.ceil(wordCount / 200);
    const readingTime = `${readingTimeMins} min${readingTimeMins > 1 ? 's' : ''}`;
    
    const hasCanonical = $("link[rel='canonical']").length > 0;
    const hasOpenGraph = $("meta[property^='og:']").length > 0;
    const hasTwitterCard = $("meta[name^='twitter:']").length > 0;
    
    const robots = $("meta[name='robots']").attr("content") || "";
    const isNoIndex = robots.toLowerCase().includes("noindex");
    const indexStatus = isNoIndex ? "Blocked (NoIndex)" : "Indexable";
    
    const brokenLinks = $("a[href=''], a[href='#']").length;
    const lastUpdated = new Date().toISOString().split('T')[0];
    
    const baseData = {
      url: targetUrl,
      title,
      description,
      h1Count,
      hasPrimaryKeywordInH1,
      wordCount,
      primaryKeywordCount,
      imageAltCount,
      totalImages,
      internalLinks: internalLinksCount,
      hasSchema,
      hasFaq,
      hasEeatSignals,
      readingTime,
      hasCanonical,
      hasOpenGraph,
      hasTwitterCard,
      indexStatus,
      brokenLinks,
      lastUpdated
    };

    // Calculate real score to determine publish status
    const scoreMetrics = calculateSeoScore(baseData as SeoPageData);
    const publishStatus = scoreMetrics.totalScore >= 97 ? "Ready to Publish" : "Not Ready For Publishing";

    return {
      ...baseData,
      publishStatus
    };
  } catch (error) {
    console.error("Error analyzing page:", error);
    return null;
  }
}
