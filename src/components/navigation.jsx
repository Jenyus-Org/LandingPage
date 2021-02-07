import { motion, useCycle } from "framer-motion";
import * as React from "react";
import clsx from "clsx";
import { Link } from "gatsby";
import "./navigation.css";

const navigation = {
  open: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const navItems = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const navItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const Navigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
      <button
        onClick={toggleOpen}
        className={clsx(
          "absolute",
          "top-10",
          "right-10",
          "focus:outline-none",
          "z-50",
        )}>
        <svg width="45" height="45" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>
      <motion.div
        className={clsx(
          "h-screen",
          "w-screen",
          "absolute",
          "bg-white",
          "z-40",
          { "pointer-events-none": !isOpen },
          "flex",
          "items-center",
          "justify-center",
        )}
        variants={navigation}>
        <motion.ul
          className={clsx("flex", "flex-col", "items-start")}
          variants={{ navItems }}>
          <motion.li
            className={clsx(
              "menu-item",
              "mb-4",
              "text-2xl",
              "font-title",
              "w-auto",
            )}
            variants={navItem}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>
            <Link to="/">Home</Link>
          </motion.li>
          <motion.li
            className={clsx(
              "menu-item",
              "mb-4",
              "text-2xl",
              "font-title",
              "w-auto",
            )}
            variants={navItem}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>
            <Link to="/projects">Projects</Link>
          </motion.li>
          <motion.li
            className={clsx(
              "menu-item",
              "mb-4",
              "text-2xl",
              "font-title",
              "w-auto",
            )}
            variants={navItem}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>
            <Link to="/about-us">About Us</Link>
          </motion.li>
          <motion.li
            className={clsx(
              "menu-item",
              "mb-4",
              "text-2xl",
              "font-title",
              "w-auto",
            )}
            variants={navItem}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>
            <Link to="/contact">Contact Us</Link>
          </motion.li>
          <motion.li
            className={clsx(
              "menu-item",
              "mb-4",
              "text-2xl",
              "font-title",
              "w-auto",
            )}
            variants={navItem}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>
            <Link to="/faq">FAQ</Link>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
