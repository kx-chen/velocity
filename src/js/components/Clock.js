import NameForm from './NameForm'
import Time from './Time'
import UnderClockMessage from './UnderClockMessage'
import { h } from 'preact';

function Clock() {
  return (
    <div id="clock-wrapper">
      <NameForm />
      <Time />
      <UnderClockMessage />
    </div>

  );
}

export default Clock;
