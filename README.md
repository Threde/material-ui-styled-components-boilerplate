# material-ui-styled-components-boilerplate
A boilerplate for building a custom internal themed material-ui module for internal use following atomic design


   import {ButtonComponent, TestComponent} from 'a-react-mg'
    
    MATERIAL UI BUTTONS and STYLED-COMPONENTS PROPS:
    <TestComponent theme="secondary" />

    <ButtonComponent label='button' variants='primary'/>
    <ButtonComponent label='secondary' />
    <ButtonComponent label='large' size='large'/>
    <ButtonComponent label='small' size='small'/>

   MATERIAL UI PROPS and STYLED-COMPONENTS:

    <ButtonComponent label='disabled' disabled variants='primary'/>

    <ButtonComponent label='outlined'
                     variants='transparent' 
                     variant= "outlined" 
                     color='secondary' 
    />

    <ButtonComponent label='transparent' variants='transparent' color='primary'/>

    <ButtonComponent label='elevation' variant="contained"/>
    

      // we can use the MATERIAL UI props in our components:
         disabled
         disableElevation
         variant="outlined"
         variant="contained"
         color="primary"  
         color="secondary"


    Colors and sizies examples using to build boilerplate

    export const black = '#131111';
    export const white = '#fff!important';
    export const red = '#ca4b4b!important';
    export const green = '#2d5f3e';
    export const blue = '#9495ed!important';
    export const Purple = '#9f91ad';
    export const primary = 'rgb(20, 80, 170)!important';
    export const secondary = '#ca374d!important';
    export const almond = 'rgb(232,225,200)!important'

    export const xsmall = 4;
    export const small = 8;
    export const med = 16;
    export const large = 24;
    export const xlarge = 32;  

    //import in TestComponent
    import {xlarge,large} from '../../base/sizes'
    import { black,primary, almond} from '../../base/colors'

    const Div = styled.div<TestComponentProps>`
       border: 2px solid ${black};
       text-align: center;
       width: 20%;
       padding: ${large}px;
       margin:${xlarge}px;
       background-color:${primary}; //primary-color

       ${(props) => props.theme === 'secondary' && 
                   `background-color: ${almond};`} //secondary-color

      `

      // we can use the MATERIAL UI props in our components:
         disabled
         disableElevation
         variant="contained"
         variant="outlined"
         color="primary"  
         color="secondary"




 