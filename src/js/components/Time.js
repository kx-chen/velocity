import { h } from "preact";

function Time({ hour, minute, visible }) {
  if (visible) {
    return null;
  }
  return (
    <div id="clock">
      <span id="hour">{hour}</span>
      <span id="minute">{minute}</span>
    </div>
  );
}

export default Time;
