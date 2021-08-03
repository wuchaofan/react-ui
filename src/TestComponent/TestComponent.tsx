import React from "react";

import { TestComponentProps } from "./TestComponent.types";

import "./TestComponent.less";

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <div
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <h1 className="heading">hello</h1>
    <h2>测试</h2>
  </div>
);

export default TestComponent;
