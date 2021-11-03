import React from "react";
import { render } from "@testing-library/react";

import { Avatar } from ".";

describe("Avatar", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Avatar />);
    expect(baseElement).toBeTruthy();
  });
});
