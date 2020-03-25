import SettingsIcon from "../SettingsIcon";
import { h } from "preact";
import { mount } from "enzyme";
import { expect } from "chai";

describe("SettingsIcon", () => {
  test("SettingsIcon", () => {
    const onClick = jest.fn();
    const wrapper = mount(<SettingsIcon onClick={onClick} />);

    wrapper.find("a").simulate("click");

    expect(onClick.mock.calls.length).to.equal(1);
  });
});
