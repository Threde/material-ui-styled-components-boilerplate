module.exports = (componentName) => ({
  content: `
import React from "react";
import styled from "styled-components";


import { } from '../../base/sizes'
import { } from '../../base/colors'
import { } from '../../base/typography' 

export interface ${componentName}Props {
    label?: string;
    theme: "primary" | "secondary";
  };

const Div = styled.div<${componentName}Props> 
    border: 2px solid black;
    background-color:lightblue; //primary-color
    padding:20px;
    $ {(props) => props.theme === 'secondary' && background-color: #888;} 
   //erase space between $ {  and add tip back quotes between background-color: #888;
   // add the respectives quotes to styled-components


const ${componentName}: React.FC<${componentName}Props> = ({ label, theme}) => (
    <Div theme={theme}>{label}</Div>
);

export default ${componentName};

`,
  extension: `.tsx`
});
