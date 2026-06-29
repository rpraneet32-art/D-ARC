import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About D-Arc | Architectural Interiors in Kannur",
  description: "Learn about D-Arc Architectural Interiors, founded by Afzal Ali. We are Kannur's premier firm for award-winning architecture and interior design.",
};

export default function CompanyPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-black mb-6">About D-Arc</h1>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-8"></div>
          <p className="text-xl text-brand-grey leading-relaxed">
            D-Arc Architectural Interiors is a premier design firm based in Kannur, Kerala. We specialize in creating spaces that blend aesthetic brilliance with unparalleled functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center text-brand-grey">
              [Founder Image Placeholder]
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-serif text-brand-black mb-6">Our Story</h2>
            <p className="text-brand-grey mb-6 leading-relaxed">
              Founded in 2014 by Afzal Ali in Mattannur, Kannur, D-Arc Architectural Interiors started with a simple vision: to elevate the standard of living and working environments through thoughtful, innovative design.
            </p>
            <p className="text-brand-grey mb-6 leading-relaxed">
              Over the years, we have grown from a passionate local studio into an award-winning firm recognized for our meticulous attention to detail and commitment to excellence. Our portfolio spans luxurious residential villas, dynamic commercial workspaces, and bespoke interior renovations.
            </p>
            <div className="flex gap-4 mt-8">
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm text-center flex-1">
                <div className="text-3xl font-serif text-brand-gold mb-2">10+</div>
                <div className="text-sm font-semibold text-brand-black uppercase tracking-wider">Years Exp.</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm text-center flex-1">
                <div className="text-3xl font-serif text-brand-gold mb-2">150+</div>
                <div className="text-sm font-semibold text-brand-black uppercase tracking-wider">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
