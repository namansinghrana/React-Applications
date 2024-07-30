import { useState } from "react";
import styled from "styled-components";




const NumberSelector = ({setError ,error, selectedNumber,setSelectedNumber}) => {

    const arrNumber = [1,2,3,4,5,6];

    const numberSelectorHandler = (value) => {
        setSelectedNumber(value)
        setError("")
    }

    return (
    <NumberSelectorContainer>
    <p className="error">{error}</p>
    <div className="flex">  
        {arrNumber.map((value,i) => (
        <Box
        onClick={() => numberSelectorHandler(value)}
        isSelected = {value == selectedNumber}
         key={i}>{value} </Box>))
    }
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector;


const NumberSelectorContainer = styled.div`

display: flex;
flex-direction: column;
align-items: end;

.error{
    color: red;
}

.flex{
    display: flex;
    gap: 24px;
}

p{
    padding-top:10px;
    font-size: 18px;
    font-weight: 600;
}

`;


const Box = styled.div`
height: 65px;
width: 65px;
background-color: blue;
display: grid;
font-size: 18px;
place-items: center;
font-weight: 600;
background-color: ${(props) => props.isSelected ? "black" : "white"};
color: ${(props) => props.isSelected ? "white" : "black"};
border: 1.5px solid black;

&:hover{
    cursor: pointer;
}
`;