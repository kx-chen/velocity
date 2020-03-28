import NameForm from "../components/NameForm";
import Time from "../components/Time";
import UnderClockMessage from "../components/UnderClockMessage";
import { setDisplayName } from "../actions/settings";
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

export function ClockContainer({ timeFormat, displayName, onNameChange }) {
  const [minute, setMinute] = useState(getCurrentTime(timeFormat)[1]);
  const [hour, setHour] = useState(getCurrentTime(timeFormat)[0]);
  const [messageUnderClock, setMessageUnderClock] = useState(
    determineMessageUnderClock(displayName)
  );

  useEffect(() => {
    setMessageUnderClock(determineMessageUnderClock(displayName));
  });

  useInterval(() => {
    setMinute(getCurrentTime(timeFormat)[1]);
    setHour(getCurrentTime(timeFormat)[0]);
  }, 500);

  // TODO: visible prop is SUPER hacky, change ASAP
  return (
    <div id="clock-wrapper">
      <NameForm onSubmit={onNameChange} visible={displayName !== null} />
      <Time hour={hour} minute={minute} visible={displayName === null} />
      <UnderClockMessage
        message={messageUnderClock}
        visible={displayName === null}
      />
    </div>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onNameChange: (e) => dispatch(setDisplayName(e)),
  };
}

function mapStateToProps(state, ownProps) {
  return {
    ...state,
    displayName: state.display_name,
    timeFormat: state.time_format,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClockContainer);
