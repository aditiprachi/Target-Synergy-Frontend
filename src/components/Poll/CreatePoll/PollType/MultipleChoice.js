import styled, { css } from "styled-components";
import React, {useState} from 'react'
import Button from '@material-ui/core/Button';


export const Container = styled.div`
  margin: 0px auto;
  max-width: 1000px;
  height: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  min-height: inherit;
`;

export const BarChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const Chart = css`
  margin-top: 0%;
  width: 100%;
  max-width: 86px;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 420px) {
    width: 34px;
  }
`;

export const Number = styled.span`
  font-size: 1.5rem;
  text-align: center;
  color: ${(props) => props.color};
`;

export const MakeBar = styled.div`
  height: ${(props) => props.height}%;
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.colors[0]},
    ${(props) => props.colors[1]}
  );
  ${Chart};
`;

export const BlackLine = styled.div`
  width: 100%;
  height: 5px;
  background-color: grey;
`;


  
  
function MultipleChoice ({data1, result, inputList, textcolor}) {
  
 

    return(
      <Container>
        <h2 style={{color: textcolor}}>{data1.question}</h2>
        <MainContainer>
        {result.map(( result, i) => {
          return (
            <BarChartContainer key={i}>
              <Number color={result.colors[1]}>{result.distance}</Number>
              <MakeBar height={result.distance * 2} colors={result.colors} />
              <b style={{color: textcolor}}>{inputList[i].choice}</b> 
              
            </BarChartContainer>
          );
        })}
      </MainContainer>
      <BlackLine />
    </Container>
    );
  } 
  export default MultipleChoice