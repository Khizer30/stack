import founder1 from "../../assets/1.png";
import founder2 from "../../assets/2.png";
import "./HeroFounders.css";

const HeroFounders = () => {
  return (
    <section id="founders" className="hero-founders">
      <div className="hero-founders-bg" />

      <div className="hero-founders-container">
        <div className="hero-founders-header">
          <p className="hero-founders-subtitle"></p>

          <h2 className="hero-founders-title">
            FOUNDERS
          </h2>
        </div>

        <div className="hero-founders-content">

          {/* ================= Founder 1 ================= */}

          <div className="founder-row">

            <div className="founder-image">
              <img
                src={founder1}
                alt="Mubeen Tariq"
                loading="eager"
              />
            </div>

            <div className="founder-content">

              <p className="founder-label">
                COO
              </p>

              <h2 className="founder-name">
                Mubeen Tariq
              </h2>

              <p className="founder-role">
                Chief Operating Officer
              </p>

              <p className="founder-description">
                Mubeen Tariq oversees operations and strategic execution,
                ensuring every project is delivered with precision, innovation,
                and exceptional quality. He focuses on transforming ideas into
                scalable digital solutions while leading teams with efficiency
                and vision.
              </p>

            </div>

          </div>

          {/* ================= Founder 2 ================= */}

          <div className="founder-row reverse">

            <div className="founder-image">
              <img
                src={founder2}
                alt="Muhammad Hamza"
                loading="eager"
              />
            </div>

            <div className="founder-content">

              <p className="founder-label">
                CEO
              </p>

              <h2 className="founder-name">
                Muhammad Hamza
              </h2>

              <p className="founder-role">
                Chief Executive Officer
              </p>

              <p className="founder-description">
                Muhammad Hamza leads STACK with a vision of building world-class
                technology products. His expertise in software engineering,
                business strategy, and innovation drives the company's growth
                while creating impactful digital experiences for clients
                worldwide.
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroFounders;