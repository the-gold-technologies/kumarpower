import { LinkText } from "@/components/ui/LinkText";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSectionData } from "@/store/useCMSStore";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  img: string;
  summary: string;
}

const BlogCard = ({ blog, index }: { blog: BlogPost; index: number }) => (
  <motion.article
    className="rounded-xl bg-white overflow-hidden flex flex-col shadow-md transition-all duration-300"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      delay: 0.2 + index * 0.15,
    }}
    whileHover={{
      y: -14,
      scale: 1.03,

      boxShadow: "0 12px 32px 0 rgba(212,175,55,0.18)",

      borderImage: "linear-gradient(90deg, #413d32 0%, #f7e7b4 100%) 1",

      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "#d4af37",

      transition: { duration: 0.35 },
    }}
    style={{
      border: "2px solid transparent",
      borderImage: "none",
    }}
  >
    <motion.div className="overflow-hidden h-auto w-full">
      <motion.img
        src={blog.img}
        alt={blog.title}
        className="w-full object-contain transition-all duration-300"
        loading="lazy"
        whileHover={{
          scale: 1.1,
          filter: "brightness(0.92) saturate(1.1)",
        }}
        transition={{ duration: 0.35 }}
      />
    </motion.div>

    <div className="p-6 flex-1 flex flex-col">
      <motion.h3
        className="font-semibold text-lg mb-2 text-gray-900 line-clamp-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3 + index * 0.15,
        }}
      >
        {blog.title}
      </motion.h3>

      <motion.p
        className="text-sm text-gray-600 mb-6 flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.4 + index * 0.15,
        }}
      >
        <LinkText
          text={blog.summary}
          linkClassName="text-[#2D6FBA] hover:underline font-bold"
        />
      </motion.p>

      <Link
        to={`/blog/${blog.slug}`}
        className="text-blue-600 font-medium text-sm flex items-center gap-1 hover:underline mt-auto group"
      >
        Read More
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          whileHover={{ x: 3 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 0.6,
          }}
        >
          <ArrowRight className="h-4 w-4" />
        </motion.div>
      </Link>
    </div>
  </motion.article>
);

const BlogSection = ({ limit }: { limit?: number }) => {
  const { data: cmsData } = useSectionData<any>("blogs", "blogs");
  const { data: articlesData } = useSectionData<any>("blogs", "articles");

  let displayBlogs = Array.isArray(articlesData) ? articlesData : [];

  if (limit) {
    displayBlogs = displayBlogs.slice(0, limit);
  }

  const sectionTitle = cmsData.articlesHeading || "Blogs";
  const sectionSub = cmsData.articlesSub || "";

  return (
    <motion.section
      id="blogs"
      className="bg-black p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container pt-10 mx-auto px-4 md:px-0">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-2 md:mb-3 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
        >
          {sectionTitle}
        </motion.h2>

        <motion.p
          className="text-white/80 mb-8 md:mb-12 text-base md:text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
        >
          {sectionSub}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.6,
          }}
        >
          {displayBlogs.map((blog: any, index: number) => (
            <BlogCard
              key={blog.id || blog.slug || index}
              blog={{
                id: blog.id || index + 1,
                slug: blog.slug || "",
                title: blog.title || "",
                img: blog.img || blog.image || "",
                summary: blog.summary || blog.excerpt || blog.description || "",
              }}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      {/* CTA SECTION */}
      <div className="mt-16 md:mt-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex-1 md:pr-10">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 text-left">
              {cmsData.ctaTitle || ""}
            </h3>
            <p className="text-gray-800 text-base md:text-lg mb-0 max-w-xl text-left">
              <LinkText
                text={cmsData.ctaDescription || ""}
                linkClassName="text-[#2D6FBA] hover:underline font-bold"
              />
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-[320px] md:mr-10 mt-8 md:mt-0">
            <button
              onClick={() => {
                window.location.href = cmsData.ctaPrimaryUrl || "";
              }}
              type="button"
              className="bg-black hover:bg-gray-900 text-white font-medium px-6 py-3 rounded-md transition-colors w-full"
            >
              {cmsData.ctaPrimaryLabel || ""}
            </button>
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = cmsData.companyProfilePdf || "";
                link.download = "Kumar Power - Company Profile.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              type="button"
              className="bg-white border border-gray-400 text-black font-medium px-6 py-3 rounded-md transition-colors w-full"
            >
              {cmsData.ctaSecondaryLabel || ""}
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default BlogSection;
