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
  label: 'button',
  size: 'medium'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  size: 'medium'
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
export const outlinedPrimary = Template.bind({});
outlinedPrimary.args = {
  variants: 'outPrimary',
  variant: "outlined",
  label: 'outlined',
  size: 'medium'
};
export const outlinedSecondary = Template.bind({});
outlinedSecondary.args = {
  variants: 'outSecondary',
  variant: "outlined",
  label: 'outlined',
  size: 'medium'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true,
  size: 'medium'
};

export const outlined = Template.bind({});
outlined.args = {
  variants:'transparent', 
  label: 'outlined',
  variant: "outlined", 
  color:'secondary',
  size: 'medium'
};

export const transparent = Template.bind({});
transparent.args = {
  label: 'transparent',
  variants:'transparent',
  color:'primary',
  size: 'medium'
};


export const ElevationEfect = Template.bind({});
ElevationEfect.args = {
  label: 'Elevation',
  variant: "contained",
  size: 'medium'
};

