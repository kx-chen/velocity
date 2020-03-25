import ClockContainer from "../ClockContainer";
import { h } from "preact";
import { mount } from "enzyme";

jest.mock("../../utils/utils", () => ({
  ...(jest.requireActual('../../utils/utils')),
  getCurrentTime: jest.fn()
    // TODO: fix, hacky.
    .mockReturnValueOnce(["18", "59"])
    .mockReturnValueOnce(["18", "59"])
    .mockReturnValueOnce(["18", "59"])
    .mockReturnValueOnce(["18", "59"])
    .mockReturnValueOnce(["19", "59"])
    .mockReturnValueOnce(["19", "59"])
    .mockReturnValueOnce(["19", "59"])
    .mockReturnValueOnce(["19", "59"])
}));

describe("ClockContainer", () => {
  jest.useFakeTimers();

  test("updates clock and message when time changes", () => {
    // TODO: see if can not mount second time
    const wrapper = mount(<ClockContainer />);

    expect(wrapper).toMatchSnapshot();
    jest.advanceTimersByTime(500);

    const wrapper2 = mount(<ClockContainer />);
    expect(wrapper2).toMatchSnapshot();
  });
});
