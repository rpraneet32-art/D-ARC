import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { BLOGS_QUERY } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import { FadeIn } from '@/components/animations/FadeIn';

export const metadata: Metadata = {
  title: "Blog | D-Arc Architectural Interior",
  description: "Read our latest thoughts on architecture, interior design, and construction trends.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await client.fetch(BLOGS_QUERY);

  return (
    <div className="min-h-screen bg-brand-black pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn direction="down">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Our <span className="text-brand-gold">Blog</span>
            </h1>
            <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
            <p className="text-brand-grey text-lg">
              Insights, trends, and thoughts on luxury architecture and interior design.
            </p>
          </FadeIn>
        </div>

        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <FadeIn key={post._id} direction="up" className="bg-white/5 border border-white/10 rounded-sm overflow-hidden flex flex-col group">
                <Link href={`/blog/${post.slug?.current || '#'}`} className="block relative h-64 w-full overflow-hidden">
                  {post.mainImage ? (
                    <Image 
                      src={urlForImage(post.mainImage)?.url() || '/assets/blog/placeholder.jpg'}
                      alt={post.mainImage.alt || post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-brand-black flex items-center justify-center text-brand-grey border-b border-white/10">No Image</div>
                  )}
                </Link>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">
                    <span>{post.category === 'architecture' ? 'Architecture' : post.category === 'interior' ? 'Interior Design' : post.category || 'Blog'}</span>
                    <span className="mx-2">•</span>
                    <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''}</span>
                  </div>
                  <Link href={`/blog/${post.slug?.current || '#'}`} className="block flex-1">
                    <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-brand-gold transition-colors">{post.title}</h3>
                  </Link>
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10 text-sm text-brand-grey">
                    <span>By {post.author || 'D-Arc Team'}</span>
                    {post.readingTime && <span>{post.readingTime} min read</span>}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/5 rounded-sm border border-white/10">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">New Articles Coming Soon</h3>
            <p className="text-brand-grey mb-8">We are currently writing our latest thoughts and insights.</p>
            <Link href="/" className="px-8 py-4 border border-brand-gold text-brand-gold font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-black transition-colors inline-block">
              Return Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
