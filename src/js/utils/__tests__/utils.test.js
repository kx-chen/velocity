import {
  determineMessageUnderClock,
  getCurrentTime,
  checkTime,
} from "../utils";
import { expect } from "chai";

describe("utils", () => {
  test("checkTime", () => {
    const time = 8;

    const theTime = checkTime(time);

    expect(theTime).to.equal("08");
  });
});
