import React from "react";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LinkText } from "@/components/ui/LinkText";
import { useSectionData } from "@/store/useCMSStore";

import blog1 from "@/assets/blog1.png";
import blog2 from "@/assets/blog2.png";
import blog3 from "@/assets/blog3.png";

const fallbackInsights = [
  {
    id: "bess-reduce-dg-hours",
    title: "How BESS Can Reduce DG Operating Hours & Fuel Expenses",
    category: "Energy Storage & BESS",
    readTime: "6 min read",
    summary:
      "Discover how combining battery energy storage with conventional generators eliminates short grid-outage genset starts and lowers diesel fuel bills.",
    date: "July 2026",
    slug: "how-bess-reduces-dg-operating-hours",
    img: blog1,
  },
  {
    id: "dg-solar-battery-sizing",
    title: "DG, Solar or Battery: What Does Your Facility Actually Need?",
    category: "System Engineering",
    readTime: "8 min read",
    summary:
      "A practical buyer's guide comparing capital expenditure, operating costs, and load response across generators, solar PV, and energy storage.",
    date: "July 2026",
    slug: "dg-solar-or-battery-sizing-guide",
    img: blog2,
  },
  {
    id: "understanding-amf-ats-panels",
    title: "Understanding AMF, ATS and Changeover Panel Architecture",
    category: "Electrical Distribution",
    readTime: "5 min read",
    summary:
      "An engineering breakdown of automatic mains failure panels, transfer switches, and synchronous generator paralleling for zero downtime.",
    date: "June 2026",
    slug: "understanding-amf-ats-changeover-panels",
    img: blog3,
  },
];

export const KnowledgeCenter: React.FC = () => {
  const { data: cmsBlogs } = useSectionData<any>("blogs", "articles");

  const articles =
    Array.isArray(cmsBlogs) && cmsBlogs.length >= 3
      ? cmsBlogs.slice(0, 3).map((item: any, index: number) => ({
          id: item.id || item.slug || index,
          title: item.title || "",
          category: item.category || "Technical Insights",
          readTime: item.readTime || "5 min read",
          summary: item.summary || item.excerpt || item.description || "",
          date: item.date || "2026",
          slug: item.slug || "",
          img: item.img || item.image || [blog1, blog2, blog3][index % 3],
        }))
      : fallbackInsights;

  return (
    <section className="py-24 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#1A6AA2]/10 border border-[#1A6AA2]/20 text-xs font-bold uppercase tracking-widest text-[#1A6AA2]">
              Technical Knowledge Base
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              Power Insights
            </h2>
            <p className="text-slate-600 text-base font-normal">
              Engineering guides, regulatory updates, and technical insights to
              help facility managers and decision-makers optimize electrical
              infrastructure.
            </p>
          </div>

          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-[#1A6AA2] text-xs font-bold text-white uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
          >
            <span>Explore All Technical Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Featured Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id || index}
              className="rounded-3xl bg-white overflow-hidden flex flex-col shadow-md transition-all duration-300 border border-slate-200/80 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.15,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
                boxShadow: "0 20px 35px -10px rgba(26, 106, 162, 0.2)",
                borderColor: "#1A6AA2",
                transition: { duration: 0.35 },
              }}
            >
              {/* Card Image Container */}
              <motion.div className="overflow-hidden h-48 sm:h-56 w-full relative bg-slate-100">
                <motion.img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-full object-cover transition-all duration-300"
                  loading="lazy"
                  whileHover={{
                    scale: 1.08,
                    filter: "brightness(0.95) saturate(1.1)",
                  }}
                  transition={{ duration: 0.35 }}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/40 text-[11px] font-bold text-[#1A6AA2] shadow-sm flex items-center gap-1">
                  <Tag className="w-3 h-3 text-[#1A6AA2]" />
                  {article.category}
                </div>
              </motion.div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {article.readTime}
                    </span>
                    <span className="text-slate-400">{article.date}</span>
                  </div>

                  <motion.h3
                    className="font-bold text-xl text-slate-900 group-hover:text-[#1A6AA2] transition-colors leading-snug line-clamp-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.15 }}
                  >
                    {article.title}
                  </motion.h3>

                  <motion.p
                    className="text-sm text-slate-600 leading-relaxed line-clamp-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.15 }}
                  >
                    <LinkText
                      text={article.summary}
                      linkClassName="text-[#1A6AA2] hover:underline font-bold"
                    />
                  </motion.p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between">
                  <Link
                    to={`/blog/${article.slug}`}
                    className="text-[#1A6AA2] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 hover:underline"
                  >
                    <span>Read Article</span>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeCenter;
