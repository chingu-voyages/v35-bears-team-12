import React from "react";
import { render } from "@testing-library/react";

import { ProjectCard } from "./index";

describe("ProjectCard", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ProjectCard />);
    expect(baseElement).toBeTruthy();
  });
});
