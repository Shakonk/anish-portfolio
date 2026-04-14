import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">
          {/* LEFT SIDE */}
          <div className="contact-box">
            <h4>Connect</h4>

            <p>
              <a
                href="mailto:anishpandkar9152@gmail.com"
                data-cursor="disable"
              >
                Email — anishpandkar9152@gmail.com
              </a>
            </p>

            <p>
              <a
                href="https://www.linkedin.com/in/anish-pandkar-9201a2301/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — anish-pandkar
              </a>
            </p>

            <h4>Education</h4>

            <p>
              MCA (Master of Computer Applications) — 2024–2026 | CGPA: 8.68
            </p>

            <p>
              BSc IT — 2021–2024 | CGPA: 7.18
            </p>
          </div>

          {/* MIDDLE */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/Shakonk"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/anish-pandkar-9201a2301/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Anish Pandkar</span>
            </h2>

            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;