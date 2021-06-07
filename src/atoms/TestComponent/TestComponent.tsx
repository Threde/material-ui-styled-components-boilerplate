import React from "react";
import styled from "styled-components";


import {H4, H5, H6, Subtitle1, Body1, Caption, Overline} from '../../base/typography'


export interface TestComponentProps {
  theme: "primary" | "secondary";
}

 const Div = styled.div<TestComponentProps>`
   border: 2px solid black;
   text-align: center;
   width: 20%;
   padding: 16px;
   background-color:blue; //primary-color

   ${(props) => props.theme === 'secondary' && `background-color: #888;`}//secondary-color
`

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <Div theme={theme}>

    <H4 variant='h4'>Typography</H4>
   
    <H5 variant='h5'>Material-UI h5</H5>

    <H6 variant='h6'>i am a Material-UI h6 </H6>

    <Subtitle1 variant="subtitle1" >i am a Material-UI subtitle 1</Subtitle1>

    <Body1 variant='body1'>i am a Materia-UI body 1</Body1>

    <Caption variant="caption">caption text Materia-UI</Caption>

    <Overline variant="overline">overline text Materia-UI</Overline>

  </Div>
);

export default TestComponent;
