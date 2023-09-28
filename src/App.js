import React from "react";
import "./App.css";
import LeftBar from "./components/LeftBar";
import Main from "./components/Main";
import { motion } from "framer-motion";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  React.useEffect(() => {
    function toggle() {
      const leftBar = document.querySelector(".left");
      leftBar.classList.toggle("active");
      document.querySelector(".sidebar-toggle-btn2").classList.toggle("hide");
    }

    document
        .querySelector(".sidebar-toggle-btn")
        .addEventListener("click", toggle);
    document
        .querySelector(".sidebar-toggle-btn2")
        .addEventListener("click", toggle);
  });

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              className="App"
          >
            <LeftBar />
            <Main />
          </motion.div>
        </Route>
      </Routes>
  );
}

export default App;

