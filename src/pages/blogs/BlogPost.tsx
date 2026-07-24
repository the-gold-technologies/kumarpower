import { useParams, Navigate, Link } from "react-router-dom";
import { useSectionData } from "@/store/useCMSStore";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { data: rawArticles, loading } = useSectionData<any[]>("blogs", "articles");
  const articles = Array.isArray(rawArticles) ? rawArticles : [];

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
        <Footer />
      </>
    );
  }

  const post = articles?.find((a: any) => a.slug === slug);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  return (
    <>
      <SEO
        title={`${post.title} | Kumar Power Blogs`}
        description={post.excerpt || post.summary}
        canonical={`https://www.kumarpower.com/blog/${post.slug}`}
      />
      <Header />

      <main className="bg-gray-50 pb-24">
        {/* Hero Section */}
        <div className="relative w-full h-[400px] md:h-[500px] bg-black">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: `url(${post.image || post.img})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full">
            <div className="max-w-4xl mx-auto px-6 pb-12">
              <Link 
                to="/blogs" 
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blogs
              </Link>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author || "Kumar Power Team"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.publishedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div 
              className="prose prose-lg prose-blue max-w-none text-gray-800"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
