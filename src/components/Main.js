import React from "react";
import Header from "./Header";
import Technologies from "./Technologies";
import Works from "./Works";
import Footer from "./Footer";


function Main() {
  React.useEffect(() => {
    function reveal() {
      const texts = document.querySelectorAll(".text");
      const images = document.querySelectorAll(".image");
      for (let i = 0; i < texts.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = texts[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          texts[i].classList.add("reveal");
          images[i].classList.add("reveal");
        } else {
          texts[i].classList.remove("reveal");
          images[i].classList.remove("reveal");
        }
      }
    }

    window.addEventListener("scroll", reveal, true);

    reveal();
  });

  return (
    <section className="right">
      <Header />
      <Technologies />
      <Works />
      <Footer />
    </section>
  );
}

export default Main;
