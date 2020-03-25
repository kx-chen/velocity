import ClockContainer from "../ClockContainer";
import { h } from "preact";
import { mount } from "enzyme";

jest.mock("../../utils/utils", () => ({
  ...(jest.requireActual('../../utils/utils')),
  getCurrentTime: jest.fn()
    .mockReturnValueOnce(["15", "59"])
    .mockReturnValueOnce(["18", "00"]),
}));

describe("ClockContainer", () => {
  jest.useFakeTimers();

  test("updates clock and message when time changes", () => {
    const wrapper = mount(<ClockContainer />);
    jest.runOnlyPendingTimers();
    const wrapper2 = mount(<ClockContainer />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper2).toMatchSnapshot();
  });
});
