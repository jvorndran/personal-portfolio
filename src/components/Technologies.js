import technologyList from "./TechnologyList";
import { motion } from "framer-motion";

function Technology({ name, image }) {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <motion.div variants={variants} className="technology">
      <img src={image} alt={name} />
      <p>{name}</p>
    </motion.div>
  );
}

function TechnologyList() {
  const variants = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 8,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="technologies-container"
    >
      {technologyList.map((technology) => (
        <Technology
          key={technology.id}
          name={technology.name}
          image={technology.image}
        />
      ))}
    </motion.div>
  );
}

function Technologies() {
  const variants = {
    hidden: {
      opacity: 0,
      x: "50vh",
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 16,
      },
    },
  };

  return (
    <article className="technologies">
      <motion.h2 variants={variants}>Technologies & Tools I use</motion.h2>
      <TechnologyList />
    </article>
  );
}
export default Technologies;
