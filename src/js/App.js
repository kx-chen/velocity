import { h } from "preact";
import Settings from './components/Settings'
import { setMessageUnderClock, startClock } from './utils/utils'
import Clock from './components/Clock'
import { useEffect } from 'preact/hooks'

function App() {
  useEffect(() => {
    startClock();
    setMessageUnderClock();
  }, []);

  return (
    <div id="body-wrapper">
      <Clock/>
      <Settings/>
    </div>
  );
}

export default App;
