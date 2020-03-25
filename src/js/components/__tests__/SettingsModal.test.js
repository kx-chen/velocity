import SettingsModal from "../SettingsModal";
import { h } from "preact";
import { mount } from "enzyme";
import { expect } from "chai";

describe("SettingsModal", () => {
  test("SettingsModal", () => {
    const handleWallpaperChange = jest.fn();
    const closeMenu = jest.fn();
    const wrapper = mount(
      <SettingsModal
        closeMenu={closeMenu}
        handleWallpaperChange={handleWallpaperChange}
      />
    );

    wrapper.find("input").simulate("change");
    wrapper.find("a").simulate("click");

    expect(closeMenu.mock.calls.length).to.equal(1);
    expect(handleWallpaperChange.mock.calls.length).to.equal(1);
  });
});
