import NameForm from "../components/NameForm";
import Time from "../components/Time";
import UnderClockMessage from "../components/UnderClockMessage";
import { determineMessageUnderClock, getCurrentTime } from "../utils/utils";
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { connect } from "react-redux";

export function ClockContainer({ timeFormat }) {
  const timePerTick = 500;
  // TODO: call getCurrentTime less

  const [minute, setMinute] = useState(getCurrentTime(timeFormat)[1]);
  const [hour, setHour] = useState(getCurrentTime(timeFormat)[0]);
  const [messageUnderClock, setMessageUnderClock] = useState(
    determineMessageUnderClock()
  );
  useEffect(() => {
    setMessageUnderClock(determineMessageUnderClock());
  }, [minute]);

  let interval1 = setInterval(
    () => setMinute(getCurrentTime(timeFormat)[1]),
    timePerTick
  );
  let interval2 = setInterval(
    () => setHour(getCurrentTime(timeFormat)[0]),
    timePerTick
  );

  useEffect(() => {
    // wait for next tick so that time updates before clearing intervals
    setTimeout(() => {
      clearInterval(interval1);
      clearInterval(interval2);
    }, 1000);
  });

  return (
    <div id="clock-wrapper">
      <NameForm />
      <Time hour={hour} minute={minute} />
      <UnderClockMessage message={messageUnderClock} />
    </div>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch,
  };
}

function mapStateToProps(state, ownProps) {
  return {
    ...state,
    timeFormat: state.time_format,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClockContainer);
