module.exports = (componentName) => ({
  content: `
import React from "react";
import ${componentName} from "./${componentName}";

export default {
    title: "${componentName}"
};

export const WithBar = () => <${componentName} label="Hello" theme="primary"/>;

export const WithBaz = () => <${componentName} label="Hello" theme="secondary"/>;
`,
  extension: `.stories.tsx`
});
