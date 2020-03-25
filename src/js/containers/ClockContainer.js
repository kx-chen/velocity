import NameForm from "../components/NameForm";
import Time from "../components/Time";
import UnderClockMessage from "../components/UnderClockMessage";
import { determineMessageUnderClock, getCurrentTime } from "../utils/utils";
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

function ClockContainer() {
  const timePerTick = 500;
  // TODO: call getCurrentTime less

  const [minute, setMinute] = useState(getCurrentTime()[1]);
  const [hour, setHour] = useState(getCurrentTime()[0]);
  const [messageUnderClock, setMessageUnderClock] = useState(
    determineMessageUnderClock(hour)
  );

  useEffect(() => {
    setMessageUnderClock(determineMessageUnderClock(hour));
  }, [minute]);

  // TODO: hooks allowed to be called in this way?
  setInterval(() => setMinute(getCurrentTime()[1]), timePerTick);
  setInterval(() => setHour(getCurrentTime()[0]), timePerTick);
  return (
    <div id="clock-wrapper">
      <NameForm />
      <Time hour={hour} minute={minute} />
      <UnderClockMessage message={messageUnderClock} />
    </div>
  );
}

export default ClockContainer;
