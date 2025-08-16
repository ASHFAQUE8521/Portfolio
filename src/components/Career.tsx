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
          <div className="career-info-box">
            <div className="career-info-in">
              <h4>Front End Developer</h4>
              <h3>2023</h3>
            </div>
            <p>
              Developed interactive and responsive user interfaces using modern
              JavaScript frameworks. Collaborated with designers to implement
              pixel-perfect layouts and ensured cross-browser compatibility for
              all web applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <h4>Back End Developer</h4>
              <h3>2024</h3>
            </div>
            <p>
              Built robust server-side logic and RESTful APIs with Node.js and
              Express.js. Managed databases, optimized queries, and ensured secure
              data handling for scalable web platforms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <h4>Full Stack Developer</h4>
              <h3>NOW</h3>
            </div>
            <p>
              Delivering complete web solutions by integrating front-end and
              back-end technologies. Focused on creating seamless user
              experiences, maintaining code quality, and deploying applications
              using modern development workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
