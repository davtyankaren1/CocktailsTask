import styled from "styled-components";
// @ts-ignore
export default function Input({ type, placeholder, name, onChange }) {
    return <StyledInput type={type} placeholder={placeholder} name={name} onChange={onChange} />;
}

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;

  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.1rem whitesmoke;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
    font-weight: 100;
    font-size: 1rem;
  }
`;