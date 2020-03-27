import { h } from "preact";

function NameForm({ onSubmit, visible }) {
  if (visible) {
    return null;
  }
  return (
    <div id="name-form">
      <label className="name-label" htmlFor="name">
        Hi. What's your name?
      </label>
      <input
        type="text"
        id="name"
        autoComplete="off"
        autoFocus
        number="50"
        onKeyPress={(e) => onSubmit(e)}
      />
    </div>
  );
}

export default NameForm;
