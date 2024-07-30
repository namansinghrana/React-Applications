import styled from "styled-components";

const TotalScore = ({score}) => {
  return (
    <ScoreContainer> 
    <h1>{score}</h1>
    <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore;


const ScoreContainer = styled.div`
max-width: 200px;

h1{
    font-size: 80px;
    align-items: start;
    text-align: center;
    line-height: 100px;
}

p{
    text-align: center;
    font-size: 18px;
}
`;
