import React from "react";
import { render } from "@testing-library/react";

import { Navbar } from "./index";

describe("Navbar", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Navbar />);
    expect(baseElement).toBeTruthy();
  });
});
