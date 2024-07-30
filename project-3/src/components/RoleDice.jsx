import { useState } from "react";
import styled from "styled-components"


const RoleDice = ({currentDice,roleDice}) => {

    return (
      <DiceContainer>
    <div className="dice"
    onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="" />
    </div>
    <p>Click On Dice To Roll</p>
    </DiceContainer>);
};

export default RoleDice;



const DiceContainer = styled.div`
    margin-top: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dice{
        cursor: pointer;
    }
    p{
        font-size: 18px;
    }
`;
