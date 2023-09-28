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
      <h2>Hello there 👋</h2>
      <h3>
        I am an ambitious web developer looking to break into the field
      </h3>
      <p>I am currently enrolled at the University of North Florida in the School Of Computing where I have a 3.57 major GPA. </p>
    </motion.header>
  );
}

export default Header;
