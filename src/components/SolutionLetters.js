import "../styles/Letters.scss";
const SolutionLetters = (props) => {
  return (
    <section>
      <div className="solution">
        <h2 className="title">Solución:</h2>
        <ul className="letters">{props.renderSolutionLetters}</ul>
      </div>
      <div className="error">
        <h2 className="title">Letras falladas:</h2>
        <ul className="letters">{props.renderErrorLetters}</ul>
      </div>
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
          onKeyDown={props.handleKeyDown}
          onChange={props.handleChange}
        />
      </form>
    </section>
  );
};

export default SolutionLetters;
