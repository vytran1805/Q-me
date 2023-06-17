import css from "./Header.module.scss";
// import { BsPerson } from "react-icons/bs";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../utils/motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import useHeaderShadow from "../hooks/useHeaderShadow";
// import { TbLetterQ } from "react-icons/tb";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  return (
    // initially the header is hidden, when it is in view, it will be shown
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>
          <img src="./public/img/letter-q.png" alt="logo" />
          {/* <p>me</p> */}
        </div>
        <ul
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">Products</a>
          </li>
          <li>
            <a href="#skills">Pricing</a>
          </li>
          <li>
            <a href="#projects">Solutions</a>
          </li>
          <li>
            <a href="#contact">Company</a>
          </li>
        </ul>
        {/* This icon will be shown when the screen is sm or md */}
        {document.documentElement.clientWidth <= 640 ? (
          <div
            className={css.menuIcon}
            onClick={() => setMenuOpened((prevState) => !prevState)}
          >
            <HiOutlineMenuAlt3 size={30} />
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

export default Header;
