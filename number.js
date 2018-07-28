function Button() {
  return (
    <div>
      <h2>WalEED making a input field that accepts number only</h2>
      <form>
        <input type="Number" id="inp" />
      </form>
    </div>
  );
}
ReactDOM.render(<Button label="Save" />, mountNode);
