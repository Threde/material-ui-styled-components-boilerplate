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
  size: 'medium',
  variants: 'primary',
  label: 'button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'medium',
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
export const outlinedPrimary = Template.bind({});
outlinedPrimary.args = {
  size: 'medium',
  variants: 'outPrimary',
  label: 'button'
};
export const outlinedSecondary = Template.bind({});
outlinedSecondary.args = {
  size: 'medium',
  variants: 'outSecondary',
  label: 'button'
};
export const Link = Template.bind({});
Link.args = {
  size: 'medium',
  variants: 'link',
  label: 'button'
};
export const Disabled = Template.bind({});
Disabled.args = {
  size: 'medium',
  variants: 'disabled',
  label: 'button',
  disabled:true
};





