import { useParams, Navigate, Link } from "react-router-dom";
import { useSectionData } from "@/store/useCMSStore";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Loader from "@/components/ui/Loader";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { data: rawArticles, loading } = useSectionData<any[]>(
    "blogs",
    "articles",
  );
  const articles = Array.isArray(rawArticles) ? rawArticles : [];

  if (loading) {
    return <Loader />;
  }

  const post = articles?.find((a: any) => a.slug === slug);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  return (
    <>
      <SEO
        pageSlug="blogs"
        title={`${post.title} | Kumar Power Blogs`}
        description={post.excerpt || post.summary}
        canonical={`https://www.kumarpower.com/blog/${post.slug}`}
      />
      <Header />

      <main className="bg-gray-50 pb-24">
        {/* Hero Section */}
        <div className="relative w-full h-[500px] md:h-[600px] bg-black">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: `url(${post.image || post.img})` }}
          />
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

          <div className="absolute bottom-0 left-0 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
              <Link
                to="/blogs"
                className="inline-flex items-center text-[#8AB4F8] hover:text-white mb-6 transition-colors text-sm font-semibold tracking-wide"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back To Blogs
              </Link>

              <div className="mb-6">
                <span className="inline-block border border-white bg-[#2D6FBA] text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-wider shadow-sm">
                  {post.category || "BLOG"}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                {post.title}
              </h1>

              {(post.excerpt || post.summary || post.description) && (
                <p className="text-white/90 text-base md:text-lg max-w-5xl leading-relaxed font-medium">
                  {post.excerpt || post.summary || post.description}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Content & Sidebar Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-24">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content Area */}
            <div className="flex-1 lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="prose prose-lg prose-blue max-w-none text-gray-800"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
              {/* Latest Post Card */}
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Latest Post
                </h3>
                <div className="flex flex-col gap-4">
                  {articles
                    .filter((a: any) => a.slug !== slug)
                    .slice(0, 5)
                    .map((recentPost: any) => (
                      <div
                        key={recentPost.slug}
                        className="border-b border-gray-50 pb-4 last:border-0 last:pb-0"
                      >
                        <Link
                          to={`/blog/${recentPost.slug}`}
                          className="text-[#2D6FBA] font-medium hover:underline leading-tight block"
                        >
                          {recentPost.title}
                        </Link>
                      </div>
                    ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-[#2D6FBA] rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-3xl font-bold mb-4 leading-tight">
                  Need Help Choosing the Right Silent Generator?
                </h3>
                <p className="text-white/90 text-sm leading-relaxed mb-8">
                  Get expert advice on CPCB compliance, fuel type and noise
                  level guidance and from Kumar Power.
                </p>
                <Link to="/contact">
                  <button className="w-full bg-white text-gray-900 font-bold py-3.5 px-6 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
                    Get Free Expert Guidance
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
