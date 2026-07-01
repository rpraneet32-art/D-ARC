"use client";

import { useState } from "react";
import { analyzePage } from "@/actions/seo-analyzer";

export default function ContentConsole() {
  const [targetPath, setTargetPath] = useState("/");
  const [primaryKeyword, setPrimaryKeyword] = useState("Architects");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await analyzePage(targetPath, primaryKeyword);
      if (res) setData(res);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="border-b border-gray-800 pb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Content Quality</h1>
        <p className="text-gray-400">Analyze keyword density, headings, and readability.</p>
      </div>

      <form onSubmit={handleAnalyze} className="flex gap-4">
        <div className="flex-1">
          <input 
            type="text" 
            value={targetPath}
            onChange={(e) => setTargetPath(e.target.value)}
            className="w-full bg-[#1e2128] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-gold"
            placeholder="Target Path (e.g., /)"
          />
        </div>
        <div className="w-64">
          <input 
            type="text" 
            value={primaryKeyword}
            onChange={(e) => setPrimaryKeyword(e.target.value)}
            className="w-full bg-[#1e2128] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-gold"
            placeholder="Primary Keyword"
          />
        </div>
        <button 
          type="submit"
          disabled={isLoading}
          className="bg-brand-gold text-black px-8 py-3 rounded-md font-bold uppercase tracking-wider hover:bg-white transition-colors"
        >
          {isLoading ? "Scanning..." : "Scan Content"}
        </button>
      </form>

      {data && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-[#16181d] border border-gray-800 p-6 rounded-xl">
            <p className="text-gray-400 text-sm font-medium mb-1">Keyword Frequency</p>
            <h3 className="text-3xl font-bold text-white mb-2">{data.primaryKeywordCount} <span className="text-lg text-gray-500">mentions</span></h3>
            <p className={`text-sm ${data.primaryKeywordCount >= 6 && data.primaryKeywordCount <= 10 ? 'text-green-500' : 'text-yellow-500'}`}>
              {data.primaryKeywordCount >= 6 && data.primaryKeywordCount <= 10 ? 'Optimal density' : 'Needs optimization (Target: 6-10)'}
            </p>
          </div>
          <div className="bg-[#16181d] border border-gray-800 p-6 rounded-xl">
            <p className="text-gray-400 text-sm font-medium mb-1">Total Word Count</p>
            <h3 className="text-3xl font-bold text-white mb-2">{data.wordCount} <span className="text-lg text-gray-500">words</span></h3>
            <p className="text-sm text-green-500">Sufficient depth</p>
          </div>
          <div className="bg-[#16181d] border border-gray-800 p-6 rounded-xl">
            <p className="text-gray-400 text-sm font-medium mb-1">H1 Tags Found</p>
            <h3 className="text-3xl font-bold text-white mb-2">{data.h1Count}</h3>
            <p className={`text-sm ${data.h1Count === 1 ? 'text-green-500' : 'text-red-500'}`}>
              {data.h1Count === 1 ? 'Perfect structure' : 'Must be exactly one H1'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
