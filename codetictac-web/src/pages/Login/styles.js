import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid;
  border-radius: 5px;
  border-color: #ccc;
`;

export const Title = styled.h1`
  color: #333;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
`;

export const Input = styled.input`
  height: 48px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  padding: 0 20px;
  margin-top: 20px;
`;

export const Button = styled.button`
  height: 48px;
  background: #006668;
  border-radius: 4px;
  font-size: 16px;
  padding: 0 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #fff;
  font-weight: bold;
  border: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Link = styled.a`
  color: #006668;
`;
