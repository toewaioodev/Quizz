import { motion } from "framer-motion";
import { Home, Sword, Trophy, User } from "lucide-react";
import { Link, usePage } from "@inertiajs/react"; // Switched imports
import { Label } from "@headlessui/react";
import path from "path";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
    {icon:Sword , Label : "Fight",path:"/lobby"},
  { icon: Trophy, label: "Ranks", path: "/leaderboard" },
  
  { icon: User, label: "Profile", path: "/profile" },

  
];

export function BottomNav() {
  const { url } = usePage(); // Get current URL from Inertia state

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-safe"
    >
      <div className="flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 sm:py-4 mb-4 mx-auto max-w-sm bg-amber-500 rounded-[2rem] glow-subtle">
        {navItems.map((item) => {
          // Inertia 'url' is a string. We check if it matches the item path.
          // We use startsWith or exact match depending on your routing needs.
          const isActive = url === item.path || url.startsWith(`${item.path}/`);

          return (
            <Link
              key={item.path}
              href={item.path}
              className="relative no-underline"
            >
              <motion.div
                className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-3 rounded-full transition-all duration-300 min-h-[48px] cursor-pointer ${
                  isActive
                    ? "gradient-brand text-primary-foreground"
                    : "text-muted-foreground hover:text-card-foreground active:bg-muted/20"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {isActive && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    className="text-sm font-semibold whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}