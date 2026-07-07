import { Metadata } from 'next';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';

export const metadata: Metadata = {
  title: "Best Architecture Firm in Kannur | Top Interior Design Company Kerala | D-Arc",
  description: "Learn about the legacy of D-Arc Architectural Interior, founded in Mattannur, Kannur. Meet our visionary leaders Afzal Ali and Shuhood Bin Haris.",
  keywords: ["Best Architecture Firm in Kannur", "Top Interior Design Company Kerala", "D-Arc Architectural Interior", "Architects in Kannur", "Interior Designers in Kannur"]
};

export default function AboutUsPage() {
  return (
    <div className="flex flex-col w-full bg-brand-black text-brand-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section */}
        <div className="text-center mb-20">
          <FadeIn direction="down">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Our <span className="text-brand-gold">Legacy</span> & Vision
            </h1>
            <p className="text-brand-grey text-lg max-w-2xl mx-auto">
              For over a decade, we have been crafting exceptional spaces across Kannur, blending architectural brilliance with bespoke interior design.
            </p>
          </FadeIn>
        </div>

        {/* Company History - Image 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <FadeIn direction="left" className="space-y-6 text-lg text-brand-grey leading-relaxed">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">The Evolution of the Best Architecture Firm in Kannur</h2>
            <p>
              Founded in Mattannur, Kannur, in <strong className="text-white">2014</strong> by <strong className="text-white">Afzal Ali</strong>, D-Arc Architectural Interior began with a singular, unwavering vision: to elevate the standard of residential and commercial design across Kerala. In an industry often plagued by fragmented services and inconsistent quality, we sought to create a holistic, client-centered approach that bridged the gap between visionary architecture and meticulous execution.
            </p>
            <p>
              Over the past 10+ years, our journey has been one of continuous growth and relentless innovation. What started as a passionate boutique design studio has evolved into an award-winning, comprehensive design-and-build firm recognized as the Best Architecture Firm in Kannur. We have successfully completed over a hundred projects, ranging from sprawling luxury villas and contemporary apartments to highly functional commercial complexes and bespoke retail showrooms.
            </p>
            <p>
              In <strong className="text-white">2023</strong>, <strong className="text-white">Shuhood Bin Haris</strong> joined the leadership team, bringing certified expertise in custom furniture manufacturing and innovative interior design methodologies. This strategic partnership propelled D-Arc to new heights. By integrating deep architectural knowledge with cutting-edge interior design trends, they have solidified our reputation as the Top Interior Design Company Kerala. Today, D-Arc stands as a symbol of innovation, luxury, and reliability across our prime service locations.
            </p>
          </FadeIn>
          <FadeIn direction="right" className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/assets/team/owners.jpeg"
              alt="Afzal Ali and Shuhood Bin Haris - Founders of the Best Architecture Firm in Kannur"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-serif font-bold text-brand-gold">The Visionaries</h3>
              <p className="text-white/80">Afzal Ali & Shuhood Bin Haris</p>
            </div>
          </FadeIn>
        </div>

        {/* Deep Dive into Our Philosophy - Image 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 flex-col-reverse lg:flex-row-reverse">
          <FadeIn direction="right" className="space-y-6 text-lg text-brand-grey leading-relaxed">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Our Design Philosophy as the Top Interior Design Company Kerala</h2>
            <p>
              At D-Arc Architectural Interior, we believe that architecture is profoundly more than the mere assembly of bricks, mortar, steel, and glass. It is a deeply psychological and emotional endeavor. The spaces we inhabit shape our moods, influence our productivity, and frame the memories we create with our loved ones. As the leading architects and interior designers in Kannur, our philosophy is anchored in the concept of "Tropical Modernism"—a design language that harmonizes contemporary aesthetics with the unique climatic and cultural context of Kerala.
            </p>
            <p>
              We design homes that breathe. By utilizing passive cooling techniques, maximizing cross-ventilation, and strategically placing expansive fenestrations, we ensure our structures remain cool and comfortable throughout the humid monsoons and scorching summers. But our commitment doesn't stop at the exterior shell. As the Top Interior Design Company Kerala, we seamlessly transition the architectural narrative into the interior spaces. We blur the boundaries between the indoors and outdoors, bringing nature inside through internal courtyards, skylights, and natural material palettes.
            </p>
            <p>
              Every project is treated as a unique canvas. We completely reject the cookie-cutter approach to design. Instead, we invest significant time in the pre-design phase, conducting exhaustive interviews and lifestyle audits with our clients. We want to know how you cook, how you entertain, how you relax, and how you envision your future. This meticulous attention to detail is why discerning homeowners repeatedly choose us when seeking the Best Architecture Firm in Kannur.
            </p>
          </FadeIn>
          <FadeIn direction="left" className="relative h-[600px] w-full rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/assets/about/design-philosophy-kerala.jpg"
              alt="Interior design sketches and material mood boards by Top Interior Design Company Kerala"
              fill
              className="object-cover"
            />
          </FadeIn>
        </div>

        {/* Core Values */}
        <div className="mb-32">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">The Pillars of Our Success</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn direction="up" delay={0.1} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-brand-gold transition-colors">
              <h3 className="text-xl font-bold text-brand-gold mb-4">Uncompromising Quality Control</h3>
              <p className="text-brand-grey leading-relaxed">
                As the Best Architecture Firm in Kannur, we refuse to compromise on the integrity of our builds. We source only the finest, certified materials—from weather-resistant exterior cladding and marine-grade plywood to premium Italian marble and German hardware. Our on-site engineers conduct rigorous multi-point quality checks at every phase of construction, ensuring that every finish, every joint, and every structural element stands the test of time and weather.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.2} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-brand-gold transition-colors">
              <h3 className="text-xl font-bold text-brand-gold mb-4">Client-Centric Collaboration</h3>
              <p className="text-brand-grey leading-relaxed">
                Your lifestyle and aspirations dictate our design language. We view our clients not just as customers, but as co-creators. Through state-of-the-art 3D rendering and virtual walkthroughs at our Home Experience Centre, we ensure you have a crystal-clear understanding of the final outcome before a single brick is laid. We listen, adapt, and create spaces that are a true reflection of your personality.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.3} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-brand-gold transition-colors">
              <h3 className="text-xl font-bold text-brand-gold mb-4">Absolute Transparency</h3>
              <p className="text-brand-grey leading-relaxed">
                The construction industry is notorious for hidden costs and delayed timelines. We are actively changing this narrative. Being the Top Interior Design Company Kerala requires utmost professionalism. From the initial detailed bill of quantities (BOQ) to the final handover, we maintain complete transparency in our pricing, material specifications, and project scheduling. You will never encounter sudden price escalations or unapproved deviations.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Commitment to Sustainability & Future - Image 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <FadeIn direction="left" className="space-y-6 text-lg text-brand-grey leading-relaxed">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Designing for a Sustainable Future</h2>
            <p>
              As the Best Architecture Firm in Kannur, we recognize our profound responsibility toward the environment. The built environment is a significant contributor to carbon emissions, and we are committed to mitigating this impact through sustainable architectural practices. We actively encourage the use of locally sourced, eco-friendly building materials like laterite stone, terracotta, and reclaimed timber, which not only reduce the carbon footprint of transportation but also lend a beautiful, earthy aesthetic to the structure.
            </p>
            <p>
              Our sustainable approach extends to energy efficiency. We integrate rainwater harvesting systems, solar energy panels, and smart home technologies into our blueprints as standard offerings, rather than luxury add-ons. By optimizing the building's orientation to minimize solar heat gain while maximizing natural daylight, we significantly reduce the long-term reliance on artificial cooling and lighting. This holistic approach ensures that your home is not only environmentally responsible but also economically efficient to maintain over the decades.
            </p>
            <p>
              When you choose D-Arc Architectural Interior, you are not just investing in a building; you are investing in a legacy. We are dedicated to creating timeless, sustainable, and breath-taking environments that will enrich the lives of generations to come. Visit our Home Experience Centre in Mattannur to witness firsthand the quality, innovation, and passion that make us the Top Interior Design Company Kerala. Let us embark on this extraordinary journey of building your dream home together.
            </p>
          </FadeIn>
          <FadeIn direction="right" className="relative h-[600px] w-full rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/assets/about/sustainable-architecture-kannur.jpg"
              alt="Sustainable and eco-friendly architectural models built by the Best Architecture Firm in Kannur"
              fill
              className="object-cover"
            />
          </FadeIn>
        </div>

      </div>
    </div>
  );
}
