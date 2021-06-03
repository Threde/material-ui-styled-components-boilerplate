import React from "react";
export interface TestComponentProps {
    theme: "primary" | "secondary";
}
declare const TestComponent: React.FC<TestComponentProps>;
export default TestComponent;
