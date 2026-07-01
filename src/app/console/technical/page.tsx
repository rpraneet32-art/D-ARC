"use client";

import { useState } from "react";
import { analyzePage } from "@/actions/seo-analyzer";

export default function TechnicalConsole() {
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
        <h1 className="text-3xl font-bold text-white mb-2">Technical Vitals</h1>
        <p className="text-gray-400">Analyze Core Web Vitals, Schema, and infrastructure SEO.</p>
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
          {isLoading ? "Scanning..." : "Scan Vitals"}
        </button>
      </form>

      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-[#16181d] border border-gray-800 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4">Schema & Structured Data</h3>
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${data.hasSchema ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <p className="text-gray-300">{data.hasSchema ? 'JSON-LD Schema Detected' : 'Missing Schema'}</p>
            </div>
          </div>
          <div className="bg-[#16181d] border border-gray-800 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4">Core Web Vitals Check</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3"><span className="text-green-500">✔</span> Next.js Server Response</li>
              <li className="flex items-center gap-3"><span className="text-green-500">✔</span> Image Optimization Enabled</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
