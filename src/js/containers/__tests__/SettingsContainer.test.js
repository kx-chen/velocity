import { SettingsContainer } from "../SettingsContainer";
import { h } from "preact";
import { mount } from "enzyme";

describe("SettingsContainer", () => {
  test("Settings opens on click", () => {
    const wrapper = mount(<SettingsContainer />);

    wrapper.find("#settings-cog").simulate("click");

    expect(wrapper).toMatchSnapshot();
  });

  test("Settings closes on clicking x", () => {
    const wrapper = mount(<SettingsContainer />);

    wrapper.find("#settings-cog").simulate("click");
    wrapper.find(".close-icon").simulate("click");

    expect(wrapper).toMatchSnapshot();
  });

  test("Settings closes when clicking settings cog again", () => {
    const wrapper = mount(<SettingsContainer />);

    wrapper.find("#settings-cog").simulate("click");
    wrapper.find("#settings-cog").simulate("click");

    expect(wrapper).toMatchSnapshot();
  });
});
