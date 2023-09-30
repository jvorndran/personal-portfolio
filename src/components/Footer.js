import {toast} from "react-toastify";
import {AiFillGithub} from "react-icons/ai";
import {GrMail} from "react-icons/gr";

function Footer() {

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

  return (
    <footer className='footer'>
      <h2>Contact me</h2>
      <div className="footer-links">
        <div>
          <a href="https://www.github.com/jvorndran" target="_blank">
            <p style={{display: "flex", gap: "5px", alignItems: "center"}}><AiFillGithub />github.com/jvorndran</p>
          </a>
        </div>

        <div>
          <a onClick={copyEmailToClipboard}>
            <i className="fa-solid fa-envelope"></i>
            <p style={{display: "flex", gap: "5px", alignItems: "center"}}><GrMail />jvorndran400@gmail.com</p>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
