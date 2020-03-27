import { h } from "preact";

function UnderClockMessage({ message, visible }) {
  if (visible) {
    return null;
  }
  return <div id="message-under-clock">{message}</div>;
}

export default UnderClockMessage;
