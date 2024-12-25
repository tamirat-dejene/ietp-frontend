import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { color, layout, space, typography } from "styled-system";

const OuterFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: inherit;
`;

interface FormContainerProps {
  max_width?: string;
}
const FormContainer = styled.div<FormContainerProps>`
  max-width: ${(props) => props.max_width || "500px"};
  background: #fff;
  padding: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin: 14px auto;
  border-radius: 14px;
`;

const FormLabel = styled.h2`
  text-align: left;
  padding-left: 30px;
  font-size: 32px;
  font-weight: 600;
  color: #16c098;
  ${typography}
`;

const Form = styled.form`
  ${space}
`;

const FormRow = styled.div`
  display: flex;
  margin: 35px 0;
  ${layout}
`;

const InputData = styled.div`
  width: 100%;
  height: 30px;
  margin: 0 30px;
  position: relative;
  ${layout}
`;

interface InputProps {
  type: string;
}

const IconButton = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #3498db;
  font-size: 20px;
  ${layout}
`;

const Input = styled.input<InputProps>`
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 16px;
  padding-left: 5px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.12);

  ${(props) =>
    props.type !== "date" &&
    `
      &:focus ~ label,
      &:valid ~ label {
      transform: translateY(-32px);
      font-size: 12px;
      color: #3498db;
    }
  `}

  ${(props) =>
    props.type === "date" &&
    `
    ~ label {
      left: 100px;
    }
    &:focus ~ label,
    &:valid ~ label {
      transform: translateY(-32px) translateX(-100px);
      color: #3498db;
      font-size: 12px;
    }
  `}

  ${(props) =>
    props.type === "password" &&
    `
    // padding-right: 25px;
  `}
  ${typography}
`;

const Label = styled.label`
  position: absolute;
  pointer-events: none;
  bottom: 6px;
  font-size: 14px;
  transition: all 0.3s ease;
  ${typography}
`;

const Underline = styled.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 100%;
  &:before {
    position: absolute;
    content: "";
    height: 2px;
    width: 100%;
    background: #3498db;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  padding-top: 15px;
  padding-left: 30px;
  ${space}
`;

const StyledLink = styled(Link)`
  ${typography}
  ${color}
  ${space}
  ${layout}
  padding: 5px 15px;
  background-color: #f56565;
  color: white;
  height: 25px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background-color: #c53030;
  }
`;

const StyledButton = styled.button`
  ${typography}
  ${color}
  ${space}
  ${layout}
  padding: 5px 15px;
  background-color: #4299e1;
  width: 100px;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #2b6cb0;
  }

  &:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
  }
`;

const FormLink = styled(Link)`
  ${typography}
  ${color}
  ${space}
  ${layout}
  text-decoration: none;
  font-size: 12px;
  color: #3498db;
  position: absolute;
  right: 26px;
  bottom: 8px;
  &:hover {
    text-decoration: underline;
  }
`;

const LogoutButton = styled.button`
  ${typography}
  ${color}
  ${space}
  ${layout}
  background-color: inherit;
  &:hover {
    cursor: pointer;
  }
`;

export {
  OuterFormContainer,
  FormContainer,
  FormLabel,
  Form,
  FormRow,
  InputData,
  Input,
  Label,
  Underline,
  ButtonContainer,
  StyledLink,
  StyledButton,
  IconButton,
  FormLink,
  LogoutButton,
};
