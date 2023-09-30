import { motion } from "framer-motion";

function Header() {
  const variants = {
    hidden: {
      opacity: 0,
      y: "-5vh"
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        damping: 32
      }
    },
  };

  return (
    <motion.header initial="hidden" animate="visible" variants={variants}>
      <div className="sidebar-toggle-btn2">
        <i className="fa-solid fa-bars"></i>
      </div>
      <h2>Hello There 👋</h2>
      <h3>
          I am an ambitious developer with a strong foundation in both front-end and back-end technologies.
      </h3>
    </motion.header>
  );
}

export default Header;
