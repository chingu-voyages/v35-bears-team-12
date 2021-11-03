import React from "react";
import { render } from "@testing-library/react";

import { FooterSection } from "./index";

describe("FooterSection", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FooterSection />);
    expect(baseElement).toBeTruthy();
  });
});
