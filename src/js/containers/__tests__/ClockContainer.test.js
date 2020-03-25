import ClockContainer from "../ClockContainer";
import { h } from "preact";
import { mount } from "enzyme";

jest.mock("../../utils/utils", () => ({
  getCurrentTime: jest.fn(() => ["9", "41"]),
  determineMessageUnderClock: jest.fn(() => "Good evening, Thog."),
}));

describe("ClockContainer", () => {
  test("ClockContainer", () => {
    const wrapper = mount(<ClockContainer />);

    expect(wrapper).toMatchSnapshot();
  });
});
