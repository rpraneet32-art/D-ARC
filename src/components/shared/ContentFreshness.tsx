import { Clock, CalendarCheck, RotateCw } from "lucide-react";

interface ContentFreshnessProps {
  publishedDate?: string;
  lastUpdated?: string;
  reviewCycle?: string;
}

export function ContentFreshness({
  publishedDate = "August 15, 2023",
  lastUpdated = "March 10, 2025",
  reviewCycle = "Every 6 Months"
}: ContentFreshnessProps) {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 mt-12 mb-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center text-sm text-brand-grey">
      <div className="flex items-center gap-3">
        <div className="bg-white p-2 rounded-full shadow-sm">
          <CalendarCheck className="w-5 h-5 text-brand-gold" />
        </div>
        <div>
          <p className="font-semibold text-brand-black">Published On</p>
          <p>{publishedDate}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="bg-white p-2 rounded-full shadow-sm">
          <Clock className="w-5 h-5 text-brand-gold" />
        </div>
        <div>
          <p className="font-semibold text-brand-black">Last Updated</p>
          <p>{lastUpdated}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="bg-white p-2 rounded-full shadow-sm">
          <RotateCw className="w-5 h-5 text-brand-gold" />
        </div>
        <div>
          <p className="font-semibold text-brand-black">Review Cycle</p>
          <p>{reviewCycle}</p>
        </div>
      </div>
    </div>
  );
}
