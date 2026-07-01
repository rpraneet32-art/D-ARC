"use server";

import * as cheerio from "cheerio";
import { SeoPageData } from "@/lib/seo-scorer";

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

    return {
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
      hasEeatSignals
    };
  } catch (error) {
    console.error("Error analyzing page:", error);
    return null;
  }
}
