import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../utils/motion";
// import { BsFileEarmarkPdf, BsLinkedin, BsGithub } from "react-icons/bs";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      {/* refer to this when click on "hero" on navigation bar */}
      <a className="anchor" id="hero"></a>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amout: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        {/* left elements */}
        <div className={css.leftElements}>
          <motion.span
            // fade in to the right with the animation type of tween, the delay of 2sec, duration 1sec
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Say goodbye to menu confusion and elevate your customers&apos;
            experience!
          </motion.span>
          <motion.span
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="secondaryText"
          >
            Q-me, short for &quot;Query me,&quot; our intelligent chatbot is
            designed exclusively for restaurants, ready to be an ultimate dining
            companion for your customers.
            {/* Q-me is an innovative software solution designed exclusively for
            restaurants, revolutionizing the dining experience for both locals
            and tourists alike. With our integrated chatbot, we bring a new
            level of convenience and confidence to your table.  */}
            {/* Our intelligent chatbot is here to guide you through the menu,
            providing personalized recommendations based on your preferences and
            dietary restrictions. Whether you&apos;re a food enthusiast or a
            culinary novice, Q-me ensures you have a delightful dining
            experience by making informed choices. */}
            {/* Discover new flavors, explore
            unfamiliar cuisines, and savor every moment with Q-me, your trusted
            culinary companion. */}
          </motion.span>
          <button className={`button ${css.button}`}>Get a Demo</button>
        </div>

        {/* headshot */}
        <motion.div
          variants={
            document.documentElement.clientWidth <= 880
              ? fadeIn("up", "spring", 0.2, 1.5)
              : fadeIn("down", "spring", 0.2, 1.5)
          }
          className={css.person}
        >
          <img src={"./img/showCase1.png"} alt="" />
        </motion.div>

        {/* lower elements */}
        {/* <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className={css.socialContact}
          >
            <BsGithub
              onClick={() => (location.href = "https://github.com/vytran1805")}
            />

            <BsLinkedin
              onClick={() =>
                (location.href = "https://www.linkedin.com/in/vytran1805/")
              }
            />

            <BsFileEarmarkPdf
              onClick={() =>
                (location.href = "./src/assets/files/VyTran_resume.pdf")
              }
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className={css.certificate}
          >
            <span>FULL-STACK DEVELOPER</span>
          </motion.div>
        </div> */}
      </motion.div>
    </section>
  );
};

export default Hero;
