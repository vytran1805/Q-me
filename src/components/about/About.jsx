import css from "./About.module.scss";
import { motion } from "framer-motion";
import { textContainer, textVariant } from "../../utils/motion";

const About = () => {
  return (
    <motion.section
      variants={textContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={css.wrapper}
    >
      {/* refer to this when click on "about" on navigation bar */}
      <a className="anchor" id="about"></a>
      <motion.div
        variants={textVariant(0.7)}
        className={`paddings ypaddings flexCenter innerWidth ${css.container}`}
      >
        <div className="primaryText">About me</div>
        <div className={`secondaryText ${css.text}`}>
          <p>
            Vy is a motivated student currently pursuing Computer programming
            studies at Algonquin College, based in Ottawa. With a deep-rooted
            interest in technology, she seeks to leverage her passion to tackle
            complex challenges in the field of <em>software development</em>.
            She strives to develop innovative software solutions that have a
            tangible impact on society.
          </p>

          <p>
            As a driven individual, she is constantly seeking opportunities to
            enhance her skills, making her a valuable asset to the software
            development industry. In this regard, she is actively looking for a{" "}
            <strong>
              Software/Full stack Developer Coop position for the Fall of 2023
            </strong>
            . If you have any information regarding available positions or would
            like to learn more about her qualifications, please do not hesitate
            to{" "}
            <a href="mailto:tran0472@algonquinlive.com">
              <em>
                <strong>get in touch!</strong>
              </em>
            </a>
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};
export default About;
