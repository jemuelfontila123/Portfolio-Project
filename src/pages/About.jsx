  import profileImage from "../assets/profile.jpg";
  import resume from "/Jemuel_Fontila_Resume.pdf"


  const About = () => {
    return (
      <section className="container page-section">
        <div className="section-heading">
          <p className="eyebrow">ABOUT</p>
          <h1>About Me</h1>
        </div>

        <div className="about-grid">
          <img
            src={profileImage}
          alt="Profile"
          className="profile-image"
        />

        <div>
          <h2>Jemuel Fontila</h2>

          <p>
            I am a software development student with an interest in
            creating modern, maintainable, and user-friendly applications.
            I enjoy learning new technologies and applying software
            engineering principles to practical projects.
          </p>

          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            View Résumé
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;