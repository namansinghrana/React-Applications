import styled from "styled-components";

const Rules = () => {
  return (
    <RuleContainer>
        <h2>How to play dice game</h2>
        <div>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice</p> 
            <p>if you get wrong guess then  2 point will be dedcuted</p> 
        </div>
    </RuleContainer>
  )
}

export default Rules;


const RuleContainer = styled.div`

margin: 0 auto;
margin-top: 30px;
margin-bottom: 30px;
border-radius: 10px;
background: #FBF1F1;
padding: 20px;
max-width: 800px;
display: flex;
flex-direction: column;
align-items: center;

.h2{
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 20px;
}

.p{
    font-weight: 200;
    font-size: 10px;
}

`;