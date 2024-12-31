import { motion } from "framer-motion";
import avatar from "../images/avatar.jpg";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {MdEmail} from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import Button from "@mui/material/Button"
import resume from "../jacob_vorndran_resume_12_13.pdf"

function LeftBar() {

  const copyEmailToClipboard = () => {
    const email = 'jvorndran400@gmail.com';

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
          <p className="info-email">
            <MdEmail></MdEmail> <p>jvorndran400@gmail.com</p>
            <AiFillGithub /> <a href="https://github.com/jvorndran" target="_blank">github.com/jvorndran</a>
          </p>

        </div>
        <div className="info-body">

         <h1>Education</h1>
          <hr />
          <div><h4>University of North Florida</h4><p>Expected December 2024</p><p><b>Major GPA: 3.46</b></p></div>

        </div>

        <div className="button-container">
          <a href={resume} download="resume_jacob_vorndran">
            <Button variant="contained">Download Resume</Button>
          </a>
        </div>

        <div className="info-socials">

          <a
            href="https://github.com/jvorndran"
            target="_blank"
          >
           <AiFillGithub />
          </a>
          <a onClick={copyEmailToClipboard}>
            <MdEmail />
          </a>
          <ToastContainer />
        </div>
      </div>
    </motion.section>
  );
}

export default LeftBar;