import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Current / Latest */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>Krutanics Solutions</h5>
              </div>
              <h3>Jan 2026 – Mar 2026</h3>
            </div>
            <p>
              Developed and maintained full-stack web applications using React.js,
              Node.js, and Express.js. Implemented secure authentication systems
              (login/signup) and integrated RESTful APIs. Designed responsive
              frontend interfaces and optimized backend performance using MongoDB.
              Collaborated using Git/GitHub and contributed to debugging, testing,
              and performance improvements.
            </p>
          </div>

          {/* Project Experience - AI Chatbot */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI ChatBot Project</h4>
                <h5>Personal Project</h5>
              </div>
              <h3>Jan 2026 – Feb 2026</h3>
            </div>
            <p>
              Built a full-stack AI chatbot using React.js, Node.js, and Express.js.
              Integrated Gemini API for intelligent query processing and real-time
              responses. Developed a responsive UI with Tailwind CSS and optimized
              performance for fast communication.
            </p>
          </div>

          {/* Project Experience - ActionHub */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ActionHub - Task Manager</h4>
                <h5>Personal Project</h5>
              </div>
              <h3>Feb 2026 – Mar 2026</h3>
            </div>
            <p>
              Developed a responsive task management web application with features
              like task creation, editing, deletion, and status tracking.
              Implemented dynamic UI components using React.js and JavaScript.
              Utilized local storage for persistent data and followed clean UI/UX
              principles with Git version control.
            </p>
          </div>

          </div>
        </div>
      </div>
   
  );
};

export default Career;