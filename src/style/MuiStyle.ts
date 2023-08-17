export const PaginationSX = () => {
  return {
    "& .MuiPaginationItem-page": { color: "#fff", border: "1px solid #fff" },
    "& .MuiPaginationItem-page.Mui-selected": {
      color: "#000",
      border: "1px solid #000",
      backgroundColor: "#fff",
    },
    "& .MuiPaginationItem-previousNext": {
      color: "#FFF",
      border: "1px solid #fff",
    },
    "& .Mui-disabled": { color: "#fff" },
    "marginTop": "20px",
  };
};
export const StepSX = () => {
  return {
    "& .MuiSvgIcon-root": { fill: "#FFF" },
    "& .css-117w1su-MuiStepIcon-text": { fill: "rgb(0, 0, 0)", fontSize: "16px" },
    "& .css-10psl7k": { fill: "rgb(0, 0, 0)", fontSize: "16px" },
    "@media (max-width:765px)": {
      "& .css-117w1su-MuiStepIcon-text": { fontSize: "12px" },
    },
  };
};

export const ButtonSX = () => {
  return {
    color: "#FFF",
    borderColor: "#FFF",
    width: "50%",
    marginTop: "15px",
    ":hover": {
      color: "#CCC",
      borderColor: "#CCC",
    },
    "@media (max-width:765px)": {
      width: "50%",
      marginTop: "8px",
      fontSize: "12px",
    },
  };
};
export const ButtonBoletoSX = () => {
  return {
    color: "#FFF",
    borderColor: "#FFF",
    width: "50%",
    marginTop: "15px",
    ":hover": {
      color: "#CCC",
      borderColor: "#CCC",
    },
    "@media (max-width:765px)": {
      width: "80%",
      marginTop: "8px",
      fontSize: "12px",
    },
  };
};
