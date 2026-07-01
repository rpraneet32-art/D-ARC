"use client";

import { useState } from "react";
import { analyzePage } from "@/actions/seo-analyzer";

export default function LinksConsole() {
  const [targetPath, setTargetPath] = useState("/");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await analyzePage(targetPath, "");
      if (res) setData(res);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="border-b border-gray-800 pb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Internal Linking</h1>
        <p className="text-gray-400">Analyze page connectivity and anchor text distribution.</p>
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
        <button 
          type="submit"
          disabled={isLoading}
          className="bg-brand-gold text-black px-8 py-3 rounded-md font-bold uppercase tracking-wider hover:bg-white transition-colors"
        >
          {isLoading ? "Scanning..." : "Scan Links"}
        </button>
      </form>

      {data && (
        <div className="bg-[#16181d] border border-gray-800 p-8 rounded-xl mt-8">
          <div className="flex items-center gap-6 mb-8 border-b border-gray-800 pb-8">
            <div className="w-24 h-24 rounded-full border-4 border-brand-gold flex items-center justify-center">
              <span className="text-3xl font-bold text-white">{data.internalLinks}</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Internal Links Found</h3>
              <p className={`text-sm ${data.internalLinks >= 2 ? 'text-green-500' : 'text-yellow-500'}`}>
                {data.internalLinks >= 2 ? 'Meets minimum requirement of 2-3 links.' : 'Warning: Add more internal links to improve SEO connectivity.'}
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Link Details (Summary)</h4>
            <div className="bg-[#1e2128] rounded p-4 border border-gray-800">
              <p className="text-gray-400 text-sm">
                The scanner detected {data.internalLinks} internal `&lt;a&gt;` tags pointing to other pages within the domain. Ensure that the anchor text used for these links contains your secondary keywords (e.g., "Best Architects" instead of "Click Here").
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
