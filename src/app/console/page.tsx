"use client";

import { useState } from "react";
import { calculateSeoScore, SeoPageData, SeoMetrics } from "@/lib/seo-scorer";
import { analyzePage } from "@/actions/seo-analyzer";
import { saveSeoOverride } from "@/actions/seo-editor";

export default function ConsoleDashboard() {
  const [targetPath, setTargetPath] = useState("/");
  const [primaryKeyword, setPrimaryKeyword] = useState("Architects");
  const [isLoading, setIsLoading] = useState(false);
  const [pageData, setPageData] = useState<SeoPageData | null>(null);
  const [isEditingSeo, setIsEditingSeo] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editKeywords, setEditKeywords] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleEditClick = () => {
    setIsEditingSeo(true);
    setEditTitle(pageData?.title || "");
    setEditDesc(pageData?.description || "");
    // Fallback if keywords is missing
    setEditKeywords(pageData?.title ? "Architects in Kannur, Interior Design" : ""); 
  };

  const handleSaveSeo = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const kws = editKeywords.split(",").map(k => k.trim()).filter(Boolean);
      const res = await saveSeoOverride(targetPath, { title: editTitle, description: editDesc, keywords: kws });
      if (res.success) {
        alert("SEO override saved successfully! It will reflect immediately on the website.");
        setIsEditingSeo(false);
        // Re-analyze
        const data = await analyzePage(targetPath, primaryKeyword);
        if (data) setPageData(data);
      } else {
        alert("Failed to save SEO override.");
      }
    } catch (error) {
      alert("Error saving.");
    }
    setIsSaving(false);
  };

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setPageData(null);
    try {
      const data = await analyzePage(targetPath, primaryKeyword);
      if (data) {
        setPageData(data);
      } else {
        alert("Failed to analyze page. Ensure the path is correct and the local server is running.");
      }
    } catch (err) {
      console.error(err);
      alert("Error analyzing page.");
    } finally {
      setIsLoading(false);
    }
  };

  let score: SeoMetrics | null = null;
  if (pageData) {
    score = calculateSeoScore(pageData);
  }

  const getScoreColor = (value: number) => {
    if (value >= 97) return "text-green-500";
    if (value >= 85) return "text-yellow-500";
    return "text-red-500";
  };
  
  const getScoreBg = (value: number) => {
    if (value >= 97) return "bg-green-500";
    if (value >= 85) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Header & Controls */}
      <div className="border-b border-gray-800 pb-6 space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Dynamic SEO Analyzer</h1>
            <p className="text-gray-400">Targeting 27-Point Master Framework. Minimum Score Required: 97/100.</p>
          </div>
          {score && pageData && (
            <div className="text-right">
              <p className="text-sm text-gray-500 uppercase tracking-wide">Publish Status</p>
              {pageData.publishStatus === "Ready to Publish" ? (
                <p className="text-lg font-bold text-green-500 flex items-center justify-end gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  READY FOR PUBLISHING
                </p>
              ) : (
                <p className="text-lg font-bold text-red-500 flex items-center justify-end gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  NOT READY
                </p>
              )}
            </div>
          )}
        </div>

        <form onSubmit={handleAnalyze} className="flex gap-4">
          <div className="flex-1">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Target Path</label>
            <input 
              type="text" 
              value={targetPath}
              onChange={(e) => setTargetPath(e.target.value)}
              className="w-full bg-[#1e2128] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors"
              placeholder="e.g., /locations/kannur-town"
            />
          </div>
          <div className="w-64">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Primary Keyword</label>
            <input 
              type="text" 
              value={primaryKeyword}
              onChange={(e) => setPrimaryKeyword(e.target.value)}
              className="w-full bg-[#1e2128] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors"
              placeholder="e.g., Architects in Kannur"
            />
          </div>
          <div className="flex items-end">
            <button 
              type="submit"
              disabled={isLoading}
              className="bg-brand-gold text-black px-8 py-3 rounded-md font-bold uppercase tracking-wider hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed h-[50px]"
            >
              {isLoading ? "Analyzing..." : "Analyze"}
            </button>
          </div>
        </form>
      </div>

      {!pageData && !isLoading && (
        <div className="text-center py-20 border border-dashed border-gray-800 rounded-xl bg-[#16181d]">
          <p className="text-gray-500">Enter a path and primary keyword to analyze the live page SEO score.</p>
        </div>
      )}

      {/* Results Dashboard */}
      {score && pageData && (
        <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
          
          <div className="flex justify-between items-center bg-[#16181d] border border-brand-gold/30 p-6 rounded-xl">
            <div>
              <h3 className="text-xl font-bold text-white">Direct SEO Optimization</h3>
              <p className="text-gray-400 text-sm mt-1">Found mistakes? Edit the SEO metadata for this specific path directly.</p>
            </div>
            <button 
              onClick={handleEditClick}
              className="border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black px-6 py-2 rounded-md font-bold transition-colors"
            >
              Fix SEO Mistakes
            </button>
          </div>

          {isEditingSeo && (
            <div className="bg-[#1a1d24] border border-brand-gold/50 p-6 rounded-xl animate-in zoom-in-95 duration-200">
              <h3 className="text-xl font-bold text-brand-gold mb-4">Edit SEO for {targetPath}</h3>
              <form onSubmit={handleSaveSeo} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Meta Title</label>
                  <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} className="w-full bg-[#16181d] border border-gray-700 rounded-md px-4 py-3 text-white focus:border-brand-gold focus:outline-none" required />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Meta Description</label>
                  <textarea value={editDesc} onChange={(e) => setEditDesc(e.target.value)} rows={3} className="w-full bg-[#16181d] border border-gray-700 rounded-md px-4 py-3 text-white focus:border-brand-gold focus:outline-none" required />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Keywords (comma separated)</label>
                  <input type="text" value={editKeywords} onChange={(e) => setEditKeywords(e.target.value)} className="w-full bg-[#16181d] border border-gray-700 rounded-md px-4 py-3 text-white focus:border-brand-gold focus:outline-none" required />
                </div>
                <div className="flex gap-4 pt-4">
                  <button type="button" onClick={() => setIsEditingSeo(false)} className="px-6 py-3 border border-gray-700 rounded-md text-white hover:bg-gray-800 transition-colors">Cancel</button>
                  <button type="submit" disabled={isSaving} className="px-6 py-3 bg-brand-gold text-black font-bold rounded-md hover:bg-white transition-colors disabled:opacity-50">
                    {isSaving ? "Saving..." : "Save Override to Live Website"}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Top Metrics Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#16181d] border border-gray-800 p-6 rounded-xl relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-1 ${getScoreBg(score.totalScore)}`}></div>
              <p className="text-gray-400 text-sm font-medium mb-1">Total SEO Score</p>
              <div className="flex items-baseline gap-2">
                <h3 className={`text-5xl font-bold tracking-tighter ${getScoreColor(score.totalScore)}`}>
                  {score.totalScore}
                </h3>
                <span className="text-gray-600 font-medium">/ 100</span>
              </div>
            </div>
            
            <div className="bg-[#16181d] border border-gray-800 p-6 rounded-xl">
              <p className="text-gray-400 text-sm font-medium mb-1">Technical Score</p>
              <h3 className="text-3xl font-bold text-white">{score.techScore + score.cwvScore} <span className="text-lg text-gray-600 font-medium">/ 15</span></h3>
            </div>
            
            <div className="bg-[#16181d] border border-gray-800 p-6 rounded-xl">
              <p className="text-gray-400 text-sm font-medium mb-1">Content Score</p>
              <h3 className="text-3xl font-bold text-white">{score.contentScore + score.headingScore} <span className="text-lg text-gray-600 font-medium">/ 25</span></h3>
            </div>
            
            <div className="bg-[#16181d] border border-gray-800 p-6 rounded-xl">
              <p className="text-gray-400 text-sm font-medium mb-1">Metadata Score</p>
              <h3 className="text-3xl font-bold text-white">{score.titleScore + score.descScore + score.urlScore} <span className="text-lg text-gray-600 font-medium">/ 25</span></h3>
            </div>
          </div>

          {/* Validation Checklist Grid */}
          <div className="bg-[#16181d] border border-gray-800 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-gray-800 bg-[#1a1d24]">
              <h3 className="text-lg font-bold text-white">Developer Checklist Validation</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-800">
              
              {/* Column 1 */}
              <div className="bg-[#16181d] p-6 space-y-6">
                
                <div className="flex justify-between items-center border-b border-gray-800/50 pb-4">
                  <div>
                    <p className="text-white font-medium flex items-center gap-2">
                      {score.urlScore === 5 ? '✅' : '❌'} URL Structure
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Found: {pageData.url.split('http://localhost:3000')[1]}</p>
                  </div>
                  <span className={`font-bold ${score.urlScore === 5 ? 'text-green-500' : 'text-red-500'}`}>{score.urlScore}/5</span>
                </div>

                <div className="flex justify-between items-center border-b border-gray-800/50 pb-4">
                  <div>
                    <p className="text-white font-medium flex items-center gap-2">
                      {score.titleScore === 10 ? '✅' : '❌'} Meta Title
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Chars: {pageData.title.length} | Found: {pageData.title}</p>
                  </div>
                  <span className={`font-bold ${score.titleScore === 10 ? 'text-green-500' : 'text-yellow-500'}`}>{score.titleScore}/10</span>
                </div>

                <div className="flex justify-between items-center border-b border-gray-800/50 pb-4">
                  <div>
                    <p className="text-white font-medium flex items-center gap-2">
                      {score.descScore === 10 ? '✅' : '❌'} Meta Description
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Chars: {pageData.description.length}</p>
                  </div>
                  <span className={`font-bold ${score.descScore === 10 ? 'text-green-500' : 'text-yellow-500'}`}>{score.descScore}/10</span>
                </div>

                <div className="flex justify-between items-center border-b border-gray-800/50 pb-4">
                  <div>
                    <p className="text-white font-medium flex items-center gap-2">
                      {score.headingScore === 10 ? '✅' : '❌'} Heading Structure
                    </p>
                    <p className="text-sm text-gray-500 mt-1">H1s: {pageData.h1Count} | Has Primary: {pageData.hasPrimaryKeywordInH1 ? "Yes" : "No"}</p>
                  </div>
                  <span className={`font-bold ${score.headingScore === 10 ? 'text-green-500' : 'text-red-500'}`}>{score.headingScore}/10</span>
                </div>
                
                <div className="flex justify-between items-center pb-2">
                  <div>
                    <p className="text-white font-medium flex items-center gap-2">
                      {score.contentScore === 15 ? '✅' : '❌'} Content Optimization
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Primary kw frequency: {pageData.primaryKeywordCount} times (Target: 6-10)</p>
                  </div>
                  <span className={`font-bold ${score.contentScore === 15 ? 'text-green-500' : 'text-yellow-500'}`}>{score.contentScore}/15</span>
                </div>

              </div>

              {/* Column 2 */}
              <div className="bg-[#16181d] p-6 space-y-6">
                
                <div className="flex justify-between items-center border-b border-gray-800/50 pb-4">
                  <div>
                    <p className="text-white font-medium flex items-center gap-2">
                      {score.imageScore === 10 ? '✅' : '❌'} Image SEO
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{pageData.imageAltCount}/{pageData.totalImages} images have alt text</p>
                  </div>
                  <span className={`font-bold ${score.imageScore === 10 ? 'text-green-500' : 'text-yellow-500'}`}>{score.imageScore}/10</span>
                </div>

                <div className="flex justify-between items-center border-b border-gray-800/50 pb-4">
                  <div>
                    <p className="text-white font-medium flex items-center gap-2">
                      {score.linkScore === 10 ? '✅' : '❌'} Internal Linking
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Internal links found: {pageData.internalLinks}</p>
                  </div>
                  <span className={`font-bold ${score.linkScore === 10 ? 'text-green-500' : 'text-yellow-500'}`}>{score.linkScore}/10</span>
                </div>

                <div className="flex justify-between items-center border-b border-gray-800/50 pb-4">
                  <div>
                    <p className="text-white font-medium flex items-center gap-2">
                      {score.schemaScore === 5 ? '✅' : '❌'} Schema Generation
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{pageData.hasSchema ? "Schema payload found" : "Missing Schema"}</p>
                  </div>
                  <span className={`font-bold ${score.schemaScore === 5 ? 'text-green-500' : 'text-red-500'}`}>{score.schemaScore}/5</span>
                </div>
                
                <div className="flex justify-between items-center border-b border-gray-800/50 pb-4">
                  <div>
                    <p className="text-white font-medium flex items-center gap-2">
                      {score.faqScore === 5 ? '✅' : '❌'} FAQ & EEAT
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Trust signals detected</p>
                  </div>
                  <span className={`font-bold ${score.faqScore + score.eeatScore === 10 ? 'text-green-500' : 'text-yellow-500'}`}>{score.faqScore + score.eeatScore}/10</span>
                </div>
                
                <div className="flex justify-between items-center pb-2">
                  <div>
                    <p className="text-white font-medium flex items-center gap-2">
                      {score.cwvScore + score.techScore === 15 ? '✅' : '❌'} Core Web Vitals & Tech
                    </p>
                    <p className="text-sm text-gray-500 mt-1">LCP, CLS, INP pass. Fast server response.</p>
                  </div>
                  <span className={`font-bold ${score.cwvScore + score.techScore === 15 ? 'text-green-500' : 'text-yellow-500'}`}>{score.cwvScore + score.techScore}/15</span>
                </div>

              </div>
            </div>

            {/* Additional Advanced Metrics Grid */}
            <div className="p-6 border-t border-gray-800 bg-[#1a1d24]">
              <h3 className="text-lg font-bold text-white mb-6">Advanced Page Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Index Status</p>
                  <p className={`font-bold ${pageData.indexStatus === 'Indexable' ? 'text-green-500' : 'text-red-500'}`}>{pageData.indexStatus}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Canonical Tag</p>
                  <p className={`font-bold ${pageData.hasCanonical ? 'text-green-500' : 'text-red-500'}`}>{pageData.hasCanonical ? "Present" : "Missing"}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Open Graph</p>
                  <p className={`font-bold ${pageData.hasOpenGraph ? 'text-green-500' : 'text-red-500'}`}>{pageData.hasOpenGraph ? "Present" : "Missing"}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Twitter Card</p>
                  <p className={`font-bold ${pageData.hasTwitterCard ? 'text-green-500' : 'text-red-500'}`}>{pageData.hasTwitterCard ? "Present" : "Missing"}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Broken Links</p>
                  <p className={`font-bold ${pageData.brokenLinks === 0 ? 'text-green-500' : 'text-red-500'}`}>{pageData.brokenLinks === 0 ? "None" : pageData.brokenLinks}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Word Count</p>
                  <p className="font-bold text-white">{pageData.wordCount} words</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Reading Time</p>
                  <p className="font-bold text-white">{pageData.readingTime}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Last Updated</p>
                  <p className="font-bold text-white">{pageData.lastUpdated}</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
}
