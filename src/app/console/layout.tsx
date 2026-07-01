import { Metadata } from "next";
import Link from "next/link";
import "../globals.css";

export const metadata: Metadata = {
  title: "UX & SEO Blueprint Console | D-Arc",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ConsoleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0f1115] text-gray-300 font-sans selection:bg-brand-gold selection:text-black">
        {/* Console Sidebar */}
        <aside className="fixed left-0 top-0 w-64 h-screen bg-[#16181d] border-r border-gray-800 flex flex-col">
          <div className="p-6 border-b border-gray-800">
            <Link href="/console" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-brand-gold flex items-center justify-center rounded text-black font-bold text-lg group-hover:scale-105 transition-transform">
                D
              </div>
              <div>
                <h2 className="text-white font-semibold text-sm">Blueprint Console</h2>
                <p className="text-xs text-gray-500">Developer Dashboard</p>
              </div>
            </Link>
          </div>
          
          <nav className="flex-1 p-4 space-y-1">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3 mt-4">Pre-Publish Validation</div>
            <Link href="/console" className="flex items-center px-3 py-2.5 text-sm font-medium bg-[#1e2128] text-white rounded-md border border-gray-700">
              SEO Audit Dashboard
            </Link>
            <Link href="/console/technical" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-[#1e2128] rounded-md transition-colors">
              Technical Vitals
            </Link>
            <Link href="/console/content" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-[#1e2128] rounded-md transition-colors">
              Content Quality
            </Link>
            <Link href="/console/links" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-[#1e2128] rounded-md transition-colors">
              Internal Linking
            </Link>
          </nav>
          
          <div className="p-4 border-t border-gray-800">
            <Link href="/" className="flex items-center justify-center w-full py-2.5 text-sm font-medium bg-gray-800 hover:bg-gray-700 text-white rounded transition-colors">
              Exit to Live Site
            </Link>
          </div>
        </aside>

        {/* Main Console Content */}
        <main className="ml-64 p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
