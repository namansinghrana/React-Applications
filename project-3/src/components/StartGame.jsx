import { Button } from "../styled/Button";
import styled from "styled-components"

const StartGame = ({toggle}) => {
  return(
  <Container>
  <img src="/images/dices.png"/>
  <div className="content">
    <h1>Dice Game</h1>
    <div className="start-btn">      
    <Button onClick={toggle}>Play Now</Button>    
 </div> </div>
  </Container>
    );
};

export default StartGame;

const Container = styled.div`
display: flex;
justify-content: center;
margin-top: 30px;
margin-left: 140px;
align-items: center;
max-width: 1012px;
height: auto;

.start-btn{
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-right: 5px;
}

.content{
  h1{
    font-size: 86px;
    font-weight: 700;
    white-space: nowrap;
}}`;