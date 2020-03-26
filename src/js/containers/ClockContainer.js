import NameForm from "../components/NameForm";
import Time from "../components/Time";
import UnderClockMessage from "../components/UnderClockMessage";
import { determineMessageUnderClock, getCurrentTime } from "../utils/utils";

import { h } from "preact";
import { useEffect, useState, useRef } from "preact/hooks";
import { connect } from "react-redux";

function useInterval(callback, delay) {
  let savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export function ClockContainer({ timeFormat }) {
  const [minute, setMinute] = useState(getCurrentTime(timeFormat)[1]);
  const [hour, setHour] = useState(getCurrentTime(timeFormat)[0]);
  const [messageUnderClock, setMessageUnderClock] = useState(
    determineMessageUnderClock()
  );
  useEffect(() => {
    setMessageUnderClock(determineMessageUnderClock());
  }, [minute]);

  useInterval(() => {
    setMinute(getCurrentTime(timeFormat)[1]);
    setHour(getCurrentTime(timeFormat)[0]);
  }, 500);

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
