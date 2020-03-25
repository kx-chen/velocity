import NameForm from "../NameForm";
import { h } from "preact";
import { mount } from "enzyme";
import { expect } from "chai";

describe("NameForm", () => {
  test("NameForm", () => {
    const wrapper = mount(<NameForm />);
    expect(wrapper.text()).to.include("Hi");
  });
});
