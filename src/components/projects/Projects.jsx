import { fadeIn, staggerContainer } from "../../utils/motion";
import css from "./Projects.module.scss";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { TfiHandPointRight } from "react-icons/tfi";
import { FaLink } from "react-icons/fa";
// import { projects } from "../../utils/data";
const Projects = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amout: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      {/* refer to this when click on "projects" on navigation bar */}
      <a className="anchor" id="projects"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
        {/* heading */}
        <div className={`flexCenter ${css.heading}`}>
          <div className="primaryText">My Projects</div>
          <a href="https://github.com/vytran1805">
            <span>
              <em>
                <p className="secondaryText">
                  {<TfiHandPointRight />} More works...
                </p>
              </em>
            </span>
          </a>
        </div>
        <div className={css.projectCard}>
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            className="secondaryText"
          >
            <img src={"./img/game-hub.png"} alt="" />
            <p>Game Hub Web Application</p>
            <span className="icons">
              <SiGithub
                onClick={() =>
                  (location.href =
                    "https://github.com/vytran1805/game-hub-application")
                }
              />
              <FaLink
                onClick={() =>
                  (location.href = "https://game-hub-application.vercel.app/")
                }
              />
            </span>
          </motion.div>

          <motion.div
            variants={fadeIn("up", "tween", 0.6, 0.6)}
            className="secondaryText"
          >
            <img src={"./img/android.png"} alt="" />
            <p>Android Application</p>
            <span className="icons">
              <SiGithub
                onClick={() =>
                  (location.href =
                    "https://github.com/KyokoShrives/CST2335_Final_Project")
                }
              />
            </span>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.8, 0.6)}
            className="secondaryText"
          >
            <img src={"./img/tutor-form.png"} alt="" />
            <p>Tutor Assignment Application</p>
            <span className="icons">
              <SiGithub
                onClick={() =>
                  (location.href =
                    "https://github.com/vytran1805/DAO-Servlet-DesignPattern")
                }
              />
            </span>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            className="secondaryText"
          >
            <img src={"./img/bank-app.png"} alt="" />
            <p>Banking Application</p>
            <span className="icons">
              <SiGithub
                onClick={() =>
                  (location.href =
                    "https://github.com/vytran1805/banking-application")
                }
              />
            </span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
