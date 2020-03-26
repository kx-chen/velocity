import { ClockContainer } from "../ClockContainer";
import { h } from "preact";
import { mount } from "enzyme";

jest.mock("../../utils/utils", () => ({
  ...jest.requireActual("../../utils/utils"),
  getCurrentTime: jest
    .fn()
    // TODO: fix, hacky.
    .mockReturnValueOnce(["18", "59"])
    .mockReturnValueOnce(["18", "59"])
    .mockReturnValueOnce(["18", "59"])
    .mockReturnValueOnce(["18", "59"])
    .mockReturnValueOnce(["19", "59"])
    .mockReturnValueOnce(["19", "59"])
    .mockReturnValueOnce(["19", "59"])
    .mockReturnValueOnce(["19", "59"])
    .mockReturnValueOnce(["19", "59"])
    .mockReturnValueOnce(["19", "59"])
    .mockReturnValueOnce(["19", "59"])
    .mockReturnValueOnce(["19", "59"])
    .mockReturnValueOnce(["19", "59"])
    .mockReturnValueOnce(["19", "59"]),
  // TODO: integration test
  determineMessageUnderClock: jest.fn().mockReturnValue("Message Under Clock")
}));

describe("ClockContainer", () => {
  jest.useFakeTimers();

  test("updates clock and message when time changes", () => {
    const wrapper = mount(<ClockContainer />);

    expect(wrapper).toMatchSnapshot();
    jest.advanceTimersByTime(1000);
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });
});
