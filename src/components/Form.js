import "../styles/Form.scss";
const Form = (props) => {

const handleChange = (ev) => {
  props.handleChange(ev.target.value)
}

const handleKeyDown = (ev) => {
  // Sabrías decir para qué es esta línea
  ev.target.setSelectionRange(0, 1);
};

  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <label className="title" htmlFor="last-letter">
        Escribe una letra:
      </label>
      <input
        autoFocus
        autoComplete="off"
        className="form__input"
        maxLength="1"
        type="text"
        name="last-letter"
        id="last-letter"
        value={props.lastLetter}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;
