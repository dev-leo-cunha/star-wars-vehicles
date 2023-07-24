import styled from "styled-components";
import TextMaskInput from "react-text-mask";
import { Form } from "formik";
import { Box } from "@mui/material";

export const FormFormik = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FormCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FormFormikCard = styled(Form)`
  display: flex;

  @media (max-width: 765px) {
    flex-direction: column;
  }
`
export const BoxFormik = styled(Box)`
  color: #fff;
  @media (max-width: 765px) {
    font-size: 12px;
  }
`;
export const Formbox = styled.div`
  background-color: rgba(30, 30, 30, 0.8);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 5px 5px 150px 5px rgba(50, 50, 50, 0.7);
  min-width: 350px;
  @media (max-width: 765px) {
    min-width: 280px;
    padding: 15px;
  }
`;
export const Label = styled.div`
  display: flex;
  @media (max-width: 765px) {
    display: block;
  }
`;
export const StyledInput = styled.input`
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  outline: none;
  width: 315px;
  margin: 5px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  @media (max-width: 765px) {
    width: 230px;
    font-size: 13px;
    padding: 6px;
  }
`;
export const StyledInputMask = styled(TextMaskInput)`
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  outline: none;
  width: 315px;
  margin: 5px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  @media (max-width: 765px) {
    width: 230px;
    font-size: 13px;
    padding: 6px;
  }
`;
export const DivErrorMsg = styled.div`
  height: 20px;
  margin-left: 5px;
`;
export const ErrorMsg = styled.div`
  color: red;
  @media (max-width: 765px) {
    font-size: 12px;
  }
`;
export const StepLabel = styled.span`
  color: #ccc;
`;
export const ButtonLeft = () => {
  return {
    color: "#FFF",
    marginTop: "10px",
    borderColor: "#FFF",
    borderRadius: "10px 0 0 0",
    width: "50%",
    ":hover": {
      color: "#CCC",
      borderColor: "#CCC",
    },
    "@media (max-width: 765px)": {
      fontSize: "10px",
      width: "45%"
    },
  };
};
export const ButtonRight = () => {
  return {
    borderRadius: "0 10px 0 0",
    marginTop: "10px",
    color: "#FFF",
    borderColor: "#FFF",
    width: "50%",
    ":hover": {
      color: "#CCC",
      borderColor: "#CCC",
    },
    "@media (max-width: 765px)": {
      fontSize: "10px",
      width: "55%"
    },
  };
};

export const toastStyle = {
  background: "#fff",
  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
  borderRadius: "4px",
  color: "#000",
  fontWeight: "bold",
};

export const TicketOrCard = styled.div`
  border: 1px solid #fff;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0 0 10px 10px;
  padding: 20px;
  width: 650px;
  height: 350px;
  @media (max-width: 765px) {
    width: 238px;
    height: 390px;
    padding: 10px 20px;
  }
`
