import styled, { css } from "styled-components";
import React from 'react'
import PropTypes from 'prop-types';
import { CardMedia, Paper, Card } from "@material-ui/core";
import Bgimage1 from '../../../images/bgimage_1.jpg'
import Bgimage2 from '../../../images/bgimage_2.jpg'
import Poll from '../../../images/polling.png'

export const Container = styled.div`
  margin: 0px auto;
  max-width: 800px;
  height: 100%;
  display: flex;
  min-height: 400px;
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
  
  max-width: 96px;
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
  background-image: ${(props)=>props.backgroundImage}
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


   
  
const ImageChoice =(props)=> {
  const imgresult=props.imgresult
  

  
    return(
      <Container>
        <h1>{props.data2.question}</h1>
      <MainContainer>
        {imgresult.map((imgresult, i) => {
          return (
            <BarChartContainer key={i}>
             <div><img src={props.images.bgurl}/></div>
             <Number color={imgresult.colors[1]}  >{imgresult.distance}</Number>
              <MakeBar height={imgresult.distance * 2} colors={imgresult.colors} />
             
            
            </BarChartContainer>
          );
        })}
      </MainContainer>
      <BlackLine />
    </Container>
    );
  } 
  export default ImageChoice