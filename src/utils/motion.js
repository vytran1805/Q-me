export const headerVariants = {
  hidden: {
    opacity: 0,
    y: -50, //display 50 pixels above its normal position on the y-axis, towards the negative direction
    transition: {
      // higher stiffness and damping => tighter and slower spring animation
      type: "spring", //smooth, bouncy movement
      stiffness: 300, //hard effect: how stiff or elastic the animation is
      damping: 140, //boucing effect: how quickly the animation comes to a stop
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.2, //1 second
    },
  },
};

export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? "100%" : direction === "right" ? "-100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
// The first div in Hero.jsx
export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
// motion for About section
export const textVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    //the initial state of the animated element
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type, //Ex: "tween" or "spring"
      delay, //delay before it starts
      duration,
      ease: "easeOut",
    },
  },
});

export const planetVariants = (direction) => ({
  hidden: {
    x: direction === "left" ? "-100%" : "100%",
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 1.8,
      delay: 0.5,
    },
  },
});

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.5,
    },
  },
};

export const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  // eslint-disable-next-line no-unused-vars
  visible: (i) => {
    const delay = 1.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};
// first div's children in Hero.jsx
export const staggerChildren = {
  hidden: { opacity: 0 }, //initial state of the animated element, opac = 0 means not visible
  show: {
    //the target state
    opacity: 1, //fully visible
    transition: {
      //control how the animation should occur
      staggerChildren: 0.5, //delay 0.5sec before starting its individual animation
    },
  },
};

export const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
// if we are on the md or sm screen size, this function will be called to return the style of the nav bar
export const getMenuStyles = (menuOpened) => {
  if (document.documentElement.clientWidth <= 640) {
    console.log("outside of sidebar reached"); //if the menu is not open, it will give the styling of -100% towards the right side
    return { right: !menuOpened && "-100%" }; //otherwise, it returns nothing
  }
};
