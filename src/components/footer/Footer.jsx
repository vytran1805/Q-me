import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      {/* refer to this when click on "contact" on navigation bar */}
      <a className="anchor" id="contact"></a>
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={`primaryText ${css.left}`}>
          Let&rsquo;s{" "}
          <a href="mailto:vytran1805@gmail.com">
            <em>connect!</em>
          </a>
        </div>
        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">
              <strong>Vy Tran</strong>
            </span>
            <p>Ottawa, ON, Canada</p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
