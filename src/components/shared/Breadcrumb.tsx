"use client";

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function Breadcrumb({ customCrumbs }: { customCrumbs?: { label: string; href: string }[] }) {
  const pathname = usePathname();
  
  // Parse path segments
  const segments = pathname.split('/').filter(p => p);
  
  const autoCrumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join('/')}`;
    // Format label: capitalize, replace hyphens with spaces
    const label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
      
    return { label, href };
  });

  const crumbs = customCrumbs || autoCrumbs;

  // JSON-LD Generation
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.darcinterior.com/"
      },
      ...crumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": crumb.label,
        "item": `https://www.darcinterior.com${crumb.href}`
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav className="flex text-sm text-brand-grey mb-8 overflow-x-auto whitespace-nowrap hide-scrollbar" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/" className="hover:text-brand-gold transition-colors">
              Home
            </Link>
          </li>
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            return (
              <li key={crumb.href}>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 mx-1 text-white/30" />
                  {isLast ? (
                    <span className="text-brand-gold font-medium" aria-current="page">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-brand-gold transition-colors">
                      {crumb.label}
                    </Link>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
