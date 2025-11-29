export const ANIMATION_DURATIONS = {
  fast: 0.15,
  medium: 0.25,
  slow: 0.4,
  slowest: 0.6,
};

export const EASING = {
  easeOut: [0.16, 1, 0.3, 1],
  easeIn: [0.7, 0, 0.84, 0],
  easeInOut: [0.83, 0, 0.17, 1],
  spring: [0.25, 0.46, 0.45, 0.94],
  bounce: [0.68, -0.55, 0.265, 1.55],
  snappy: [0.2, 0, 0, 1],
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.02,
      duration: ANIMATION_DURATIONS.medium,
      ease: EASING.easeOut,
    },
  },
};

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.medium,
      ease: EASING.easeOut,
    },
  },
};

export const fadeDownVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.medium,
      ease: EASING.easeOut,
    },
  },
};

export const fadeRightVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATIONS.medium,
      ease: EASING.easeOut,
    },
  },
};

export const fadeLeftVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATIONS.medium,
      ease: EASING.easeOut,
    },
  },
};

export const zoomInVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATIONS.medium,
      ease: EASING.easeOut,
    },
  },
};

export const cardHoverVariants = {
  rest: {
    scale: 1,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: EASING.easeOut,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: EASING.easeOut,
    },
  },
};

export const buttonHoverVariants = {
  rest: {
    scale: 1,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: EASING.easeOut,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: EASING.easeOut,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: EASING.easeOut,
    },
  },
};

export const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.05,
      duration: ANIMATION_DURATIONS.medium,
      ease: EASING.easeOut,
    },
  }),
};

export const defaultViewport = { once: true, amount: 0.2 };
export const delayedViewport = { once: true, amount: 0.1, margin: "-100px" };

export const parallaxVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATIONS.slow,
      ease: EASING.easeOut,
    },
  },
};

export const rotateVariants = {
  hidden: { opacity: 0, rotate: -10 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: ANIMATION_DURATIONS.medium,
      ease: EASING.easeOut,
    },
  },
};

export const bounceVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.medium,
      ease: EASING.easeOut,
    },
  },
};
