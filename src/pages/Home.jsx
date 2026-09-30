import "../App.css"

import { Link } from "react-router-dom";

const Home = () =>  {
  return (
    <section className="hero container">
      <div className="hero-content">
        <p className="eyebrow">SOFTWARE DEVELOPER</p>

        <h1>
          Hi, I'm <span>Jemuel Fontila</span>
        </h1>

        <p className="hero-description">
          I build clean, practical, and user-focused software solutions.
          Welcome to my portfolio.
        </p>

        <div className="hero-actions">
          <Link to="/about" className="btn btn-primary">
            About Me
          </Link>

          <Link to="/projects" className="btn btn-secondary">
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}



export default Home;