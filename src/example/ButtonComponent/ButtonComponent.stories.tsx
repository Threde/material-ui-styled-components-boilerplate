import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ButtonComponent, ButtonComponentProps} from './ButtonComponent';

export default {
  title: 'example/Button',
  component: ButtonComponent
} as Meta;


const Template: Story<ButtonComponentProps> = (args) => <ButtonComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variants: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variants: 'secondary',
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
  variants:'transparent', 
  label: 'outlined',
  variant: "outlined", 
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