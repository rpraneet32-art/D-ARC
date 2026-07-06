import { Metadata } from 'next';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';

export const metadata: Metadata = {
  title: "About Us | D-Arc Architectural Interior in Kannur",
  description: "Learn about the legacy of D-Arc Architectural Interior, founded in Mattannur, Kannur. Meet our visionary leaders Afzal Ali and Shuhood Bin Haris.",
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

        {/* Company History */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <FadeIn direction="left" className="space-y-6 text-lg text-brand-grey leading-relaxed">
            <p>
              Founded in Mattannur, Kannur, in <strong className="text-white">2014</strong> by <strong className="text-white">Afzal Ali</strong>, D-Arc Architectural Interior began with a singular vision: to elevate the standard of residential and commercial design in Kerala.
            </p>
            <p>
              Over the past 10+ years, we have evolved from a passionate design studio into an award-winning, comprehensive design-and-build firm. Our deep-rooted passion for architecture and construction ensures that every project is executed flawlessly from concept to completion.
            </p>
            <p>
              In <strong className="text-white">2023</strong>, <strong className="text-white">Shuhood Bin Haris</strong> joined the leadership team, bringing certified expertise in custom furniture and innovative interior design. Together, they have propelled D-Arc to new heights, making it a symbol of innovation and luxury across our prime locations.
            </p>
          </FadeIn>
          <FadeIn direction="right" className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/assets/team/owners.jpeg"
              alt="Afzal Ali and Shuhood Bin Haris - Founders of D-Arc"
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

        {/* Core Values */}
        <div className="mb-20">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">Our Core Values</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn direction="up" delay={0.1} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-brand-gold transition-colors">
              <h3 className="text-xl font-bold text-brand-gold mb-4">Uncompromising Quality</h3>
              <p className="text-brand-grey">We source the finest materials and employ expert craftsmen to ensure that every finish, every joint, and every structure stands the test of time.</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.2} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-brand-gold transition-colors">
              <h3 className="text-xl font-bold text-brand-gold mb-4">Client-Centric Design</h3>
              <p className="text-brand-grey">Your lifestyle and aspirations dictate our design language. We listen, adapt, and create spaces that are a true reflection of you.</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.3} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-brand-gold transition-colors">
              <h3 className="text-xl font-bold text-brand-gold mb-4">Transparent Execution</h3>
              <p className="text-brand-grey">From initial estimates to final handover, we maintain complete transparency in timelines, costs, and project updates.</p>
            </FadeIn>
          </div>
        </div>

      </div>
    </div>
  );
}
