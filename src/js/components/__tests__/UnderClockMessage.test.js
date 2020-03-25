import UnderClockMessage from "../UnderClockMessage";
import { h } from "preact";
import { mount } from "enzyme";
import { expect } from "chai";

describe("UnderClockMessage", () => {
  test("UnderClockMessage", () => {
    const message = "Good evening, Thog";
    const wrapper = mount(<UnderClockMessage message={message} />);

    const theMessage = wrapper.find("#message-under-clock").text();

    expect(theMessage).to.equal(message);
  });
});
