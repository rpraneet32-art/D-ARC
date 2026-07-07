import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { BLOG_BY_SLUG_QUERY, BLOGS_QUERY } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import { FadeIn } from '@/components/animations/FadeIn';

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await client.fetch(BLOG_BY_SLUG_QUERY, { slug: resolvedParams.slug });
  if (!post) return { title: 'Post Not Found' };
  
  return {
    title: `${post.title} | D-Arc Architectural Interior Blog`,
    description: post.title,
    openGraph: {
      images: post.mainImage ? [urlForImage(post.mainImage)?.url() || ''] : [],
    }
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await client.fetch(BLOG_BY_SLUG_QUERY, { slug: resolvedParams.slug });
  
  if (!post) {
    notFound();
  }

  // Fetch related posts for internal linking
  const allPosts = await client.fetch(BLOGS_QUERY);
  const relatedPosts = allPosts.filter((p: any) => p._id !== post._id && p.category === post.category).slice(0, 3);
  if (relatedPosts.length < 3) {
      const morePosts = allPosts.filter((p: any) => p._id !== post._id && !relatedPosts.find((rp:any) => rp._id === p._id)).slice(0, 3 - relatedPosts.length);
      relatedPosts.push(...morePosts);
  }

  return (
    <div className="min-h-screen bg-brand-black pt-24 pb-20 text-brand-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeIn direction="down" className="text-center mb-12">
          <div className="flex items-center justify-center text-sm font-bold uppercase tracking-widest text-brand-gold mb-6">
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-3 text-brand-grey">•</span>
            <span>{post.category === 'architecture' ? 'Architecture' : post.category === 'interior' ? 'Interior Design' : post.category || 'Insights'}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">{post.title}</h1>
          <div className="flex items-center justify-center text-brand-grey space-x-4">
            <span>By {post.author || 'D-Arc Team'}</span>
            <span>•</span>
            <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : ''}</span>
            {post.readingTime && (
              <>
                <span>•</span>
                <span>{post.readingTime} min read</span>
              </>
            )}
          </div>
        </FadeIn>

        {/* Main Image */}
        <FadeIn direction="up" className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden rounded-sm mb-16 border border-white/10">
          {post.mainImage ? (
            <Image 
              src={urlForImage(post.mainImage)?.url() || '/assets/blog/placeholder.jpg'}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-white/5 flex items-center justify-center">No Image</div>
          )}
        </FadeIn>

        {/* Content (Simplified for now, in a real app you'd use @portabletext/react) */}
        <FadeIn direction="up" className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:text-white prose-a:text-brand-gold hover:prose-a:text-white prose-img:rounded-sm mb-20">
          {/* Note: This is a placeholder for PortableText rendering */}
          <div className="text-brand-grey space-y-6">
            <p>This is a placeholder for the rich text content of the blog post. To render Sanity's Portable Text, you would typically use the @portabletext/react package.</p>
            <p>Contact D-Arc for your next <Link href="/services/architecture">architecture project</Link> or <Link href="/services/interior-design">interior design</Link> needs in Kannur.</p>
          </div>
        </FadeIn>

        {/* FAQs */}
        {post.faqs && post.faqs.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl font-serif font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {post.faqs.map((faq: any, i: number) => (
                <div key={faq._key || i} className="bg-white/5 border border-white/10 p-6 rounded-sm">
                  <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                  <p className="text-brand-grey">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Internal Linking - Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="pt-20 border-t border-white/10">
            <h2 className="text-3xl font-serif font-bold mb-10 text-center">More from Our Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((p: any) => (
                <Link key={p._id} href={`/blog/${p.slug?.current || '#'}`} className="group block">
                  <div className="relative h-48 w-full mb-4 overflow-hidden rounded-sm border border-white/10">
                    {p.mainImage ? (
                      <Image 
                        src={urlForImage(p.mainImage)?.url() || ''}
                        alt={p.mainImage.alt || p.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-white/5 flex items-center justify-center">No Image</div>
                    )}
                  </div>
                  <h3 className="text-lg font-serif font-bold group-hover:text-brand-gold transition-colors mb-2 line-clamp-2">{p.title}</h3>
                  <p className="text-brand-grey text-xs">
                     {p.publishedAt ? new Date(p.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
