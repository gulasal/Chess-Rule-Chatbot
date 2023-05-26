export const FooterStyle = {
  height: "4rem",
  borderRadius: "0 0 0 15px",
  width: "27rem",
  border: "none",
  paddingLeft: "0.5rem",
  "@media (max-width: 768px)": {
    width: "80%",
  },
};
export const chatbotFooterStyle = {
  width: "100%",
  height: "4rem",
  backgroundColor: "#290E44",
  margin: "0",
  padding: "0",
  borderRadius: "0 0 15px 15px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media(max-width: 768px)": {
    width: "100%",
  },
};

export const buttonStyles = {
  width: "3rem",
  height: "4rem",
  borderRadius: " 0 0 15px 0 ",
  "@media(maxWidth: 768px)": { width: "20%" },
};

export const chatbotBodyStyles = {
  width: "100%",
  height: "25rem",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  padding: "1% 1.5rem",
  overflowY: "auto",

  ".right": {
    flexDirection: "column",
    alignItems: "flex-end",
    "& > div": {
      backgroundColor: "#88F1B6",
      borderRadius: "10px 10px 0 10px",
    },
  },
  ".left": {
    alignItems: "flex-start",
    marginTop: "0.8rem",
    "& > div": {
      backgroundColor: "rgb(135, 206, 250)",
      borderRadius: "10px 10px 10px 0",
    },
  },

  "@media (maxWidth: 768px)": {
    width: "100%",
    height: "calc(100vh - 9rem)",
  },
};
