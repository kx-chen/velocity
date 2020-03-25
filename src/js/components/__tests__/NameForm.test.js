import NameForm from "../NameForm";
import { h } from "preact";
import { mount } from "enzyme";

describe("NameForm", () => {
  test("NameForm", () => {
    const wrapper = mount(<NameForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
