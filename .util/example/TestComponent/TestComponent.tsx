import React from "react";
import styled from "styled-components";
import {H1,H2,H3,H4, H5, H6, Subtitle1,Subtitle2,Body1,Body2,Caption, Overline} from '../../../src/base/typography'

export interface TestComponentProps {
  theme: "primary" | "secondary";
}

const Div = styled.div<TestComponentProps>`
   width:90%;
   border: 2px solid black;
   padding-left: 20px;
   background-color:lightblue; //primary-color
 
   ${(props) => props.theme === 'secondary' && `background-color: #b2d3cb;`}//secondary-color
`

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <Div theme={theme}>
    <H1 variant='h1'> h1. Heading</H1>
    <H2 variant='h2'> h2. Heading</H2>
    <H3 variant='h3'> h3. Heading</H3>
    <H4 variant='h4'> h4. Heading</H4>
    <H5 variant='h5'> h5. Heading</H5>
    <H6 variant='h6'> h6. Heading</H6>

    <Subtitle1 variant="subtitle1" >i am a Material UI subtitle 1</Subtitle1>
    <Subtitle2 variant="subtitle2" >i am a Material UI subtitle 2</Subtitle2>

    <Body1 variant='body1'>i am a Materia UI body 1</Body1>
    <Body2 variant='body2'>i am a Materia UI body 2</Body2>

    <Caption variant="caption">i am a caption text Materia UI</Caption>

    <Overline variant="overline">i am a overline text Materia UI</Overline>

  </Div>
);

export default TestComponent;
