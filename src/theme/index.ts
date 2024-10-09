const colors = {
  primary: "#4F372F",
  success: "#27AE60",
  warning: "#F2C94C",
  error: "#EB5757",
  info: "#2F80ED",
  background: "#EEEEEE",
  foreground: "#F8F9FA",
  title: "#121212",
  subtitle: "#464646",
};

const typography = {
  fontFamily: `'Roboto', sans-serif`,
  fontSizes: {
    tiny: "10px",
    small: "12px",
    medium: "14px",
    large: "16px",
    xLarge: "20px",
    xxLarge: "24px",
    xxxLarge: "32px",
    title: "40px",
  },
  fontWeights: {
    regular: 400,
    bold: 700,
    bolder: 900,
  },
};

const spacing = (factor: number) => `${factor * 8}px`;

const breakpoints = {
  xs: "320px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

const shadows = {
  default: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  medium: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  large: "0px 8px 16px rgba(0, 0, 0, 0.1)",
};

const theme = {
  colors,
  typography,
  spacing,
  breakpoints,
  shadows,
};

export default theme;
