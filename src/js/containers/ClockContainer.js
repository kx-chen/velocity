import NameForm from "../components/NameForm";
import Time from "../components/Time";
import UnderClockMessage from "../components/UnderClockMessage";
import { determineMessageUnderClock, getCurrentTime } from "../utils/utils";
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

function ClockContainer() {
  const timePerTick = 500;
  let [currentHour, currentMinute] = getCurrentTime();

  const [minute, setMinute] = useState(currentMinute);
  const [hour, setHour] = useState(currentHour);
  const [messageUnderClock, setMessageUnderClock] = useState(
    determineMessageUnderClock(hour)
  );

  useEffect(() => {
    setMessageUnderClock(determineMessageUnderClock(hour));
  }, [minute]);

  setInterval(() => setMinute(currentMinute), timePerTick);
  setInterval(() => setHour(currentHour), timePerTick);
  console.log("ran");
  return (
    <div id="clock-wrapper">
      <NameForm />
      <Time hour={hour} minute={minute} />
      <UnderClockMessage message={messageUnderClock} />
    </div>
  );
}

export default ClockContainer;
