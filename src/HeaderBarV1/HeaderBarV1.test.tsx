// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import HeaderBarV1 from "./HeaderBarV1";
import { HeaderBarV1Props } from "./HeaderBarV1.types";

describe("Test Component", () => {
  let props: HeaderBarV1Props;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<HeaderBarV1 {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("HeaderBarV1");

    expect(component).toHaveTextContent("harvey was here");
  });
});
