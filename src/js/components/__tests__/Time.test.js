import Time from "../Time";
import { h } from "preact";
import { mount } from "enzyme";
import { expect } from "chai";

describe("Time", () => {
  test("Time", () => {
    const hour = "9";
    const minute = "41";
    const wrapper = mount(<Time hour={hour} minute={minute} />);

    const theHour = wrapper.find("#hour").text();
    const theMinute = wrapper.find("#minute").text();

    expect(theHour).to.equal(hour);
    expect(theMinute).to.equal(minute);
  });
});
