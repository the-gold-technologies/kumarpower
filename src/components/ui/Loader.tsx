import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      {/* Radial background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Spinning ring */}
        <div className="relative w-20 h-20">
          {/* Outer static ring */}
          <div className="absolute inset-0 rounded-full border-4 border-blue-100" />
          {/* Spinning accent ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#2D6FBA]"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
          {/* Inner pulsing dot */}
          <motion.div
            className="absolute inset-0 m-auto w-4 h-4 rounded-full bg-[#2D6FBA]"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Brand text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-lg font-bold tracking-[0.25em] uppercase text-[#2D6FBA] mb-1">
            Kumar Power
          </h2>
          <motion.p
            className="text-xs tracking-[0.12em] text-gray-400 uppercase"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Loading...
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
