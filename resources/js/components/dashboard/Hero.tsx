import { motion } from "framer-motion";
import { Swords } from "lucide-react";
import { Link } from "@inertiajs/react"; // Switched import

export function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 }}
      className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] gradient-brand p-5 sm:p-6 glow-brand"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl glass flex items-center justify-center">
            <Swords className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-primary-foreground">1v1 Battle</h2>
            <p className="text-white/70 text-xs sm:text-sm">Compete in real-time</p>
          </div>
        </div>
        
        <p className="text-white/80 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
          Challenge random players in a fast-paced quiz duel. First to 5 correct answers wins!
        </p>
        
        {/* We wrap the motion button in an Inertia Link */}
        <Link href="/lobby" className="block w-full">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3.5 sm:py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow text-sm sm:text-base min-h-[48px] active:bg-gray-50 uppercase"
          >
            FIND OPPONENT
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}