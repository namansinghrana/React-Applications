import styled from "styled-components";

export const Button  = styled.button`
background-color: black;
color: white;
justify-content: center;
min-height: 40px;
border-radius: 5px;
min-width: 220px;
border: none;
font-size: 16px;
transition: 0.4s baackground ease-in;
cursor: pointer;
&:hover{
  background-color: white;
  border: 1px solid black;
  color: black;
  transition: 0.3s baackground ease-in;
  cursor: pointer;
}
`;

export const OutlineButton  = styled(Button)`
background-color: white;
color: black;
justify-content: center;
min-height: 40px;
border-radius: 5px;
min-width: 220px;
border: 1.5px solid black;
font-size: 16px;
transition: 0.4s baackground ease-in;
cursor: pointer;
&:hover{
  background-color: black;
  border: 1.5px solid white;
  color: white;
  transition: 0.3s baackground ease-in;
  cursor: pointer;
}
`;
