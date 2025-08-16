import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Chip from "./index";

test("Chip にテキストが表示される", () => {
  render(
    <RecoilRoot>
      <Chip text="テスト用Chip" />
    </RecoilRoot>
  );
  expect(screen.getByText("テスト用Chip")).toBeInTheDocument();
});
