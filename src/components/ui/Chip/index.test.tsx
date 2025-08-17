import { render, screen } from "@testing-library/react";
import Chip from "./index";

test("Chip にテキストが表示される", () => {
  render(<Chip text="テスト用Chip" />);
  expect(screen.getByText("テスト用Chip")).toBeInTheDocument();
});
