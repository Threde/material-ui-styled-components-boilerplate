import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ButtonComponent, ButtonComponentProps} from './ButtonComponent';

export default {
  title: 'Material UI Button',
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;


const Template: Story<ButtonComponentProps> = (args) => <ButtonComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variants: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled:true
};

export const outlined = Template.bind({});
outlined.args = {
  variants:'transparent', //variants transparent using to can use MATERIAL UI props.
  label: 'outlined',
  variant: "outlined",  //variant from MATERIAL UI, variants from styled-components
  color:'secondary'
};

export const transparent = Template.bind({});
transparent.args = {
  label: 'transparent',
  variants:'transparent',
  color:'primary'
};


export const ElevationEfect = Template.bind({});
ElevationEfect.args = {
  label: 'Elevation',
  variant: "contained",
};