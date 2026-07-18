
import weather from "@/assets/blog3.png";
import sustainable from "@/assets/blog2.png";
import maintenance from "@/assets/blog1.png";
import myBlogFeatureImage from "@/assets/BlogImages/industrial-kirloskar-dg-set-750-1500kva-feature-image.jpg";
import myBlogFeatureImage2 from "@/assets/BlogImages/kirloskar-silent-generator-cpcb-genset-75dba-noise-feature-image.jpg";
import myBlogFeatureImage3 from "@/assets/BlogImages/amf-panel-for-generator-feature-image.jpg";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import companyProfile from "./profile.pdf";

import { Link } from "react-router-dom";
import kirloskargenerator from "@/assets/BlogImages/kirloskar-genrator.png"

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  img: string;
  summary: string;
}

const blogPosts: BlogPost[] = [
   
  {
    id: 1,
    slug: "amf-panel-for-dg-set",
    img: myBlogFeatureImage3,

    title:
      "AMF Panel for DG Set: Automatic Power Management for Continuous Operations",

    summary:
      "AMF Panels (Automatic Mains Failure Panels) for DG Sets are essential for ensuring uninterrupted power supply, automatically switching between mains and generator power during outages.",
  },
  
  
  
  {
    id: 2,
    slug: "kirloskar-silent-generator",
    img: myBlogFeatureImage2,

    title:
      "Kirloskar Silent Generator for Home and Business: Diesel, Green & DG Set Guide",

    summary:
      "The Kirloskar silent power generator operates at a noise level of less than 75 dBA at 1 metre distance, which is roughly similar to the sound of a normal conversation.",
  },

  {
    id: 3,
    slug: "industrial-kirloskar-dg-set-750kva-1500kva",
    img: myBlogFeatureImage,

    title:
      "Industrial Kirloskar DG Set (750 kVA to 1500 kVA) for Heavy Duty Power Requirement",

    summary:
      "Heavy-duty industrial Kirloskar DG Sets ranging from 750 kVA to 1500 kVA are engineered for continuous, reliable prime and standby power in large-scale manufacturing, infrastructure, and commercial sectors.",
  },



];

const BlogCard = ({
  blog,
  index
}: {
  blog: BlogPost;
  index: number;
}) => (
  <motion.article
    className="rounded-xl bg-white overflow-hidden flex flex-col shadow-md transition-all duration-300"

    initial={{ opacity: 0, y: 30 }}

    animate={{ opacity: 1, y: 0 }}

    transition={{
      duration: 0.5,
      delay: 0.2 + index * 0.15
    }}

    whileHover={{
      y: -14,
      scale: 1.03,

      boxShadow:
        "0 12px 32px 0 rgba(212,175,55,0.18)",

      borderImage:
        "linear-gradient(90deg, #413d32 0%, #f7e7b4 100%) 1",

      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "#d4af37",

      transition: { duration: 0.35 }
    }}

    style={{
      border: "2px solid transparent",
      borderImage: "none"
    }}
  >

    
    <motion.div className="overflow-hidden h-auto w-full">

      <motion.img
        
        src={blog.img}
       
        alt={blog.title}
        className="w-full object-contain transition-all duration-300"
        loading="lazy"

        whileHover={{
          scale: 1.10,
          filter: "brightness(0.92) saturate(1.1)"
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
          delay: 0.3 + index * 0.15
        }}
      >
        {blog.title}
      </motion.h3>

      <motion.p
        className="text-sm text-gray-600 mb-6 flex-1"

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        transition={{
          delay: 0.4 + index * 0.15
        }}
      >
        {blog.summary}
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
            duration: 0.6
          }}
        >
          <ArrowRight className="h-4 w-4" />
        </motion.div>

      </Link>

    </div>
  </motion.article>
);

const BlogSection = () => {
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
            duration: 0.6
          }}
        >
          Blogs
        </motion.h2>

        <motion.p
          className="text-white/80 mb-8 md:mb-12 text-base md:text-lg"

          initial={{ opacity: 0, y: -20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{
            delay: 0.3,
            duration: 0.6
          }}
        >
          Explore expert articles, case studies, and latest trends in industrial power solutions.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{
            delay: 0.4,
            duration: 0.6
          }}
        >
          {blogPosts.map((blog, index) => (
            <BlogCard
              key={blog.id}
              blog={blog}
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
              Call To Action
            </h3>

            <p className="text-gray-800 text-base md:text-lg mb-0 max-w-xl text-left">
              Have questions or need more information? We're here to help!
            </p>

          </div>

          <div className="flex flex-col gap-4 w-full md:w-[320px] md:mr-10 mt-8 md:mt-0">

            <button
              onClick={() => {
                window.location.href = "/contact";
              }}

              type="button"

              className="bg-black hover:bg-gray-900 text-white font-medium px-6 py-3 rounded-md transition-colors w-full"
            >
              Enquire Now
            </button>

            <button
              onClick={() => {
                const link = document.createElement("a");

                link.href = companyProfile;

                link.download =
                  "Kumar Power - Company Profile.pdf";

                document.body.appendChild(link);

                link.click();

                document.body.removeChild(link);
              }}

              type="button"

              className="bg-white border border-gray-400 text-black font-medium px-6 py-3 rounded-md transition-colors w-full"
            >
              Download Our Company Profile
            </button>

          </div>

        </div>

      </div>

    </motion.section>
  );
};

export default BlogSection;

