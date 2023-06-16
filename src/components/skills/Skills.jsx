import css from "./Skills.module.scss";
import { textContainer, textVariant2 } from "../../utils/motion";
import { motion } from "framer-motion";
import { skills } from "../../utils/data";

const Skills = () => {
  const iconStyle = () => {
    if (document.documentElement.clientWidth > 640)
      return { color: "white", fontSize: "3rem" };
    return { color: "white", fontSize: "2rem" };
  };
  return (
    <motion.section
      variants={textContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amout: 0.25 }}
      className={css.wrapper}
    >
      {/* refer to this when click on "skills" on navigation bar */}
      <a className="anchor" id="skills"></a>
      <div
        className={`paddings ypaddings flexCenter innerWidth ${css.container}`}
      >
        <div className="primaryText">Skills</div>
        <div className={`secondaryText ${css.skillsContainer}`}>
          {skills.map((skill, i) => {
            return (
              <motion.div
                variants={textVariant2}
                className={css.skillsItem}
                key={i}
              >
                <skill.icon style={iconStyle()} />
                <p>{skill.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
