import { motion } from "framer-motion";
import avatar from "../../../my-portfolio/src/images/avatar.jpg";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function LeftBar() {

  const copyEmailToClipboard = () => {
    const email = 'jvorndran311@gmail.com';

    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    toast.success('Email copied to clipboard', {
      position: toast.POSITION.BOTTOM_CENTER,
      className: 'email-copied-notification'
    });
  };

  const variants = {
    hidden: {
      opacity: 0,
      x: "-5vh"
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        damping: 32
      }
    },
  };

  return (
    <motion.section initial="hidden" animate="visible" variants={variants} className="left">
      <div className="sidebar-toggle-btn">
      <i className="fa-solid fa-xmark"></i>
      </div>
      <div className="info-bar">
        <div className="info-header">
          <div className="info-avatar">
            <img src={avatar} alt="" />
          </div>
          <h2 className="info-name">Jacob Vorndran</h2>
          <p className="info-title">Web Developer</p>
          <p className="info-email">
            <i className="fa-solid fa-envelope"></i> jvorndran311@gmail.com
          </p>
        </div>
        <div className="info-body">
          <div className="body-details">
            <h4>Residence:</h4> <span>United States</span>
            <h4>City:</h4> <span>Jacksonville</span>
            <h4>Language:</h4> <span>English</span>
          </div>
        </div>
        <div className="info-socials">
          <a
            href="https://github.com/jvorndran"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a onClick={copyEmailToClipboard}>
            <i className="fa-solid fa-envelope"></i>
          </a>
          <ToastContainer />
        </div>
      </div>
    </motion.section>
  );
}

export default LeftBar;